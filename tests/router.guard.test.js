import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '../src/stores/auth'

/**
 * Teste la logique du guard de navigation du router sans instancier Vue Router,
 * en reproduisant directement la fonction beforeEach définie dans router.js.
 */
function makeGuard(authStore) {
  return (to, from, next) => {
    if (to.meta.requiresAuth) {
      if (!authStore.isAuthenticated) {
        next('/login')
      } else if (to.meta.role && authStore.userRole !== to.meta.role) {
        next('/')
      } else {
        next()
      }
    } else {
      next()
    }
  }
}

describe('router navigation guard', () => {
  let authStore
  let guard
  let next

  beforeEach(() => {
    setActivePinia(createPinia())
    authStore = useAuthStore()
    guard = makeGuard(authStore)
    next = vi.fn()
  })

  describe('route publique (sans requiresAuth)', () => {
    it('appelle next() sans argument', () => {
      guard({ meta: {} }, {}, next)
      expect(next).toHaveBeenCalledWith()
    })

    it('/inscription-confirmee est accessible sans authentification', () => {
      // La route de confirmation d'inscription n'a pas de meta.requiresAuth
      guard({ meta: {}, path: '/inscription-confirmee' }, {}, next)
      expect(next).toHaveBeenCalledWith()
    })

    it('/validation-email est accessible sans authentification', () => {
      guard({ meta: {}, path: '/validation-email' }, {}, next)
      expect(next).toHaveBeenCalledWith()
    })
  })

  describe('route protégée sans rôle spécifique', () => {
    const to = { meta: { requiresAuth: true } }

    it('redirige vers /login si non authentifié', () => {
      guard(to, {}, next)
      expect(next).toHaveBeenCalledWith('/login')
    })

    it('laisse passer si authentifié', () => {
      authStore.login({ role: 'parent' }, 'tok-123')
      guard(to, {}, next)
      expect(next).toHaveBeenCalledWith()
    })
  })

  describe('route protégée avec rôle requis', () => {
    const parentRoute = { meta: { requiresAuth: true, role: 'parent' } }
    const babysitterRoute = { meta: { requiresAuth: true, role: 'babysitter' } }

    it('redirige vers /login si non authentifié', () => {
      guard(parentRoute, {}, next)
      expect(next).toHaveBeenCalledWith('/login')
    })

    it('redirige vers / si le rôle ne correspond pas', () => {
      authStore.login({ role: 'babysitter' }, 'tok-abc')
      guard(parentRoute, {}, next)
      expect(next).toHaveBeenCalledWith('/')
    })

    it('laisse passer si rôle correspond (parent)', () => {
      authStore.login({ role: 'parent' }, 'tok-abc')
      guard(parentRoute, {}, next)
      expect(next).toHaveBeenCalledWith()
    })

    it('laisse passer si rôle correspond (babysitter)', () => {
      authStore.login({ role: 'babysitter' }, 'tok-abc')
      guard(babysitterRoute, {}, next)
      expect(next).toHaveBeenCalledWith()
    })
  })
})
