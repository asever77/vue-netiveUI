import { createRouter, createWebHistory } from 'vue-router';

import GuideView from '@/views/GuideView.vue';
import NEW_FE_HO_00 from '@/views/NEW_FE_HO_00.vue';

import NEW_FE_ST_01 from '@/views/NEW_FE_ST_01.vue';
import NEW_FE_ST_02 from '@/views/NEW_FE_ST_02.vue';
import NEW_FE_ST_03 from '@/views/NEW_FE_ST_03.vue';

import LayoutBase from '@/components/layout/LayoutBase.vue';
import LayoutMain from '@/components/layout/LayoutMain.vue';
import LayoutError from '@/components/layout/LayoutError.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: LayoutMain,
    children: [
      {
        path: '/',
        name: 'NEW_FE_HO_00',
        component: NEW_FE_HO_00,
      },
    ],
    meta: {
      depth:1,
    }
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
    ],
    meta: {
      depth:1,
    }
  },
  {
    path: '/',
    component: LayoutBase,
    children: [
      {
        path: '/plan1',
        name: "NEW_FE_ST_01",
        component: NEW_FE_ST_01,
      },
    ],
    meta: {
      depth:2,
    }
  },
  {
    path: '/',
    component: LayoutBase,
    children: [
      {
        path: '/plan2',
        name: "NEW_FE_ST_02",
        component: NEW_FE_ST_02,
      },
    ],
    meta: {
      depth:3,
    }
  },
  {
    path: '/',
    component: LayoutBase,
    children: [
      {
        path: '/plan3',
        name: "NEW_FE_ST_03",
        component: NEW_FE_ST_03,
      },
    ],
    meta: {
      depth:4,
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/404",
    component: LayoutError,
    children: [
      {
        path: '/404',
        name: "NEW_FE_404",
        component:() => import("@/views/NEW_FE_404.vue"),
      },
    ],
    meta: {
      depth:1,
    }
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
