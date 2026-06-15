import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useNotificationStore } from '../src/stores/notification'

describe('notification store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('démarre avec une liste vide', () => {
    const store = useNotificationStore()
    expect(store.notifications).toHaveLength(0)
  })

  it('ajoute une notification de type info par défaut', () => {
    const store = useNotificationStore()
    store.add('Message info')
    expect(store.notifications).toHaveLength(1)
    expect(store.notifications[0].message).toBe('Message info')
    expect(store.notifications[0].type).toBe('info')
  })

  it('ajoute une notification de type success', () => {
    const store = useNotificationStore()
    store.success('Opération réussie')
    expect(store.notifications[0].type).toBe('success')
  })

  it('ajoute une notification de type error', () => {
    const store = useNotificationStore()
    store.error('Une erreur est survenue')
    expect(store.notifications[0].type).toBe('error')
  })

  it('supprime une notification par id', () => {
    const store = useNotificationStore()
    store.add('Notif à supprimer')
    const id = store.notifications[0].id
    store.remove(id)
    expect(store.notifications).toHaveLength(0)
  })

  it('supprime automatiquement la notification après 4 secondes', () => {
    const store = useNotificationStore()
    store.add('Notif temporaire')
    expect(store.notifications).toHaveLength(1)
    vi.advanceTimersByTime(4000)
    expect(store.notifications).toHaveLength(0)
  })

  it('peut gérer plusieurs notifications simultanées', () => {
    const store = useNotificationStore()
    store.success('Première')
    store.error('Deuxième')
    store.add('Troisième')
    expect(store.notifications).toHaveLength(3)
  })
})
