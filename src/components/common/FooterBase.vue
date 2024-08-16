<script setup>
import TermsModal from '@/views/modal/TermsModal.vue';//약관

</script>

<template>
  <footer class="base-footer">
    <div class="wrap-sec">
      <img src="@/assets/images/CI.svg" alt="KB헬스케어" class="base-footer--ci">
      <div class="base-footer--link">
        <TermsModal :button="{
              name: '<strong>개인정보처리방침</strong>',
              class: 'btn--text'
          }" />
        <TermsModal :button="{
            name: '서비스이용약관',
            class: 'btn--text'
        }" />
        <TermsModal :button="{
            name: '위치기반서비스 이용약관',
            class: 'btn--text'
        }" />
      </div>
      <div class="base-footer--info">
        <address class="base-footer--address">
        (주)케이비헬스케어 <br>
        대표 : 최낙천 <br>
        사업자등록번호 : 356-86-023934 <br>
        통신판매업신고번호 : 2021-서울강남-06776호 <br>
        06212 서울특별시 강남구 테혜란로 334, 15층 <br>
        (교정공제회 역삼빌딩) <br>
        대표전화 : 1544-3677 <br>
      </address>
      <p class="base-footer--copyright">Copyright © KB헬스케어. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .base-footer {
    .wrap-sec{
      display: flex;
      width: 100%;
      max-width: 40rem;
      flex-direction: column;
      gap:3.2rem;
      padding:5.6rem 2.4rem 6rem;
      margin:0 auto;
    }
    &--ci {
      display: block;
      width: 14.6rem;
    }
    &--link {
      display: flex;
      flex-wrap: wrap;
      font-size: 1.6rem;
      color: #000;
      font-weight: 300;
      gap:1.2rem;
     
      a {
        text-decoration: none;
      }
      strong {
        font-weight: 700;
      }
    }
    &--info {
      display: flex;
      flex-direction: column;
      gap:2.4rem;
    }
    &--address {
      font-size: 1.4rem;
      color: #666;
      font-weight: 300;
    }
    &--copyright {
      font-size: 1.2rem;
      color: #999;
      font-weight: 300;
    }
  }
</style>
