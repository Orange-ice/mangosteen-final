import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  { path: '/welcome', component: () => import('../views/Welcome') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
