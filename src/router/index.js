import { createRouter, createWebHistory } from 'vue-router'
import IndexSection from '@/pages/index.vue'
import indexAdmin from "@/pages/indexAdmin.vue";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: IndexSection
    },
    {
      path: '/admin',
      component: indexAdmin
    },
  ]
})
