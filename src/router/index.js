import { createRouter, createWebHistory } from 'vue-router'
import IndexSection from '@/pages/index.vue'
import indexAdmin from "@/pages/indexAdmin.vue";
import AdminDescription from "@/pages/SectionAdmin/AdminDescription"
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
    {
      path: '/admin/:id',
      name: 'AdminDescriptionPage',
      component: AdminDescription,
    }
  ]
})
