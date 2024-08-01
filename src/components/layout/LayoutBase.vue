<script setup>
import HeaderBase from '@/components/common/HeaderBase.vue';
import FooterBase from '@/components/common/FooterBase.vue';
</script>

<template>
  <div class="base-wrap">
    <HeaderBase />
    <router-view />
    <FooterBase />
  </div>
</template>

<style scoped lang="scss">
.base-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  padding: 2.4rem;
  min-height: 100dvh;
}
</style>
