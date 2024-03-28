import LayoutMain from "@/components/layout/LayoutMain.vue";

export default {
  path: "/result",
  component: LayoutMain,
	meta: {
    title: "검진결과", 
  },
  children: [
    {
      path: "/result",
      name: "Result",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			// webpackChunkName: "about" - "webpackChunkName" 별도의 js로 분리되는 방식
			// webpackPrefetch: true - "webpackPrefetch" 미리 캐시에 담아두는 방식
			component: () => import(/* webpackChunkName: "result" */ '@/views/ResultView.vue')
    },
  ],
};

