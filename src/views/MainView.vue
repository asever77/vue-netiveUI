<script setup>
import { useStore } from 'vuex';
import { inject, ref, watch } from 'vue';

import StartModal from '@/views/modal/StartModal.vue';
import TermsModal from '@/views/modal/TermsModal.vue';//약관
import TestTab1 from '@/views/tab/TabTest1.vue';
import SwiperHero from '@/views/swiper/SwiperHero.vue';

import Selection from '@/components/contents/SelectionItem';
import ListItem from '@/components/contents/ListItem';




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

        <t>밑줄</t>
        <p>중요한 <em data-marker="yellow">내용에 밑줄</em> 쫘악</p>

        <t>말줄임 1~3줄</t>
        <p data-ellipsis="1">
          두뇌 부위를 여러 방향에서 조사하여, 투과한 X선을 검출기로 수집하고 두뇌 여러 부위의 X선의 흡수차이를 컴퓨터가 재구성하는 촬영 기법을 말합니다. 이 기업은 혈액, 뇌척수액, 백질, 회백질, 종양
          등을 구분하는 데에 우수한 분해능과 대조도를 가지며 뇌출혈을 비롯한 뇌질환 진단에 많이 사용되고 있습니다.
        </p>
        <br>
        <p data-ellipsis="2">
          두뇌 부위를 여러 방향에서 조사하여, 투과한 X선을 검출기로 수집하고 두뇌 여러 부위의 X선의 흡수차이를 컴퓨터가 재구성하는 촬영 기법을 말합니다. 이 기업은 혈액, 뇌척수액, 백질, 회백질, 종양
          등을 구분하는 데에 우수한 분해능과 대조도를 가지며 뇌출혈을 비롯한 뇌질환 진단에 많이 사용되고 있습니다.
        </p>
        <br>
        <p data-ellipsis="3">
          두뇌 부위를 여러 방향에서 조사하여, 투과한 X선을 검출기로 수집하고 두뇌 여러 부위의 X선의 흡수차이를 컴퓨터가 재구성하는 촬영 기법을 말합니다. 이 기업은 혈액, 뇌척수액, 백질, 회백질, 종양
          등을 구분하는 데에 우수한 분해능과 대조도를 가지며 뇌출혈을 비롯한 뇌질환 진단에 많이 사용되고 있습니다.
        </p>
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
        <t>form grid</t>
        <div class="form-grid">
          <!-- 라디오버튼 -->
          <div class="form-grid--item">
            <div class="form-grid--head" id="test_group">
              라디오버튼
            </div>
            <ul class="form-grid--body" role="group" aria-labelledby="test_group">
              <li class="form-item">
                <Selection :data="{
                  type: 'radio',
                  name: 'test',
                  id: 'test_m',
                  cont: '남성'
                }" />
              </li>
              <li class="form-item">
                <Selection :data="{
                  type: 'radio',
                  name: 'test',
                  id: 'test_w',
                  cont: '여성'
                }" />
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

      <!--list-->
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

        <t>검진 항목 리스트2</t>
        <ListItem :data="{
          title: '지질대사 및 심혈관계 검사',
          list: [
            { id: 'a_1', name: '총콜레스테롤' },
            { id: 'a_2', name: '고밀도콜레스테롤(HDL)' },
            { id: 'a_3', name: '저밀도콜레스테롤(LDL)' },
            { id: 'a_4', name: '중성지방' }
          ]
        }" />
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

      <!--swiper-->
      <guide>
        <t>스와이프</t>
        <SwiperHero />
      </guide>

      <!--layer modal : tooltip, alert, modal-->
      <guide>
        <t>Tooltip: 읽어야 하는 </t>
        <a href="#" class="tooltip" aria-disabled="true" role="presentation">
          <span aria-hidden="true">KBHC</span>
          <span class="a11y-hidden">케이비헬스케어</span>
        </a>

        <t>Tooltip: 읽지 않아도 </t>
        <a href="#" class="tooltip" aria-disabled="true" role="presentation">
          <span aria-hidden="true">KBHC</span>
          <span class="a11y-hidden">케이비헬스케어</span>
        </a>

        <t>Tooltip: 선택 </t>
        <a href="#" class="tooltip" aria-disabled="true" role="presentation">
          <span aria-hidden="true">KBHC</span>
          <span class="a11y-hidden">케이비헬스케어</span>
        </a>

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

      <!--tab-->
      <guide>
        <t>tab</t>
        <TestTab1 />
      </guide>

    </div>
  </main>
</template>

<style lang="scss" scoped></style>