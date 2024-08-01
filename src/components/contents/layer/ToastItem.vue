<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    data: Object,
});

const toast_data = ref(props.data);
console.log(toast_data)


</script>

<template>
    <Teleport to="body">
        <!-- 
      data-type: 'center' | 'bottom' | 'top' | 'full'
      data-id: '{unique ID}'
      aria-describedby: '{unique ID}_desc'
     -->

    </Teleport>
</template>

<style scoped lang="scss"></style>
