import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '../src/stores/auth'

describe('auth store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
  })

  describe('state initial', () => {
    it('user et token sont null par défaut', () => {
      const store = useAuthStore()
      expect(store.user).toBeNull()
      expect(store.token).toBeNull()
    })
  })

  describe('getter isAuthenticated', () => {
    it('retourne false quand token est null', () => {
      const store = useAuthStore()
      expect(store.isAuthenticated).toBe(false)
    })

    it('retourne true quand un token est défini', () => {
      const store = useAuthStore()
      store.token = 'abc123'
      expect(store.isAuthenticated).toBe(true)
    })
  })

  describe('getter userRole', () => {
    it("retourne undefined quand aucun utilisateur n'est connecté", () => {
      const store = useAuthStore()
      expect(store.userRole).toBeUndefined()
    })

    it('retourne le rôle de l\'utilisateur connecté', () => {
      const store = useAuthStore()
      store.user = { role: 'parent' }
      expect(store.userRole).toBe('parent')
    })
  })

  describe('action login()', () => {
    it('met à jour user et token dans le state', () => {
      const store = useAuthStore()
      store.login({ role: 'babysitter', name: 'Alice' }, 'tok-xyz')
      expect(store.user).toEqual({ role: 'babysitter', name: 'Alice' })
      expect(store.token).toBe('tok-xyz')
    })

    it('persiste user et token dans localStorage', () => {
      const store = useAuthStore()
      store.login({ role: 'parent', name: 'Bob' }, 'tok-abc')
      expect(JSON.parse(localStorage.getItem('user'))).toEqual({ role: 'parent', name: 'Bob' })
      expect(localStorage.getItem('token')).toBe('tok-abc')
    })
  })

  describe('action logout()', () => {
    it('remet user et token à null', () => {
      const store = useAuthStore()
      store.login({ role: 'parent' }, 'tok-abc')
      store.logout()
      expect(store.user).toBeNull()
      expect(store.token).toBeNull()
    })

    it('supprime user et token du localStorage', () => {
      const store = useAuthStore()
      store.login({ role: 'parent' }, 'tok-abc')
      store.logout()
      expect(localStorage.getItem('user')).toBeNull()
      expect(localStorage.getItem('token')).toBeNull()
    })
  })

  describe('action initializeAuth()', () => {
    it('restaure la session depuis localStorage si les données existent', () => {
      localStorage.setItem('user', JSON.stringify({ role: 'babysitter' }))
      localStorage.setItem('token', 'restored-token')
      const store = useAuthStore()
      store.initializeAuth()
      expect(store.user).toEqual({ role: 'babysitter' })
      expect(store.token).toBe('restored-token')
    })

    it('ne modifie pas le state si localStorage est vide', () => {
      const store = useAuthStore()
      store.initializeAuth()
      expect(store.user).toBeNull()
      expect(store.token).toBeNull()
    })
  })
})
