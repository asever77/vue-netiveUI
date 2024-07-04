<script setup>
import { defineProps } from 'vue';
import ModalItem from '@/components/contents/layer/ModalItem';

const props = defineProps({
  button: Object
});
console.log('button data', props.button)

const data = {
  modal: {
    id: 'test2',
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
  <ModalItem :data="data">
    <template #head>
      <h2 class="layer-item--tit">테스트2</h2>
    </template>

    <template #body>
      <div>aaaa</div>
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
