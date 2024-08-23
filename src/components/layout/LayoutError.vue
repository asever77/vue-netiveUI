<script setup>
</script>

<template>
  <div class="base-wrap">
    <header class="base-header">
      <div class="base-header--title">
        <img src="@/assets/images/CI.svg" alt="" class="ci">
      </div>
    </header>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.base-main{
  min-height: calc(100dvh - 5.6rem);
}
.base-header {
  position: relative;
  display: flex;
  justify-content: center;
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
