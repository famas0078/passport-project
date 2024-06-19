import { createRouter, createWebHistory } from 'vue-router'
import Hell from "@/components/Hell.vue";
import OneSectionProjectPass from "@/pages/OneSection/OneSectionProjectPass.vue";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: OneSectionProjectPass
    },
    {
      path: '/test',
      component: Hell
    },
  ]
})
