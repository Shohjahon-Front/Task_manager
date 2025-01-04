import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddNewProject from '@/views/AddNewProject.vue'
import EditProject from '@/views/EditProject.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'add',
    component: AddNewProject
  },
  {
    path: '/edit-project', // Parametrsiz marshrut
    name: 'EditProjectNoId',
    component: EditProject
  },
  {
    path: '/edit-project/:id', // Parametrli marshrut
    name: 'EditProject',
    component: EditProject,
    props: true
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
