import { createRouter, createWebHistory } from 'vue-router'
import OneSectionProjectPass from "@/pages/OneSection/OneSectionProjectPass.vue";
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
