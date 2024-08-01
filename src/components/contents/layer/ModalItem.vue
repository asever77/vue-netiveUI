<script setup>
import { useStore } from 'vuex';
import { defineProps, ref } from 'vue';

const store = useStore();
const props = defineProps({
  data: Object,
});

const isHidden = ref(true);
const isZindex = ref(null);
const isViews = ref(null);

const dataModal = ref(props.data.modal);
const dataBtn = ref(props.data.button);

isZindex.value = store.state.Layer.zindex;
isViews.value = store.state.Layer.view;

const descID = dataModal.value.id + '_desc';
const labelID = dataModal.value.id + '_label';
const thisFocus = ref(null);
const _body = document.querySelector('body');


//실행
const open = () => {
  const baseWrap = document.querySelector('.base-wrap');
  //이전 포커스 저장
  thisFocus.value = document.activeElement;

  //aria-hidden 값 > css animation
  isHidden.value = false;

  //페이지 좌우 이동 효과
  if (dataModal.value.type === 'full-page') {
    _body.dataset.pageSwiper = "on";
  }

  const layerItem = document.querySelector(`.layer-item[data-id="${dataModal.value.id}"]`);
  const layerWrap = layerItem.querySelector('.layer-item--wrap');
  const closeBtn = layerItem.querySelector('.layer-item--close');
  // const closeBtHide = layerItem.querySelector('.layer-item--close-hide');

  //외부영역 접근막기
  console.log('baseWrap', baseWrap);
  baseWrap.setAttribute('inert', 'true');
  baseWrap.setAttribute('aria-hidden', 'true');

  layerItem.dataset.active = 'true';
  // store.commit("setZindex", store.getters.zindexUp);

  //z-index 값 설정
  store.commit("setZindex", store.getters.zindexUp);
  isZindex.value = store.state.Layer.zindex;
  layerItem.style.zIndex = isZindex.value;

  //웹접근성 탭 포커스 가두기
  // const a11y_keyStart = (e) => {
  //   if (e.shiftKey && e.key === 'Tab') {
  //     e.preventDefault();
  //     closeBtHide.focus();
  //   }
  // }
  // const a11y_keyEnd = (e) => {
  //   if (!e.shiftKey && e.key === 'Tab') {
  //     e.preventDefault();
  //     closeBtn.focus();
  //   }
  // }
  // closeBtn.addEventListener('keydown', a11y_keyStart);
  // closeBtHide.addEventListener('keydown', a11y_keyEnd);

  //css animation 끝나는 시점
  const actMotionEnd = () => {
    closeBtn.focus();
    // const viewLayers = document.querySelectorAll('.layer-item[aria-hidden="false"]');
    // console.log(viewLayers.length);
    layerWrap.removeEventListener('animationend', actMotionEnd);
  }
  layerWrap.addEventListener('animationend', actMotionEnd);


}
const close = () => {
  const baseWrap = document.querySelector('.base-wrap');
  //aria-hidden 값 > css animation
  isHidden.value = true;

  //페이지 좌우 이동 효과
  if (dataModal.value.type === 'full-page') {
    _body.dataset.pageSwiper = "off";
  }

  //zindex
  store.commit("setZindex", store.getters.zindexDown);
  isZindex.value = store.state.Layer.zindex;
  thisFocus.value && thisFocus.value.focus();

  //현재 활성화 되어 있는 레이어 체크하여 하나일때 본문접근 가능설정
  const viewLayers = document.querySelectorAll('.layer-item[aria-hidden="false"]');
  if (viewLayers.length < 2) {
    baseWrap.removeAttribute('inert');
    baseWrap.setAttribute('aria-hidden', 'false');
  }
};
</script>

<template>
  <button type="button" :class="dataBtn.class" @click="open" v-if="dataBtn.name">{{ dataBtn.name }}</button>

  <Teleport to=".base-layer">
    <!-- 
      data-type: 'center' | 'bottom' | 'top' | 'full'
      data-id: '{unique ID}'
      aria-describedby: '{unique ID}_desc'
     -->
    <section class="layer-item" role="dialog" :data-type="dataModal.type" :data-id="dataModal.id"
      :aria-labelledby="labelID" :aria-describedby="descID" :aria-hidden="isHidden">
      <div class="layer-item--wrap" role="document" tabindex="-1">
        <button type="button" class="layer-item--close" aria-label="레이어콘텐츠 닫기" @click="close">닫기</button>

        <div class="layer-item--head" v-if="$slots.head">
          <slot name="head"></slot>
        </div>
        <div class="layer-item--body">
          <slot name="body"></slot>
        </div>
        <div class="layer-item--foot" v-if="$slots.head">
          <slot name="foot"></slot>
        </div>

        <button type="button" class="layer-item--close-hide" aria-label="레이어콘텐츠 닫기" @click="close">닫기</button>
      </div>
      <div class="layer-item--dim"></div>
    </section>
  </Teleport>
</template>

<style scoped lang="scss"></style>
