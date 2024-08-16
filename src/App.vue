<template>
  <router-view v-slot="{ Component }">
    <Transition :name="transitionName">
      <component :is="Component" />
    </Transition>
  </router-view>
  
  <div class="base-layer"></div>
  <div class="base-toast"></div>
  <div class="base-alert"></div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let transitionName = ref('slide-left')

watch(route, (to, from) => {
  
  const toDepth = to.path.split('/').length;
  const fromDepth = from.path.split('/').length;
  transitionName.value = toDepth < fromDepth ? 'slide-r' : 'slide-l';
  console.log('watch!!!', transitionName.value, toDepth, fromDepth);
  transitionName.value = null
})
</script>
<style scoped>
.slide-l-enter-active, 
.slide-l-leave-active,
.slide-r-enter-active, 
.slide-r-leave-active {
  transition: transform .3s;
  position: absolute;
}

.slide-l-enter, 
.slide-r-leave-active {
  transform: translateX(100%);
}

.slide-r-enter, 
.slide-l-leave-active {
  transform: translateX(-100%);
}

.slide-l-leave-active, 
.slide-r-enter {
  transform: translateX(0);
}

</style>
