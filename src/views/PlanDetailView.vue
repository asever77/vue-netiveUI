<script setup>
import {  ref, watch } from 'vue';
import { useStore } from 'vuex';
import ListItem from '@/components/contents/ListItem';
// import CheckupInfoModal from '@/views/modal/CheckupInfoModal.vue';

//header title
const store = useStore();
store.state.PageInfo.title = '추천 플랜 상세';
store.commit("titleChange", store.state.PageInfo.title);

const checkupID = ref(null);

const dataList = {
    style: 'checkup',
    event: 'link', //'none', 'link', 'link-modal'
    list: [
			{ id: 'a_1', name: '총콜레스테롤' },
			{ id: 'a_2', name: '고밀도콜레스테롤(HDL)' },
			{ id: 'a_3', name: '저밀도콜레스테롤(LDL)' },
			{ id: 'a_4', name: '중성지방' }
		]
}
const dataList2 = {
    style: 'checkup',
    event: 'link', //'none', 'link', 'link-modal'
    list: [
			{ id: 'b_1', name: 'B형간염' },
			{ id: 'b_2', name: '치면세균막' },
			{ id: 'b_3', name: '골다공증' },
			{ id: 'b_4', name: '우울증' },
			{ id: 'b_5', name: '생활습관' },
			{ id: 'b_6', name: '노인신체기능' },
			{ id: 'b_7', name: '인지기능장애' },
		]
}
const callAct = (v) => {
	checkupID.value = v.call;
}

watch(() => checkupID.value, (newValue) => {
    // 속성 값이 변경될 때 실행되는 로직
    // console.log('watch', newValue, oldValue);
    // actContent();
    checkupID.value = newValue;
    console.log('watch',checkupID.value);
});


</script>

<template>
	<main class="base-main">
		<div class="base-content">
			<div class="subject-group">
				<h2 class="subject-group--heading">
					43세 남성을 위한 <br>
					건강검진 플랜
				</h2>
				<em class="subject-group--addition">
					플랜별 추천 기준과 세부 검사 항목을 확인해 보세요.
				</em>
			</div>

			<div class="checkup-detail-list mt-x4">
				<h3 data-icon="a1">지질대사 및 심혈관계 검사</h3>
				<ListItem :data="dataList" @call-act="callAct" />
				<hr>

				<h3 data-icon="a2">성, 연령별 추가 검사</h3>
				<ListItem :data="dataList2" @call-act="callAct" />
				<hr>
			</div>
		</div>

		<!-- <CheckupInfoModal :keyid="checkupID" /> -->
	</main>
</template>

<style lang="scss" scoped>
.base-content {
	padding:2rem 2.4rem 3.6rem ;
}

</style>