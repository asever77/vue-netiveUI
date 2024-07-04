import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import LayoutBase from '@/components/layout/LayoutBase.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: LayoutBase,
    children: [
      {
        path: '/',
        name: 'MainView',
        component: MainView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
