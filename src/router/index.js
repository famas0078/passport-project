import { createRouter, createWebHistory } from 'vue-router'
import OneSectionProjectPass from "@/pages/OneSection/OneSectionProjectPass.vue";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: OneSectionProjectPass
    },
  ]
})
