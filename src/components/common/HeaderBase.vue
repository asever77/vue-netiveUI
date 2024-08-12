<script setup>
import { useStore } from 'vuex';

const store = useStore();
console.log(store)
</script>

<template>
  <header class="base-header">
    <button type="button" class="btn--back" aria-label="이전 페이지 가기"></button>
    <div class="base-header--title">{{ store.state.PageInfo.title }}</div>
    <button type="button" class="btn--close" aria-label="페이지 닫기"></button>
  </header>
</template>

<style scoped lang="scss">
  .base-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 5.6rem;
    width:100%;
    padding: 0 2.4rem;

    &--title {
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.6rem;
    }
  }
</style>