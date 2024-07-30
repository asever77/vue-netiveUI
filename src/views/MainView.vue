<script setup>
import { useStore } from 'vuex';
import StartModal from '@/views/modal/StartModal.vue';

const store = useStore();
store.state.page = 1;
console.log(store.state);
</script>

<template>
  <main class="base-main">
    <div class="base-content">
      <!-- 제목 컨포넌트로 변경필요할까 흐음... -->
      <div class="subject-group">
        <h2 class="subject-group--heading">건강검진 플랜 추천</h2>
        <strong class="subject-group--slogan">매번 어떤 검사를 받아야 할지 막막했다면?</strong>
        <em class="subject-group--addition">내 성별과 나이에 맞는 검진 항목을 확인해 보세요.</em>
      </div>

      <StartModal :button="{
        name: '시작하기',
        class: 'btn--box'
      }" />

    </div>
  </main>
</template>

<style lang="scss" scoped></style>