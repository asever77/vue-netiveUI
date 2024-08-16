<script setup>
import FooterBase from '@/components/common/FooterBase.vue';
</script>

<template>
  <div class="base-wrap">
    <router-view />
    <FooterBase />
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
  overflow-x:hidden;
}
</style>
