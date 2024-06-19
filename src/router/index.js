import { createRouter, createWebHistory } from 'vue-router'
import IndexSection from '../pages/index.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: IndexSection
    },
  ]
})
