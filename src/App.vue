<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const transitionName = ref(null);

watch(() => route.meta.depth, (newValue, oldValue) => {
  if (newValue > oldValue) {
    transitionName.value = 'next';
  } else if (newValue < oldValue){
    transitionName.value = 'prev';
  } else {
    transitionName.value = null
  }
});

</script>

<template>
  <div class="desktop-body">
    <div class="subject-group" data-style="desktop" role="text">
      <img class="ci" src="@/assets/images/CI.svg" alt="KB헬스케어">
      <h2 class="subject-group--heading">
        나와 가족의 건강관리 <br>
        쉽고 간편하게 <br>
        <b>지금, KB건강검진</b>
      </h2>
    </div>

    <div class="wrap-app">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName">
          <component :is="Component" :key="route.path"  />
        </transition>
      </router-view>
      <div class="base-layer"></div>
      <div class="base-toast"></div>
      <div class="base-alert"></div>
    </div>
  </div>
</template>

<style lang="scss">


</style>
