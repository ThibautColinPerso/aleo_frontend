import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth'
import Home from './views/Home.vue'
import About from './views/About.vue'
import WhyUs from './views/WhyUs.vue'
import Login from './components/Login.vue'
import RegisterParent from './components/RegisterParent.vue'
import RegisterBabysitter from './components/RegisterBabysitter.vue'
import RegistrationSuccess from './views/RegistrationSuccess.vue'
import EmailValidation from './views/EmailValidation.vue'
import ParentDashboard from './views/ParentDashboard.vue'
import BabysitterDashboard from './views/BabysitterDashboard.vue'
import ParentBabysitters from './components/ParentBabysitters.vue'
import MessagesList from './components/MessagesList.vue'
import BabysitterProfile from './components/BabysitterProfile.vue'
import CarteNourrices from './components/CarteNourrices.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/why-us', name: 'WhyUs', component: WhyUs },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register-parent', name: 'RegisterParent', component: RegisterParent },
  { path: '/register-babysitter', name: 'RegisterBabysitter', component: RegisterBabysitter },
  { path: '/inscription-confirmee', name: 'RegistrationSuccess', component: RegistrationSuccess },
  { path: '/validation-email', name: 'EmailValidation', component: EmailValidation },
  {
    path: '/parent-dashboard',
    component: ParentDashboard,
    meta: { requiresAuth: true, role: 'parent' },
    children: [
      { path: '', redirect: '/parent-dashboard/babysitters' },
      { path: 'babysitters', component: ParentBabysitters },
      { path: 'messages', component: MessagesList },
      { path: 'carte', component: CarteNourrices }
    ]
  },
  {
    path: '/babysitter-dashboard',
    component: BabysitterDashboard,
    meta: { requiresAuth: true, role: 'babysitter' },
    children: [
      { path: '', redirect: '/babysitter-dashboard/messages' },
      { path: 'messages', component: MessagesList },
      { path: 'profile', component: BabysitterProfile }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
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
})

export default router
