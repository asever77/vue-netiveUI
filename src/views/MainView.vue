<script setup>
import { useStore } from 'vuex';
import { inject, ref, watch } from 'vue';
import StartModal from '@/views/modal/StartModal.vue';
import TestTab1 from '@/views/tab/TabTest1.vue';
import TermsModal from '@/views/modal/TermsModal.vue';//약관

const store = useStore();
store.state.page = 1;

//toast modal
const toastModal = inject('toastModal');
const isToastTest = ref(false);
const toastShow = () => {
  toastModal.show({
    content: '테스트 입니다.'
  });
}

//system modal
const systemModal = inject('systemModal');
const isAlertTest = ref(false);
const alertShow = () => {
  systemModal.show({
    id: 'alert_test1',
    title: '검진 플랜 선택을 그만하시겠습니까?',
    content: '선택값이 초기화되고 홈으로 이동합니다. ',
    control: [
      {
        name: '계속하기',
        callback: () => {
          console.log('계속하기')
        }
      },
      {
        name: '홈으로',
        callback: () => {
          console.log('홈으로')
        }
      }
    ]
  });
}

watch([isToastTest, isAlertTest], () => {
  console.log('watch')
});

</script>

<template>
  <main class="base-main">
    <div class="base-content">
      <guide>
        <t>제목 가이드</t>
        <div class="subject-group">
          <h2 class="subject-group--heading">
            건강검진이 처음이거나 <br>
            오랜만이라면?
          </h2>
          <em class="subject-group--addition">
            내 성별과 나이에 맞는 검진 항목을 확인해 보세요.
          </em>
        </div>
      </guide>

      <guide>
        <t>form grid</t>
        <div class="form-grid">
          <!-- 라디오버튼 -->
          <div class="form-grid--item">
            <div class="form-grid--head" id="test_group">
              라디오버튼
            </div>
            <ul class="form-grid--body" role="group" aria-labelledby="test_group">
              <li class="form-item">
                <input type="radio" id="test_m" name="test">
                <label for="test_m" class="form-item--radio">남성</label>
              </li>
              <li class="form-item">
                <input type="radio" id="test_w" name="test">
                <label for="test_w" class="form-item--radio">여성</label>
              </li>
            </ul>
          </div>
          <!-- 입력 -->
          <div class="form-grid--item">
            <label class="form-grid--head" for="form_test_inp_1">입력폼</label>
            <div class="form-grid--body">
              <div class="form-item">
                <input type="tel" class="form-item--inp" id="form_test_inp_1" placeholder="입력하세요">
                <span class="form-item--text">텍스트</span>
              </div>

            </div>
            <div class="form-grid--msg">
              ※만 19세 이상 사용자만 조회가 가능합니다.
            </div>
          </div>
        </div>
      </guide>

      <guide>
        <t>약관 리스트</t>
        <ul class="term-list">
          <li class="term-list--item">
            <p class="term-list--title">정보 확인 및 서비스 이용 약관에 동의합니다. </p>
            <TermsModal :button="{
              name: '약관보기',
              class: 'btn--underline'
            }" />
          </li>
          <li class="term-list--item">
            <p class="term-list--title">정보 확인 및 서비스 이용 약관에 동의합니다. </p>
            <TermsModal :button="{
              name: '약관보기',
              class: 'btn--underline'
            }" />
          </li>
        </ul>

        <t>검진 항목 리스트</t>
        <ul class="checkup-list">
          <li class="checkup-list--item">
            <div class="checkup-list--icon"></div>
            <div class="checkup-list--title">고밀도콜레스테롤 (HDL)</div>
          </li>
          <li class="checkup-list--item">
            <div class="checkup-list--icon"></div>
            <div class="checkup-list--title">고밀도콜레스테롤 (HDL)</div>
          </li>
        </ul>
      </guide>

      <guide>
        <t>Wrap</t>
        <div class="wrap-box">
          박스형태의 감싸는 요소
        </div>
        <section class="wrap-sec">
          <guide-in></guide-in>영역구분
        </section>
        <section class="wrap-sec">
          <guide-in></guide-in>영역구분
        </section>
      </guide>

      <guide>
        <t>Toast layer modal</t>
        <button type="button" class="btn--box" @click="toastShow">
          토스트팝업
        </button>

        <t>System layer modal</t>
        <button type="button" class="btn--box" @click="alertShow">
          시스템팝업
        </button>

        <t>button + layer modal</t>
        <StartModal :button="{
          name: '시작하기',
          class: 'btn--box'
        }" />
        <StartModal :button="{
          name: '시작하기2',
          class: 'btn--box'
        }" />
      </guide>

      <guide>
        <t>tab</t>
        <TestTab1 />
      </guide>

    </div>
  </main>
</template>

<style lang="scss" scoped></style>