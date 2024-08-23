<script setup>
// NEW_FE_HO_00_01
import { inject, defineProps, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import ModalItem from '@/components/contents/ModalItem';

const UI = inject('UI');
const store = useStore();
const router = useRouter();
const props = defineProps({
  button: Object
});
const data_NEW_FE_HO_00_01 = {
  modal: {
    id: 'NEW_FE_HO_00_01',
    type: 'bottom-sheet',
    class: '',
    aria: {
      labelledby: 'NEW_FE_HO_00_01_label',
      describedby: 'NEW_FE_HO_00_01_desc'
    }
  },
  button: {
    name: props.button.name || false,
    class: props.button.class
  }
}

//input data
const _gender = ref(store.state.PageInfo.my.gender);
const _age = ref(store.state.PageInfo.my.age);
const _disabled = ref((_age.value && _gender.value) ? false : true);

//system modal
const alertShow = () => {
  UI.systemModal.show({
    id: 'alert_age',
    title: '나이를 다시 입력해 주세요.',
    content: '20세부터 추천 결과 조회가 가능합니다.',
    control: [
      {
        name: '확인',
        callback: () => {
          console.log('확인완료');
          document.querySelector('#baseData_age').focus();
        }
      }
    ]
  });
}
const checkAge = () => {
  if (Number(_age.value) < 20 || Number(_age.value) > 99) {
    alertShow();
  } else {
    router.push({ name: 'NEW_FE_ST_01' });
  }
}

watch ([_gender, _age], () => {
  store.state.PageInfo.my.age = _age.value;
  store.state.PageInfo.my.gender = _gender.value;
  store.commit("myInfoChange", store.state.PageInfo.my);

  _disabled.value = (_age.value && _gender.value) ? false : true
});
</script>

<template>
  <ModalItem :data="data_NEW_FE_HO_00_01">
    <template #head>
      <h2 class="layer-item--title" :id="data_NEW_FE_HO_00_01.modal.aria.labelledby" tabindex="0">성별 선택 및 나이 입력</h2>
    </template>

    <template #body>
      <!-- form grid -->
      <div class="form-grid">
        <!-- 성별 선택 -->
        <div class="form-grid--item">
          <div class="form-grid--head" id="baseData_gender_group">
            성별을 선택해 주세요.
          </div>
          <ul class="form-grid--body" role="group" aria-labelledby="baseData_gender_group">
            <li class="form-item">
              <input type="radio" id="baseData_gender_m" name="baseData_gender" v-model="_gender" value="남성">
              <label for="baseData_gender_m" class="form-item--radio">남성</label>
            </li>
            <li class="form-item">
              <input type="radio" id="baseData_gender_w" name="baseData_gender" v-model="_gender" value="여성">
              <label for="baseData_gender_w" class="form-item--radio">여성</label>
            </li>
          </ul>
        </div>

        <!-- 나이 입력 -->
        <div class="form-grid--item">
          <label class="form-grid--head" for="baseData_age">나이를 숫자만 입력해 주세요.</label>
          <div class="form-grid--body" style="max-width: calc(50% + 1.4rem);">
            <div class="form-item">
              <input type="tel" class="form-item--inp" id="baseData_age" placeholder="두 자리 입력" v-model.number="_age" maxlength="2">
              <span class="form-item--text">세</span>
            </div>
          </div>
          <div class="form-grid--msg" data-bullet="start">
            <div>20세 이상 사용자만 조회가 가능합니다.</div>
          </div>
        </div>
      </div>
      <!-- //form grid -->
    </template>

    <template #foot>
      <div class="btn--wrap">
        <button type="button" class="btn--box" @click="checkAge()" :disabled="_disabled">
          <span>간단 조회 하기</span>
        </button>
      </div>
    </template>
  </ModalItem>
</template>

<style scoped>
</style>