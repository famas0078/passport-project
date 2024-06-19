import { createRouter, createWebHistory } from 'vue-router'
import Hell from "@/components/Hell.vue";
import Header from "@/components/header/header.vue";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Header
    },
    {
      path: '/test',
      component: Hell
    },
  ]
})
