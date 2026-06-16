import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock du client Axios avant l'import du service
vi.mock('../src/api/client', () => ({
  default: {
    put: vi.fn(),
    post: vi.fn()
  }
}))

import apiClient from '../src/api/client'
import { authService } from '../src/services/auth.service'

describe('authService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('loginParent()', () => {
    it('appelle POST /parents/connexion avec login et motDePasse', () => {
      apiClient.post.mockResolvedValue({ data: { token: 'tok' } })
      authService.loginParent('parent42', 'secret')
      expect(apiClient.post).toHaveBeenCalledWith('/parents/connexion', {
        login: 'parent42',
        motDePasse: 'secret'
      })
    })

    it('accepte un email comme login', () => {
      apiClient.post.mockResolvedValue({ data: { token: 'tok' } })
      authService.loginParent('marie@test.fr', 'secret')
      expect(apiClient.post).toHaveBeenCalledWith('/parents/connexion', {
        login: 'marie@test.fr',
        motDePasse: 'secret'
      })
    })

    it('retourne la promesse résolue du client', async () => {
      const expected = { data: { token: 'abc' } }
      apiClient.post.mockResolvedValue(expected)
      await expect(authService.loginParent('p', 'pw')).resolves.toEqual(expected)
    })
  })

  describe('loginBabysitter()', () => {
    it('appelle POST /nourrices/connexion avec login et motDePasse', () => {
      apiClient.post.mockResolvedValue({ data: { token: 'tok' } })
      authService.loginBabysitter('nourrice1', 'secret')
      expect(apiClient.post).toHaveBeenCalledWith('/nourrices/connexion', {
        login: 'nourrice1',
        motDePasse: 'secret'
      })
    })

    it('accepte un email comme login', () => {
      apiClient.post.mockResolvedValue({ data: { token: 'tok' } })
      authService.loginBabysitter('sophie@test.fr', 'secret')
      expect(apiClient.post).toHaveBeenCalledWith('/nourrices/connexion', {
        login: 'sophie@test.fr',
        motDePasse: 'secret'
      })
    })

    it('retourne la promesse résolue du client', async () => {
      const expected = { data: { token: 'xyz', user: { role: 'babysitter' } } }
      apiClient.post.mockResolvedValue(expected)
      await expect(authService.loginBabysitter('b', 'pw')).resolves.toEqual(expected)
    })
  })

  describe('registerParent()', () => {
    it('appelle POST /parents/inscription avec le payload complet', () => {
      const payload = {
        identifiant: 'parent1',
        motDePasse: 'pw',
        nom: 'Dupont',
        prenom: 'Marie',
        email: 'marie@test.fr',
        enfants: [{ prenom: 'Léo', dateDeNaissance: '2020-01-01', sexe: 'MASCULIN' }]
      }
      apiClient.post.mockResolvedValue({ data: { email: 'marie@test.fr' }, status: 201 })
      authService.registerParent(payload)
      expect(apiClient.post).toHaveBeenCalledWith('/parents/inscription', payload)
    })
  })

  describe('registerBabysitter()', () => {
    it('appelle POST /nourrices/inscription avec le payload JSON', () => {
      const payload = { nom: 'Alice', identifiant: 'alice.martin', email: 'alice@test.fr', motDePasse: 'pw' }
      apiClient.post.mockResolvedValue({ status: 201 })
      authService.registerBabysitter(payload)
      expect(apiClient.post).toHaveBeenCalledWith('/nourrices/inscription', payload)
    })
  })

  describe('validateEmailParent()', () => {
    it('appelle PUT /parents/validation avec le token en paramètre', () => {
      apiClient.put.mockResolvedValue({ status: 200 })
      authService.validateEmailParent('mon-token-123')
      expect(apiClient.put).toHaveBeenCalledWith('/parents/validation', null, {
        params: { token: 'mon-token-123' }
      })
    })

    it('retourne la promesse résolue du client en cas de succès', async () => {
      const response = { status: 200, data: {} }
      apiClient.put.mockResolvedValue(response)
      await expect(authService.validateEmailParent('tok-ok')).resolves.toEqual(response)
    })

    it('propage le rejet du client en cas d\'erreur', async () => {
      const error = { response: { status: 400, data: { message: 'Token invalide' } } }
      apiClient.put.mockRejectedValue(error)
      await expect(authService.validateEmailParent('tok-bad')).rejects.toEqual(error)
    })

    it('fonctionne avec un token vide (validation côté backend)', () => {
      apiClient.put.mockResolvedValue({ status: 200 })
      authService.validateEmailParent('')
      expect(apiClient.put).toHaveBeenCalledWith('/parents/validation', null, {
        params: { token: '' }
      })
    })
  })

  describe('validateEmailBabysitter()', () => {
    it('appelle PUT /nourrices/validation avec le token en paramètre', () => {
      apiClient.put.mockResolvedValue({ status: 200 })
      authService.validateEmailBabysitter('token-nourrice-abc')
      expect(apiClient.put).toHaveBeenCalledWith('/nourrices/validation', null, {
        params: { token: 'token-nourrice-abc' }
      })
    })

    it('retourne la promesse résolue du client en cas de succès', async () => {
      const response = { status: 200, data: {} }
      apiClient.put.mockResolvedValue(response)
      await expect(authService.validateEmailBabysitter('tok-ok')).resolves.toEqual(response)
    })

    it('propage le rejet du client en cas d\'erreur', async () => {
      const error = { response: { status: 400, data: { message: 'Token invalide' } } }
      apiClient.put.mockRejectedValue(error)
      await expect(authService.validateEmailBabysitter('tok-bad')).rejects.toEqual(error)
    })
  })

  describe('logoutParent()', () => {
    it('appelle POST /parents/deconnexion sans body', () => {
      apiClient.post.mockResolvedValue({ status: 200 })
      authService.logoutParent()
      expect(apiClient.post).toHaveBeenCalledWith('/parents/deconnexion')
    })

    it('retourne la promesse résolue du client en cas de succès', async () => {
      const response = { status: 200 }
      apiClient.post.mockResolvedValue(response)
      await expect(authService.logoutParent()).resolves.toEqual(response)
    })

    it('propage le rejet du client en cas d\'erreur', async () => {
      const error = { response: { status: 401 } }
      apiClient.post.mockRejectedValue(error)
      await expect(authService.logoutParent()).rejects.toEqual(error)
    })
  })

  describe('logoutBabysitter()', () => {
    it('appelle POST /nourrices/deconnexion sans body', () => {
      apiClient.post.mockResolvedValue({ status: 200 })
      authService.logoutBabysitter()
      expect(apiClient.post).toHaveBeenCalledWith('/nourrices/deconnexion')
    })

    it('retourne la promesse résolue du client en cas de succès', async () => {
      const response = { status: 200 }
      apiClient.post.mockResolvedValue(response)
      await expect(authService.logoutBabysitter()).resolves.toEqual(response)
    })

    it('propage le rejet du client en cas d\'erreur', async () => {
      const error = { response: { status: 401 } }
      apiClient.post.mockRejectedValue(error)
      await expect(authService.logoutBabysitter()).rejects.toEqual(error)
    })
  })
})
