import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '../src/views/Home.vue'

describe('Home.vue', () => {
  it('renders home page content', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toContain('Bienvenue sur notre plateforme')
    expect(wrapper.text()).toContain('Nos services')
  })
})
