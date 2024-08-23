<script setup>
	import { inject, ref, defineEmits } from 'vue';
	import VueCookies from 'vue-cookies';

	import StartModal from '@/views/modal/NEW_FE_HO_00_01.vue';
	import NEW_FE_MP from '@/views/modal/NEW_FE_MP.vue';

	const UI = inject('UI');

	// Autoplay 및 EffectFade는 사용할 때만 추가
	import { Navigation, Pagination, A11y } from 'swiper/modules';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/navigation';
	import 'swiper/css/effect-fade'; // fade 효과 사용할 때 import
	import 'swiper/css/a11y';
	/**
	 * modules: 사용할 module
	 * slidePerView: 한 화면에 보여주는 슬라이드 개수
	 * spaceBetween: 슬라이드 간 여백
	 * loop: 슬라이드 loop 여부(default: false)
	 * autoplay: 슬라이드 자동 시작 여부(default: false)
	 * effect: 슬라이딩의 효과 부여(default: slide)
	 * navigation: 좌/우 이동 화살표 표시
	 * pagination: 페이징 표시
	 */
	
	const swiperPage = ref(0);
	const swiperOptions = ref({
		modules: [Navigation, Pagination, A11y],
		slidesPerView: 1,
		spaceBetween: 0,
		loop: false,
		autoplay: false,
		effect: 'slide',
		navigation: true,
		pagination: {
			clickable: true
		},
		a11y: {
			containerMessage: '건강검진 플랜 슬라이드 입니다.',
			prevSlideMessage: '이전 슬라이드',
			nextSlideMessage: '다음 슬라이드',
			slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드입니다.',
			paginationBulletMessage: '{{index}}번 슬라이드로 가기'
		},
	});
	// Swiper event
	const emit = defineEmits(['call-act']);
	const onSwiper = (Swiper) => {
		emit('call-act', {
			call: Swiper.activeIndex
		});
	};
	const onSlideChange = (Swiper) => {
		swiperPage.value = Swiper.activeIndex;
		emit('call-act', {
			call: Swiper.activeIndex
		});
	};

	//Toast modal 
	const toastShow = () => {
		UI.toastModal.show({
			content: '테스트 입니다.'
		});
	}
	toastShow();

	//Layer modal 
	const NEW_FE_MP_show = () => {
		setTimeout(() => {
			UI.layerModal.open({
				modal: {
					id: 'NEW_FE_MP',
					type: 'bottom-sheet',
				} 
			});
		},0);
	}
	if (!VueCookies.get('event.chuseok')) {
		NEW_FE_MP_show();
	}
	
	
</script>

<template>
  <main class="base-main">
    <div class="base-content" >

			<!-- hero swiper slogan -->
      <div class="hero" :data-hero="swiperPage">
        <swiper v-bind="swiperOptions" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide>
            <div class="subject-group" role="text">
              <img class="ci" src="@/assets/images/CI.svg" alt="KB헬스케어">
              <h2 class="subject-group--heading">
                건강검진이 처음이거나 <br>
                오랜만이라면?
              </h2>
              <em class="subject-group--addition">
                내 성별과 나이에 맞는 검진 항목을 확인해 보세요.
              </em>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="subject-group" role="text">
              <img class="ci" src="@/assets/images/CI.svg" alt="KB헬스케어">
              <h2 class="subject-group--heading">
                비슷한 나이대가 선택한 <br>
                검사 항목이 궁금할 때 
              </h2>
              <em class="subject-group--addition">
                내 성별과 나이에 맞는 검진 항목을 확인해 보세요.
              </em>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="subject-group" role="text">
              <img class="ci" src="@/assets/images/CI.svg" alt="KB헬스케어">
              <h2 class="subject-group--heading">
                특정 질병을 더 꼼꼼하게 <br>
                예방하고 싶을 때
              </h2>
              <em class="subject-group--addition">
                내 성별과 나이에 맞는 검진 항목을 확인해 보세요.
              </em>
            </div>
          </swiper-slide>
        </swiper>

				<!-- 건강검진 플랜 추천 시작하기 -->
        <div class="hero-start">
          <StartModal :button="{
          name: '건강검진 플랜 추천 시작하기',
          class: 'btn--box'
          }" />
        </div>
      </div>
			<!-- //hero swiper slogan -->

    </div>

		<!-- 이벤트 바텀시트 팝업 -->
		<NEW_FE_MP />
  </main>
</template>

<style lang="scss" scoped>
</style>