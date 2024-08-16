<script setup>
import { inject, ref, defineEmits } from 'vue';

import StartModal from '@/views/modal/NEW_FE_HO_00_01.vue';

import { Navigation, Pagination, Autoplay, EffectFade, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
	// Autoplay 및 EffectFade는 사용할 때만 추가
	modules: [Navigation, Pagination, Autoplay, EffectFade, A11y],
	slidesPerView: 1,
	spaceBetween: 0,
	loop: false,
	autoplay: false,
	effect: 'slide',
	navigation: true,
	pagination: {
		clickable: true
	},
	/** 웹접근성(한글화)
	 * containerMessage: 슬라이드에 대한 설명
	 * prevSlideMessage: 이전 화살표에 대한 설명
	 * nextSlideMessage: 다음 화살표에 대한 설명
	 * slideLabelMessage: 현재 몇 번 슬라이드인지 설명
	 * paginationBulletMessage: 페이징에 대한 설명
	 * a11y: 웹접근성
	 * breakpoints: 해상도에 따라 다른 설정
	 */
	a11y: {
		containerMessage: '기본 슬라이드 샘플입니다.',
		prevSlideMessage: '이전 슬라이드',
		nextSlideMessage: '다음 슬라이드',
		slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드입니다.',
		paginationBulletMessage: '{{index}}번 슬라이드로 가기'
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 5
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 1,
			spaceBetween: 20
		}
	}
});

// event
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
const toastModal = inject('toastModal');
const toastShow = () => {
  toastModal.show({
    content: '테스트 입니다.'
  });
}
toastShow();
</script>

<template>
  <main class="base-main">
    <div class="base-content" >
      <div class="hero" :data-hero="swiperPage">
        <swiper v-bind="swiperOptions" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide>
            <div class="subject-group">
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
            <div class="subject-group">
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
            <div class="subject-group">
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
        <div class="hero-start">
          <StartModal :button="{
          name: '건강검진 플랜 추천 시작하기',
          class: 'btn--box'
          }" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.hero {
	position: relative;
	&::before {
		content:"";
		display: block;
		position:absolute;
		top:0; 
		left: -1px;
		width: calc(100% + 2px);
		height:100%;
		transition: all 500ms cubic-bezier(0,0,0.5,1);
		opacity: .8;
	}
	
	&[data-hero="0"]::before {
		background: url(@/assets/images/main/hero-1.jpg) no-repeat 50% 50% / cover;
	}
	&[data-hero="1"]::before {
		background: url(@/assets/images/main/hero-2.jpg) no-repeat 50%  50% / cover;
	}
	&[data-hero="2"]::before {
		background: url(@/assets/images/main/hero-3.jpg) no-repeat 50% 50% / cover;
	}

	.hero-start {
		position: absolute;
		bottom:0;
		width:100%;
		max-width: 40rem;
		left: 50%;
		transform: translateX(-50%);
		padding: 0 2.4rem 6.8rem;
		z-index: 2;
	}
}
</style>