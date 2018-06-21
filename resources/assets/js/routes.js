import Home from '@/components/pages/Home.vue'
import Login from '@/components/pages/Login.vue'
import Register from '@/components/pages/Register.vue'
import Logout from '@/components/pages/Logout.vue'

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/login', name: 'login', component: Login, meta: { requiresVisitor: true }},
  { path: '/register', name: 'register', component: Register, meta: { requiresVisitor: true }},
  { path: '/logout', name: 'logout', component: Logout, meta: { requiresAuth: true }},
]

export default routes