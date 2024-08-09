<script setup>
import { useStore } from 'vuex';
import { inject, ref, watch } from 'vue';


import SwiperHero from '@/views/swiper/SwiperHero.vue';

const store = useStore();
store.state.page = 1;

//toast modal
const toastModal = inject('toastModal');
const isToastTest = ref(false);
const toastShow = () => {
  toastModal.show({
    content: '테스트 입니다.'
  });
}

//system modal
const systemModal = inject('systemModal');
const isAlertTest = ref(false);
const alertShow = () => {
  systemModal.show({
    id: 'alert_test1',
    title: '검진 플랜 선택을 그만하시겠습니까?',
    content: '선택값이 초기화되고 홈으로 이동합니다. ',
    control: [
      {
        name: '계속하기',
        callback: () => {
          console.log('계속하기')
        }
      },
      {
        name: '홈으로',
        callback: () => {
          console.log('홈으로')
        }
      }
    ]
  });
}

const callAct = (v) => {
  console.log(v);
  // info_data.value = JsonData[_id.value.call];
  // actContent();
}

console.log(toastShow, alertShow)

watch([isToastTest, isAlertTest], () => {
  console.log('watch')
});
</script>

<template>
  <main class="base-main">
    <div class="base-content" >
      <SwiperHero @call-act="callAct" />



 

    </div>
  </main>
</template>

<style lang="scss" scoped>
</style>