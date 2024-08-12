import { createRouter, createWebHistory } from 'vue-router';

import MainView from '@/views/MainView.vue';
import GuideView from '@/views/GuideView.vue';
import CheckupView from '@/views/CheckupView.vue';
import PlanView from '@/views/PlanView.vue';
import PlanDetailView from '@/views/PlanDetailView.vue';

import LayoutBase from '@/components/layout/LayoutBase.vue';
import LayoutMain from '@/components/layout/LayoutMain.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: LayoutMain,
    children: [
      {
        path: '/',
        name: 'MainView',
        component: MainView,
      },

    ],
  },
  {
    path: '/',
    component: LayoutBase,
    children: [
      {
        path: '/guide',
        name: "LoginView",
        component: GuideView,
      },
    ]
  },
  {
    path: '/',
    component: LayoutBase,
    children: [
      {
        path: '/checkup',
        name: "CheckupView",
        component: CheckupView,
      },
    ]
  },
  {
    path: '/',
    component: LayoutBase,
    children: [
      {
        path: '/plan',
        name: "PlanView",
        component: PlanView,
      },
    ]
  },
  {
    path: '/',
    component: LayoutBase,
    children: [
      {
        path: '/detail',
        name: "PlanDetailView",
        component: PlanDetailView,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
