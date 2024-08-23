<script setup>
import { useStore } from 'vuex';
import PlanTab from '@/views/tab/PlanTab.vue';

//header title
const store = useStore();
store.state.PageInfo.title = '추천 플랜';
store.commit("titleChange", store.state.PageInfo.title);

const age = store.state.PageInfo.my.age || '--'; 
const gender = store.state.PageInfo.my.gender || '--'; 

console.log('my 정보', store.state.PageInfo.my)
</script>

<template>
	<main class="base-main">
		<div class="base-content">

			<div class="subject-group" role="text">
				<h2 class="subject-group--heading">
					<em data-marker="yellow">{{ age }}세 {{ gender }}</em>을 위한 <br>
					건강검진 플랜
				</h2>
				<em class="subject-group--addition">
					플랜별 추천 기준과 세부 검사 항목을 확인해 보세요.
				</em>
			</div>

			<!-- plan tab  -->
			<div class="mt-x4 mb-x3">
				<PlanTab />
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
	.base-content {
		padding:2rem 2.4rem 3.6rem ;

		&::before {
			content: "";
			display: block;
			position: absolute;
			z-index: 0;
			bottom: 0;
			left:0;
			width:100%;
			height: 40dvh;
			background: #FFCF30;
		}
	}
</style>