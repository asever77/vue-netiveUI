<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import BaseIcon from '@/components/common/BaseIcon.vue';
</script>

<template>
  <div class="bridge-wrap">
    <div>
      <strong>안녕하세요!</strong>
      <h2>
        고객님의 건강 데이터를<br>
        똑똑하게 분석해주는<br>
        <b data-marker="yellow">KB 나만의 건강 매니저</b> 입니다.
      </h2>
      <p>
        고객님의 데이터를<br>
        안전하게 조회하기 위해<br>
        본인인증이 필요해요
        <BaseIcon name="aaa" splite="mmm" size="small" />
      </p>
    </div>

    <div class="button-wrap">
      <BaseButton shape="round" size="large">인증하러 가기</BaseButton>
      <BaseButton shape="square" size="small" icon-before="go">인증하러 가기2</BaseButton>
      <BaseButton shape="round" bg="dark" size="medium" icon-after="arrow">인증하러 가기3</BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
  
</style>