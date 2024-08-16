<script setup>
import { useStore } from 'vuex';
import { defineProps, ref, defineEmits, defineExpose } from 'vue';


const store = useStore();
const props = defineProps({
  data: Object,
});

const emit = defineEmits(['call-act']);
console.log(emit);
const isHidden = ref(true);
const isZindex = ref(null);
const isViews = ref(null);
const isLayer = ref(null);

const dataModal = ref(props.data.modal);
const dataBtn = ref(props.data.button);
const modalClass =  dataModal.value.class ? 'layer-item ' + dataModal.value.class: 'layer-item';

isZindex.value = store.state.Layer.zindex;
isViews.value = store.state.Layer.view;

const descID = dataModal.value.id + '_desc';
const labelID = dataModal.value.id + '_label';
const thisFocus = ref(null);
const _body = document.querySelector('body');

isLayer.value = !document.querySelector(`.layer-item[data-id="${dataModal.value.id}`);

//실행
const open = () => {
  //동적으로 정보 가져오기
  // console.log('dataBtn', dataBtn);
  // if (dataBtn.value.para) {
  //   emit('call-act', {
  //     call: dataBtn.value.para
  //   });
  // }

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
  const closeBtHide = layerItem.querySelector('.layer-item--close-hide');

  //외부영역 접근막기
  // console.log('baseWrap', baseWrap, layerItem);
  baseWrap.setAttribute('inert', 'true');
  baseWrap.setAttribute('aria-hidden', 'true');

  layerItem.dataset.active = 'true';
  layerItem.setAttribute('aria-hidden', 'false');
  // store.commit("setZindex", store.getters.zindexUp);

  //z-index 값 설정
  store.commit("setZindex", store.getters.zindexUp);
  isZindex.value = store.state.Layer.zindex;
  layerItem.style.zIndex = isZindex.value;

  //웹접근성 탭 포커스 가두기
  const a11y_keyStart = (e) => {
    if (e.shiftKey && e.key === 'Tab') {
      e.preventDefault();
      closeBtHide.focus();
    }
  }
  const a11y_keyEnd = (e) => {
    if (!e.shiftKey && e.key === 'Tab') {
      e.preventDefault();
      closeBtn.focus();
    }
  }
  closeBtn.addEventListener('keydown', a11y_keyStart);
  closeBtHide.addEventListener('keydown', a11y_keyEnd);

  //css animation 끝나는 시점
  const actMotionEnd = () => {
    closeBtn.focus();
    // const viewLayers = document.querySelectorAll('.layer-item[aria-hidden="false"]');
    // console.log(viewLayers.length);
    layerWrap.removeEventListener('animationend', actMotionEnd);
  }
  layerWrap.addEventListener('animationend', actMotionEnd);
}

const close = e => {
  const _this = e.currentTarget;
  const layerItem = document.querySelector(`.layer-item[data-id="${_this.dataset.id}"]`);
  const baseWrap = document.querySelector('.base-wrap');
  //aria-hidden 값 > css animation
  isHidden.value = true;
  layerItem.dataset.active = 'false';
  layerItem.setAttribute('aria-hidden', 'true');
  layerItem.removeAttribute('style');
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
// data-type: 'center' | 'bottom' | 'top' | 'full'
// data-id: '{unique ID}'
// aria-describedby: '{unique ID}_desc'

defineExpose({open});

</script>

<template>
  <template v-if="dataBtn">
    <button type="button" :class="dataBtn.class" @click="open" v-if="dataBtn.name" v-html="dataBtn.name"></button>
  </template>

  <Teleport to=".base-layer">
    <template v-if="isLayer">
      <section :class="modalClass" role="dialog" :data-type="dataModal.type" :data-id="dataModal.id"
        :aria-labelledby="labelID" :aria-describedby="descID" :aria-hidden="isHidden">
        <div class="layer-item--wrap" role="document" tabindex="-1" :data-foot="$slots.foot ? true : false">
          <button type="button" class="layer-item--close" aria-label="레이어콘텐츠 닫기" @click="close" :data-id="dataModal.id"></button>

          <div class="layer-item--head" v-if="$slots.head">
            <slot name="head"></slot>
          </div>
          <div class="layer-item--body">
            <slot name="body"></slot>
          </div>
          <div class="layer-item--foot" v-if="$slots.foot">
            <slot name="foot"></slot>
          </div>

          <button type="button" class="layer-item--close-hide" aria-label="레이어콘텐츠 닫기" @click="close"
            :data-id="dataModal.id">닫기</button>
        </div>
        <div class="layer-item--dim"></div>
      </section>
    </template>
  </Teleport>
</template>

<style scoped lang="scss"></style>
