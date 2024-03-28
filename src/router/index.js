import { createRouter, createWebHistory } from 'vue-router';

import BridgeView from '@/views/BridgeView.vue';
import LayoutBridge from '@/components/layout/LayoutBridge.vue';
import Result from '@/router/result.js';

const routes = [
  {
    path: '/',
    component: LayoutBridge,
    meta: {
      title: "Main", 
    },
    children: [
      {
        path: '/',
        name: "BridgeView",
        component: BridgeView,
      }
    ]
  },
  Result,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
