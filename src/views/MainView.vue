<script setup>
import { useStore } from 'vuex';
import { inject, ref, watch } from 'vue';
import StartModal from '@/views/modal/StartModal.vue';
import TestTab1 from '@/views/tab/TabTest1.vue';

const toastModal = inject('toastModal');
const systemModal = inject('systemModal');
const store = useStore();
store.state.page = 1;

const isToastTest = ref(false);
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
const toastShow = () => {
  toastModal.show({
    content: '테스트 입니다.'
  });
}

watch([isToastTest, isAlertTest], () => {
  console.log('watch')

});

</script>

<template>
  <main class="base-main">
    <div class="base-content">
      <!-- 제목 컨포넌트로 변경필요할까 흐음... -->
      <guide>제목 가이드</guide>
      <div class="subject-group">
        <h2 class="subject-group--heading" @click="toastShow">건강검진 플랜 추천</h2>
        <strong class="subject-group--slogan" @click="alertShow">매번 어떤 검사를 받아야 할지 막막했다면?</strong>
        <em class="subject-group--addition">내 성별과 나이에 맞는 검진 항목을 확인해 보세요.</em>
      </div>

      <guide>button + modal</guide>
      <StartModal :button="{
        name: '시작하기',
        class: 'btn--box'
      }" />

      <guide>tab</guide>
      <TestTab1 />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>