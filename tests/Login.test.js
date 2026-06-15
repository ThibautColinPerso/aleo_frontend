import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Login from '../src/components/Login.vue'
import axios from 'axios'

// Mock axios
vi.mock('axios')

describe('Login.vue', () => {
  it('renders login form', () => {
    const wrapper = mount(Login)
    expect(wrapper.text()).toContain('Connexion')
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
  })

  it('calls login API on form submit', async () => {
    const mockResponse = {
      data: {
        user: { role: 'parent' },
        token: 'fake-token'
      }
    }
    axios.post.mockResolvedValue(mockResponse)

    const wrapper = mount(Login)
    await wrapper.find('input[type="email"]').setValue('test@example.com')
    await wrapper.find('input[type="password"]').setValue('password')
    await wrapper.find('form').trigger('submit.prevent')

    expect(axios.post).toHaveBeenCalledWith('/api/login', {
      email: 'test@example.com',
      password: 'password'
    })
  })
})
