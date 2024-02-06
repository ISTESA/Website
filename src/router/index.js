import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  // {
  //   path: '/profile',
  //   name: 'profile',
  //   component: ProfileView
  // },
  // Jika kita ingin memunculkan props kita pada route
  // Kita dapat menambahkan ":" pada path
  // Nantinya bagian ":" pada path dapat diisi
  // Dengan props yang bersangkutan  
//   {
//     path: '/account/:username',
//     name: 'account',
//     component: AccountView,
//     // Menambah alias disini artinya menambahkan
//     // "rute" lain dengan nama yang sama
//     alias: ['/account']
//   },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_API_BASE_URL),
  routes
})

export default router