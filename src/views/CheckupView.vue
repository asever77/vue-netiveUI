<script setup>
import { useStore } from 'vuex';

//header title
const store = useStore();
store.state.PageInfo.title = '건강 체크';
store.commit("titleChange", store.state.PageInfo.title);

</script>

<template>
	<main class="base-main">
		<div class="base-content">
			<div class="subject-group">
				<h2 class="subject-group--heading">
					현재 건강 상태에 해당하는 <br>
					항목을 선택해 주세요.
				</h2>
				<em class="subject-group--addition">
					건강 체크 항목을 확인하고 해당되는 사항을 <br>
					선택해 주세요.
				</em>
			</div>

			<div class="form-grid">
				<!-- 암 진단 -->
				<div class="form-grid--item">
					<div class="form-grid--head" id="checkup_state_a">
						<b class="txt-q">
							<span aria-hidden="true">Q</span>
							<span class="a11y-hidden">질문</span>
						</b>암 진단을 받았거나 관련 치료 중이신가요?
					</div>
					<ul class="form-grid--body" role="group" aria-labelledby="checkup_state_a" data-col="2">
						<li class="form-item">
							<input type="radio" id="checkup_state_a_1" name="checkup_state_a">
							<label for="checkup_state_a_1" class="form-item--radio">예</label>
						</li>
						<li class="form-item">
							<input type="radio" id="checkup_state_a_2" name="checkup_state_a">
							<label for="checkup_state_a_2" class="form-item--radio">아니오</label>
						</li>
					</ul>
				</div>

				<!-- 간 질환 -->
				<div class="form-grid--item">
					<div class="form-grid--head" id="checkup_state_b">
						<b class="txt-q">
							<span aria-hidden="true">Q</span>
							<span class="a11y-hidden">질문</span>
						</b>과거에 앓았거나, 현재 가장 걱정되는 간 질환을 선택해 주세요.
					</div>
					<ul class="form-grid--body" role="group" aria-labelledby="checkup_state_b" data-col="2">
						<li class="form-item">
							<input type="radio" id="checkup_state_b_1" name="checkup_state_b">
							<label for="checkup_state_b_1" class="form-item--radio">간경변증</label>
						</li>
						<li class="form-item">
							<input type="radio" id="checkup_state_b_2" name="checkup_state_b">
							<label for="checkup_state_b_2" class="form-item--radio">B형/C형 간염</label>
						</li>
						<li class="form-item">
							<input type="radio" id="checkup_state_b_3" name="checkup_state_b">
							<label for="checkup_state_b_3" class="form-item--radio">만성간질환</label>
						</li>
						<li class="form-item">
							<input type="radio" id="checkup_state_b_4" name="checkup_state_b">
							<label for="checkup_state_b_4" class="form-item--radio">해당없음</label>
						</li>
					</ul>
				</div>

				<!-- 흡연 -->
				<div class="form-grid--item">
					<div class="form-grid--head" id="checkup_state_c">
						<b class="txt-q">
							<span aria-hidden="true">Q</span>
							<span class="a11y-hidden">질문</span>
						</b>평소에 담배를 피우시나요?
					</div>
					<ul class="form-grid--body" role="group" aria-labelledby="checkup_state_c" data-col="2">
						<li class="form-item">
							<input type="radio" id="checkup_state_c_1" name="checkup_state_c">
							<label for="checkup_state_c_1" class="form-item--radio">예</label>
						</li>
						<li class="form-item">
							<input type="radio" id="checkup_state_c_2" name="checkup_state_c">
							<label for="checkup_state_c_2" class="form-item--radio">아니요</label>
						</li>
					</ul>
				</div>
			</div>
			
			<div class="btn--wrap">
				<button type="button" class="btn--box" @click="alertShow" disabled>
					<span>추천 플랜 확인하기</span>
				</button>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.base-content {
	padding:2rem 2.4rem 3.6rem ;
}
.form-grid{
	margin-top: 3.2rem;
	margin-bottom: 2.4rem;
}
.txt-q {
	font-size: 2.2rem;
	color: #FFCF30;
	font-weight: 700;
	line-height: 2.7rem;
	margin-right:.8rem;
}
</style>