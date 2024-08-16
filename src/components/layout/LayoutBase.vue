<script setup>
import HeaderBase from '@/components/common/HeaderBase.vue';
</script>

<template>
  <div class="base-wrap">
    <HeaderBase />
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.base-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  min-height: 100dvh;
}
</style>