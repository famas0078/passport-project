import { createRouter, createWebHistory } from 'vue-router'
import IndexSection from '@/pages/index.vue'
import indexAdmin from "@/pages/indexAdmin.vue";
import AdminDescription from "@/pages/SectionAdmin/AdminDescription"

// components auth

import login from '@/auth/login.vue'
import register from '@/auth/register.vue'

const routes = [
  {
    path: '/',
    component: IndexSection
  },
  {
    path: '/admin/auth/login',
    component: login,
  },
  {
    path: '/admin/auth/register',
    component: register
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

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const path = ["/admin/auth/login", "/admin/auth/register", "/admin"]
  if (path.includes(to.path)) {
    next()
  } else {
    next(`/admin/auth/login?next=${to.path}`);
  }
});

export default router;
