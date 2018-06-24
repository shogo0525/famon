import Home from '@/components/pages/Home.vue'
import Login from '@/components/pages/Login.vue'
import Register from '@/components/pages/Register.vue'
import AddItem from '@/components/pages/AddItem.vue'

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/login', name: 'login', component: Login, meta: { requiresVisitor: true }},
  { path: '/register', name: 'register', component: Register, meta: { requiresVisitor: true }},
  { path: '/add-item', name: 'add-item', component: AddItem, meta: { requiresVisitor: true }}
]

export default routes