<script setup>
import { defineProps } from 'vue';
import ModalItem from '@/components/contents/layer/ModalItem';
import Test2Modal from '@/views/modal/Test2Modal.vue';

const props = defineProps({
  button: Object
});

const data_modal = {
  modal: {
    id: 'test1',
    type: 'center',
    class: '',
    aria: {
      labelledby: 'test1_label',
      describedby: 'test1_desc'
    }
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
      <h2 class="layer-item--tit" :id="data_modal.modal.aria.labelledby" tabindex="0">테스트1</h2>
    </template>

    <template #body>
      <p :id="data_modal.modal.aria.describedby">그래서 그래요 그러니깐 이렇게 해서 이래요</p>
      <div class="atest"><a href="#">aaaa </a><input type="text" /></div>
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
<style scoped>
.atest {
  border: 2px solid black
}

.atest:focus-within {
  border: 2px solid red
}
</style>