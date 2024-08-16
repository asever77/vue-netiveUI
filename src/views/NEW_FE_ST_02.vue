<script setup>
import { useStore } from 'vuex';
import PlanTab from '@/views/tab/PlanTab.vue';

//header title
const store = useStore();
store.state.PageInfo.title = '추천 플랜';
store.commit("titleChange", store.state.PageInfo.title);

const age = '43'; 
const gender = '남성'; 

</script>

<template>
	<main class="base-main">
		<div class="base-content">
			<div class="subject-group" data-style="">
				<h2 class="subject-group--heading">
					<em data-marker="yellow">{{ age }}세 {{ gender }}</em>을 위한 <br>
					건강검진 플랜
				</h2>
				<em class="subject-group--addition">
					플랜별 추천 기준과 세부 검사 항목을 확인해 보세요.
				</em>
			</div>

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
		position: fixed;
		z-index: 0;
		bottom: 0;
		left:0;
		width:100%;
		height: 40dvh;
		background: #FFCF30;
	}
}
.txt-q {
	font-size: 2.2rem;
	color: #FFCF30;
	font-weight: 700;
	line-height: 2.7rem;
	margin-right:.8rem;
}
</style>