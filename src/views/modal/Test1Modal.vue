<script setup>
import { defineProps } from 'vue';
import ModalItem from '@/components/contents/layer/ModalItem';
import Test2Modal from '@/views/modal/Test2Modal.vue';

const props = defineProps({
  button: Object
});
console.log('button data', props.button)

const data_modal = {
  modal: {
    id: 'test1',
    type: 'center',
    class: ''
  },
  button: {
    name: props.button.name || false,
    class: props.button.class
  }
}
</script>

<template>
  <ModalItem :data="data_modal">
    <template #head>
      <h2 class="layer-item--tit">테스트1</h2>
    </template>

    <template #body>
      <div>aaaa</div>
      <Test2Modal :button="{
        name: '적용하기',
        class: 'base'
      }" />
    </template>

    <template #foot>
      <button type="button">
        <span>취소</span>
      </button>
      <button type="button">
        <span>확인</span>
      </button>
    </template>
  </ModalItem>
</template>
<style scoped></style>