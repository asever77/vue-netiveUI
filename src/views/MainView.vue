<script setup>
import { useStore } from 'vuex';
import Test1Modal from '@/views/modal/Test1Modal.vue';

const store = useStore();
store.state.page = 1;
console.log(store.state);
</script>

<template>
  <main class="base-main">
    <div class="base-content">
      <h1>테스트</h1>

      <Test1Modal :button="{
        name: '신청하기',
        class: 'base'
      }" />

    </div>
  </main>
</template>

<style lang="scss" scoped></style>