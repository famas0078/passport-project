import { createRouter, createWebHistory } from 'vue-router'
import IndexSection from '@/pages/indexPages/index.vue'
import IndexPassport from '@/pages/passport/indexPassport.vue'
import indexAdmin from "@/pages/admin/indexAdmin.vue";
import AdminDescription from "@/pages/admin/AdminDescription.vue"
import indexLending from "@/pages/lending/indexLending.vue"
import indexSimplified from "@/pages/passport/indexSimplified.vue"
import IndexInvestment from "@/pages/investment/indexInvestment.vue";
import verification from "@/pages/investment/verification/index.vue"
import filters from "@/pages/investment/filters/filters.vue";
// components auth

import login from '@/auth/login.vue'
import register from '@/auth/register.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: indexLending
  },
  {
    path: '/passport',
    name: 'form',
    component: IndexSection,
    children: [
      {
        path: '',
        name: 'form',
        component: IndexPassport
      },
      {
        path: 'simplified',
        name: 'simpleForm',
        component: indexSimplified
      }
    ]
  },
  {
    path: '/verification',
    name: 'verification',
    component: verification,
  },
  {
    path: '/admin/auth/login',
    name: 'login',
    component: login,
  },
  {
    path: '/admin/auth/register',
    component: register
  },
  {
    path: '/admin',
    component: indexAdmin,
    meta: { requiresAuth: true },
  },
  {
    path: '/admin/:id',
    name: 'AdminDescriptionPage',
    component: AdminDescription,
    meta: { requiresAuth: true },
  },
  {
    path: '/IndexInvestment',
    name: 'IndexInvestment',
    component: IndexInvestment,
  },
  {
    path: '/filters',
    name: 'filters',
    component: filters,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("User");
  // const path = ["/admin/auth/login", "/admin/auth/register", "/", "/passport" ]
  // if (path.includes(to.path) || localStorage.getItem("User")) {
  //   next()
  // } else {
  //   next(`/admin/auth/login?next=${to.path}`);
  // }
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'login' }); // Перенаправляем на страницу логина, если не аутентифицирован
  } else {
    next(); // Продолжить навигацию
  }
});

export default router;
