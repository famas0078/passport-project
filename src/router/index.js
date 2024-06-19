import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Hell from "@/components/Hell.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/test',
      component: Hell
    },
  ]
})
