import { createRouter, createWebHistory } from 'vue-router';

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
        alias: ['/home', '/main'], 
        name: 'NEW_FE_HO_00',
        component: NEW_FE_HO_00,
        meta: {
          depth: 1
        }
      },
    ],
  },
  {
    path: '/plan',
    component: LayoutBase,
    children: [
      {
        path: 'plan1',
        name: "NEW_FE_ST_01",
        component: NEW_FE_ST_01,
        meta: {
          depth: 2
        }
      },
      {
        path: 'plan2',
        name: "NEW_FE_ST_02",
        component: NEW_FE_ST_02,
        meta: {
          depth: 3
        }
      },
    ],
  },
  {
    path: '/plan/:planID',
    component: LayoutBase,
    children: [
      {
        path: '',
        name: "NEW_FE_ST_03",
        component: NEW_FE_ST_03,
        meta: {
          depth: 4
        }
      },
    ],
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
        meta: {
          depth: 1
        }
      },
      {
        path: '/system',
        name: "NEW_FE_system",
        component:() => import("@/views/NEW_FE_system.vue"),
        meta: {
          depth: 1
        }
      },
    ],
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    const _body = document.querySelector('body');
    _body.dataset.layer = false;
    _body.dataset.pageSwiper = 'off';
    return { top: 0 };
  }
});

export default router;
