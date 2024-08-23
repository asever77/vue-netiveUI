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
          <span>
            (주)케이비헬스케어 <br>
            대표 : 최낙천 <br>
            사업자등록번호 : 356-86-023934 <br>
            통신판매업신고번호 : 2021-서울강남-06776호 <br>
          </span>
        
          <span>
            06212 서울특별시 강남구 테혜란로 334, 15층 <br>
            (교정공제회 역삼빌딩) <br>
            대표전화 : 1544-3677 <br>
          </span>
        
      </address>
      <p class="base-footer--copyright">Copyright © KB헬스케어. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  
</style>
