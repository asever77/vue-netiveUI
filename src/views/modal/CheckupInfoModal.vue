<script setup>
import { defineProps, ref, watch } from 'vue';
import ModalItem from '@/components/contents/ModalItem';
import JsonData from '@/assets/data/checkup.json';

const props = defineProps({
  button: Object
});

const data_modal = {
  modal: {
    id: 'checkupInfoModal',
    type: 'bottom-sheet',
    class: '',
    aria: {
      labelledby: 'checkupInfoModal_label',
      describedby: 'checkupInfoModal_desc'
    }
  },
  button: {
    name: props.button.name || false,
    class: props.button.class,
    para: props.button.para,
  }
}

const info_data = ref(null);
console.log(info_data.value)

const callAct = (v) => {
  console.log('callAct', v, props.button.para);

  info_data.value = JsonData[props.button.para];

  console.log(info_data.value)
}
const act = () => {
  console.log('바뀌였어요', info_data.value);

  const _thisModal = document.querySelector(`[data-id="${data_modal.modal.id}"]`);
  const _thisModal_tit = _thisModal.querySelector('.layer-item--title');
  console.log(_thisModal_tit, info_data.value.title)

}
watch(info_data, () => {

  act();
});

</script>

<template>
  <ModalItem :data="data_modal" @call-act="callAct">
    <template #head v-if="info_data">
      <h2 class="layer-item--title" :id="data_modal.modal.aria.labelledby" tabindex="0">
        {{ info_data.title }}
      </h2>
    </template>

    <template #body v-if="info_data">
      <!-- form grid -->
      <section v-for="(_item, index) in info_data.conts" :key="index">
        <h3 v-html="_item.title"></h3>
        <div v-html="_item.cont"></div>
      </section>


    </template>
  </ModalItem>
</template>

<style scoped></style>