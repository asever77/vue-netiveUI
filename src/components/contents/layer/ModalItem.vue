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
const appContent = document.querySelector('#app');
const _body = document.querySelector('body');

//실행
const open = () => {
  thisFocus.value = document.activeElement;
  isHidden.value = false;


  if (dataModal.value.type === 'full-page') {
    _body.dataset.pageSwiper = "on";
  }

  const layerItem = document.querySelector(`.layer-item[data-id="${dataModal.value.id}"]`);
  const layerWrap = layerItem.querySelector('.layer-item--wrap');
  const closeBtn = layerItem.querySelector('.layer-item--close');
  const closeBtHide = layerItem.querySelector('.layer-item--close-hide');
  // const closeBtnHide = layerItem.querySelector('.layer-item--close-hide');

  appContent.setAttribute('aria-hidden', 'true');
  layerItem.dataset.active = 'true';
  // store.commit("setZindex", store.getters.zindexUp);

  //zindex
  store.commit("setZindex", store.getters.zindexUp);
  isZindex.value = store.state.Layer.zindex;
  layerItem.style.zIndex = isZindex.value;

  //실행
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

  //focus
  closeBtn.addEventListener('keydown', a11y_keyStart);
  closeBtHide.addEventListener('keydown', a11y_keyEnd);
  const actAniend = () => {
    closeBtn.focus();
    // const viewLayers = document.querySelectorAll('.layer-item[aria-hidden="false"]');
    // console.log(viewLayers.length);
    layerWrap.removeEventListener('animationend', actAniend);
  }
  layerWrap.addEventListener('animationend', actAniend);


}
const close = () => {
  isHidden.value = true;

  if (dataModal.value.type === 'full-page') {
    _body.dataset.pageSwiper = "off";
  }

  //zindex

  store.commit("setZindex", store.getters.zindexDown);
  isZindex.value = store.state.Layer.zindex;
  thisFocus.value && thisFocus.value.focus();

  const viewLayers = document.querySelectorAll('.layer-item[aria-hidden="false"]');
  if (viewLayers.length < 2) {
    appContent.setAttribute('aria-hidden', 'false');
  }
};
</script>

<template>
  <button type="button" :class="dataBtn.class" @click="open" v-if="dataBtn.name">{{ dataBtn.name }}</button>

  <Teleport to="body">
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

<style scoped lang="scss">
button.base {
  background: #fff;
  padding: .8rem 1.2rem;
  border-radius: .4rem;
  border: 1px solid var(--c_sub);
  color: var(--c_sub);
  cursor: pointer;
}
</style>
