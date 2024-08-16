<template>
  <Transition name="fade" mode="out-in" appear>
    <router-view />
  </Transition>
  
  
  <div class="base-layer"></div>
  <div class="base-toast"></div>
  <div class="base-alert"></div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();
let transitionName = ref('slide-l')

watch(route, (to, from) => {
  console.log('watch!!!', to, from);
  const toDepth = to.path.split('/').length;
  const fromDepth = from.path.split('/').length;
  transitionName.value = toDepth < fromDepth ? 'slide-r' : 'slide-l';
})
</script>
<style scoped>


</style>
