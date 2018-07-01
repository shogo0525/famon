import Home from '@/components/pages/Home.vue'
import Login from '@/components/pages/Login.vue'
import Register from '@/components/pages/Register.vue'
import AddItem from '@/components/pages/AddItem.vue'
import Chart from '@/components/pages/Chart.vue'
import AddCategory from '@/components/pages/AddCategory.vue'
import Setting from '@/components/pages/Setting.vue'

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/login', name: 'login', component: Login, meta: { requiresVisitor: true }},
  { path: '/register', name: 'register', component: Register, meta: { requiresVisitor: true }},
  { path: '/add-item', name: 'add-item', component: AddItem},
  { path: '/chart', name: 'chart', component: Chart},
  { path: '/add-category', name: 'add-category', component: AddCategory},
  { path: '/setting', name: 'setting', component: Setting}
]

export default routes