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
    type: 'full-page',
    class: 'checkup-info',
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

const _id = ref(props.button.para);
const info_data = ref(null);

const callAct = (v) => {
  console.log(v);
  _id.value = v;
  // info_data.value = JsonData[_id.value.call];
  // actContent();
}
const actContent = (v) => {
  
  info_data.value = JsonData[v.call];

  console.log('바뀌였어요', info_data.value);


  // DOM 조작이 필요한 경우, 요소가 존재하는지 확인합니다.
  const _thisModal = document.querySelector(`[data-id="${data_modal.modal.id}"]`);
  const _modalBody = _thisModal.querySelector('.layer-item--body');

  let html_cont = ``;
  
  for (let i = 0, len = info_data.value.conts.length; i < len; i++) {
    const item = info_data.value.conts[i];
   
    html_cont += `<section class="wrap-sec">`;
    
      if (item.title) {
      html_cont += `<h3>${item.title}</h3>`;
    }

    if (item.cont) {
      console.log(typeof item.cont)
      if (typeof item.cont === 'string') {
        html_cont += `<div>${item.cont}</div>`;
      }
      else {
        html_cont += `<ul data-bullet="dot">`;
        for (const li of item.cont) {
          html_cont += `<li>${li}</li>`;
        }
        html_cont += `</ul>`;
      }
    }
    if (item.img) {
      html_cont += `<div class="checkup-info--img">
        <div class="checkup-info--img-wrap">`;
        for (const li of item.img) {
          html_cont += `<figure class="checkup-info--img-item"><img src="${li.src}" alt="${li.alt}"></figure>`;
        }
        html_cont += `</div>
        </div>`;
    }
    html_cont += `</section>`;
  }

  console.log('html_cont', html_cont);
  _modalBody.innerHTML = html_cont;

  if (_thisModal) {
    const _thisModal_tit = _thisModal.querySelector('.layer-item--title');

    if (_thisModal_tit && info_data.value.title) {
      _thisModal_tit.textContent = info_data.value.title;
    }
  }
}
 
watch(() => _id.value, (newValue) => {
    // 속성 값이 변경될 때 실행되는 로직
    // console.log('watch', newValue, oldValue);
    // actContent();
    info_data.value = newValue;
    actContent(newValue);
}, {deep: true});


//     watch(info_data, () => {
//   console.log('watch', info_data.value);
  
// });

</script>

<template>
  <ModalItem :data="data_modal" @call-act="callAct">
    <template #head>
      <h2 class="layer-item--title" :id="data_modal.modal.aria.labelledby" tabindex="0"></h2>
    </template>

    <template #body>
     
    </template>
  </ModalItem>
</template>

<style scoped lang="scss">

</style>