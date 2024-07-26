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


//실행
const open = () => {
  thisFocus.value = document.activeElement;
  isHidden.value = false;

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

.layer-item {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 100;

  &[aria-hidden="true"] {
    animation-name: modalColse;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    .layer-item--dim {
      animation-name: hide_dimAni;
      animation-duration: .4s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }

    .layer-item--wrap {
      animation-name: hide_wrapAni;
      animation-duration: .2s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }

  &[aria-hidden="false"] {
    display: flex;

    .layer-item--dim {
      animation-name: show_dimAni;
      animation-delay: .1s;
      animation-duration: .3s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }

    .layer-item--wrap {
      animation-name: show_wrapAni;
      animation-delay: .2s;
      animation-duration: .4s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }
}

.layer-item--dim {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  z-index: 0;
  transition-delay: 1s;
  backdrop-filter: blur(.4rem);
  transition: all 2s ease;
}

.layer-item--wrap {
  background: #fff;
  position: relative;
  z-index: 1;
  padding: 2.4rem;
  opacity: 0;
  border-radius: .8rem;
  box-shadow: 0 0 .8rem rgba(0, 0, 0, 40%);
}

.layer-item--close-hide:focus {
  opacity: 1;
  bottom: 1rem;
}

.layer-item--close-hide {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: -10rem;
  opacity: 0;


}

@keyframes modalColse {
  0% {
    opacity: 1;
    display: flex;
  }

  97% {
    opacity: 0;
    display: flex;
  }

  100% {
    opacity: 0;
    display: none;
  }
}

@keyframes show_dimAni {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes hide_dimAni {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes show_wrapAni {
  0% {
    opacity: 0;
    scale: 0.8;
  }

  100% {
    opacity: 1;
    scale: 1;
  }
}

@keyframes hide_wrapAni {
  0% {
    opacity: 1;
    scale: 1;
  }

  100% {
    opacity: 0;
    scale: 0.5;
  }
}
</style>
