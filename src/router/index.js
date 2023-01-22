import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: ProjectsView
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
