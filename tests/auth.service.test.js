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

  describe('login()', () => {
    it('appelle POST /login avec email et password', () => {
      apiClient.post.mockResolvedValue({ data: { token: 'tok' } })
      authService.login('user@test.fr', 'secret')
      expect(apiClient.post).toHaveBeenCalledWith('/login', {
        email: 'user@test.fr',
        password: 'secret'
      })
    })

    it('retourne la promesse résolue du client', async () => {
      const expected = { data: { token: 'abc' } }
      apiClient.post.mockResolvedValue(expected)
      await expect(authService.login('a@b.com', 'pw')).resolves.toEqual(expected)
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
    it('appelle POST /register avec Content-Type multipart/form-data', () => {
      const formData = new FormData()
      formData.append('nom', 'Alice')
      apiClient.post.mockResolvedValue({ status: 201 })
      authService.registerBabysitter(formData)
      expect(apiClient.post).toHaveBeenCalledWith(
        '/register',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
    })
  })

  describe('validateEmail()', () => {
    it('appelle PUT /parents/validation avec le token en paramètre', () => {
      apiClient.put.mockResolvedValue({ status: 200 })
      authService.validateEmail('mon-token-123')
      expect(apiClient.put).toHaveBeenCalledWith('/parents/validation', null, {
        params: { token: 'mon-token-123' }
      })
    })

    it('retourne la promesse résolue du client en cas de succès', async () => {
      const response = { status: 200, data: {} }
      apiClient.put.mockResolvedValue(response)
      await expect(authService.validateEmail('tok-ok')).resolves.toEqual(response)
    })

    it('propage le rejet du client en cas d\'erreur', async () => {
      const error = { response: { status: 400, data: { message: 'Token invalide' } } }
      apiClient.put.mockRejectedValue(error)
      await expect(authService.validateEmail('tok-bad')).rejects.toEqual(error)
    })

    it('fonctionne avec un token vide (validation côté backend)', () => {
      apiClient.put.mockResolvedValue({ status: 200 })
      authService.validateEmail('')
      expect(apiClient.put).toHaveBeenCalledWith('/parents/validation', null, {
        params: { token: '' }
      })
    })
  })
})
