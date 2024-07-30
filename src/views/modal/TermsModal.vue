<script setup>
import { defineProps } from 'vue';
import ModalItem from '@/components/contents/layer/ModalItem';

const props = defineProps({
  button: Object
});
console.log('button data', props.button)

const data = {
  modal: {
    id: 'test2',
    type: 'full-page',
    class: ''
  },
  button: {
    name: props.button.name || false,
    class: props.button.class
  }
}
</script>

<template>
  <ModalItem :data="data">
    <template #head>
      <h2 class="layer-item--tit">KB헬스케어 서비스 이용 안내</h2>
    </template>

    <template #body>
      <article class="term-cont">
        <h1>KB헬스케어 건강검진 추천 서비스 이용 안내</h1>

        <p>본 이용약관은 본 서비스의 이용과 관련하여 추천 서비스를 제공하는 주식회사 케이비헬스케어(이하 회사) 서비스를 이용하는 비회원과의 관계를 설명합니다.</p>
        <ul>
          <li>KB헬스케어 서비스란 KB헬스케어 홈페이지 및 KB헬스케어 건강검진 추천 서비스와 관련된 제반 서비스를 의미합니다.</li>
          <li>파트너 서비스란 제휴된 헬스 관련 서비스 회사들이 제공하는 유무상 서비스를 의미합니다. 서비스를 이용하시거나 오케어 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 운영 정책을 확인하거나
            동의하게 되므로, 조금만 시간을 내서 주의 깊게 읽어 주시기 바랍니다.</li>
        </ul>

        <p>본 이용약관은 본 서비스의 이용과 관련하여 추천 서비스를 제공하는 주식회사 케이비헬스케어(이하 회사) 서비스를 이용하는 비회원과의 관계를 설명합니다.</p>
        <ul>
          <li>KB헬스케어 서비스란 KB헬스케어 홈페이지 및 KB헬스케어 건강검진 추천 서비스와 관련된 제반 서비스를 의미합니다.</li>
          <li>파트너 서비스란 제휴된 헬스 관련 서비스 회사들이 제공하는 유무상 서비스를 의미합니다. 서비스를 이용하시거나 오케어 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 운영 정책을 확인하거나
            동의하게 되므로, 조금만 시간을 내서 주의 깊게 읽어 주시기 바랍니다.</li>
        </ul>
      </article>
    </template>

    <template #foot>
      <div class="btn--wrap">
        <button type="button" class="btn--box">
          <span>확인</span>
        </button>
      </div>
    </template>
  </ModalItem>
</template>
