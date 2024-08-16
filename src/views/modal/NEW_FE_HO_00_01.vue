<script setup>
// NEW_FE_HO_00_01
import { inject, defineProps } from 'vue';
import { useRouter } from 'vue-router';

import ModalItem from '@/components/contents/ModalItem';

//start modal data
const props = defineProps({
  button: Object
});
const data_modal = {
  modal: {
    id: 'startModal',
    type: 'bottom-sheet',
    class: '',
    aria: {
      labelledby: 'startModal_label',
      describedby: 'startModal_desc'
    }
  },
  button: {
    name: props.button.name || false,
    class: props.button.class
  }
}

//system modal
const router = useRouter();
const systemModal = inject('systemModal');
const alertShow = () => {
  systemModal.show({
    id: 'alert_test1',
    title: '나이를 다시 입력해 주세요.',
    content: '20세부터 추천 결과 조회가 가능합니다.',
    control: [
      {
        name: '확인',
        callback: () => {
          console.log('확인완료');
          router.push({ name: 'NEW_FE_ST_01' });
        }
      }
    ]
  });
}

</script>

<template>
  <ModalItem :data="data_modal">
    <template #head>
      <h2 class="layer-item--title" :id="data_modal.modal.aria.labelledby" tabindex="0">성별 선택 및 나이 입력</h2>
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
              <input type="radio" id="baseData_gender_m" name="baseData_gender">
              <label for="baseData_gender_m" class="form-item--radio">남성</label>
            </li>
            <li class="form-item">
              <input type="radio" id="baseData_gender_w" name="baseData_gender">
              <label for="baseData_gender_w" class="form-item--radio">여성</label>
            </li>
          </ul>
        </div>

        <!-- 나이 입력 -->
        <div class="form-grid--item">
          <label class="form-grid--head" for="baseData_age">나이를 숫자만 입력해 주세요.</label>
          <div class="form-grid--body" style="max-width: calc(50% + 1.4rem);">
            <div class="form-item">
              <input type="tel" class="form-item--inp" id="baseData_age" placeholder="두 자리 입력">
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
        <button type="button" class="btn--box" @click="alertShow">
          <span>간단 조회 하기</span>
        </button>
      </div>
    </template>
  </ModalItem>
</template>

<style scoped></style>