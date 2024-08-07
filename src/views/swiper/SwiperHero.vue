<script setup>
import { ref } from 'vue';

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
console.log(Swiper, SwiperSlide);

const swiperOptions = ref({
	// Autoplay 및 EffectFade는 사용할 때만 추가
	modules: [Navigation, Pagination, Autoplay, EffectFade, A11y],
	slidesPerView: 1,
	spaceBetween: 20,
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
// swiper의 event 확인 가능
const onSwiper = (Swiper) => {
	console.log(Swiper);
};

// swiper의 slide 감지
const onSlideChange = () => {
	console.log('slide change');
};

</script>

<template>
	<div>
		<swiper v-bind="swiperOptions" @swiper="onSwiper" @slideChange="onSlideChange">
			<swiper-slide>
				<div class="a">Slide 1</div>
			</swiper-slide>
			<swiper-slide>
				<div class="a">Slide 2</div>
			</swiper-slide>
			<swiper-slide>
				<div class="a">Slide 3</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<style scoped>
.a {
	height: 30rem;
}
</style>