import Home from '@/components/pages/Home.vue'
import Login from '@/components/pages/Login.vue'

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/login', name: 'login', component: Login}
]

export default routes