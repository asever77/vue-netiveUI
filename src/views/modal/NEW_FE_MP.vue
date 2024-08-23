<script setup>
import { inject } from 'vue';
import ModalItem from '@/components/contents/ModalItem';
import VueCookies from 'vue-cookies';

const UI = inject('UI');

const data_NEW_FE_MP = {
  modal: {
    id: 'NEW_FE_MP',
    type: 'bottom-sheet',
    class: 'event-Chuseok',
    aria: {
      labelledby: 'NEW_FE_MP_label',
      describedby: 'NEW_FE_MP_desc'
    }
  } 
};

const closeNotToday = () => {
  const today = new Date().toDateString();
  VueCookies.set('event.chuseok', today, '1d'); 
  UI.layerModal.close('NEW_FE_MP');
}
</script>

<template>
  <ModalItem :data="data_NEW_FE_MP">
    <template #body>
      <strong class="a11y-hidden">9월 풍요로운 한가위 되세요!</strong>
    </template>

    <template #foot>
      <div class="btn--wrap">
        <button type="button" class="btn--box" @click="closeNotToday">
          <span>오늘 하루 안보기</span>
        </button>
      </div>
    </template>
  </ModalItem>
</template>

<style lang="scss">
.event-Chuseok .layer-item--wrap{
  background: #E8955A url('@/assets/images/ppoup-m09.jpg') no-repeat 0 0 / 100%;
  .layer-item--body {
    height: 30rem;
  }
}
</style>
