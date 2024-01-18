import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import RoleView from '@/views/RoleView.vue'
import PersonalView from '@/views/PersonalView.vue'
import JurnalView from '@/views/JurnalView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
  path: '/role',
  name: 'role',
  component: RoleView
},
{
path: '/jurnal',
name: 'jurnal',
component: JurnalView
},
{
path: '/personal',
name: 'personal',
component: PersonalView
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
