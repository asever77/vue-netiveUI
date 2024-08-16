<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
console.log(store)

const router = useRouter();
const systemModal = inject('systemModal');
const alertShow = () => {
  systemModal.show({
    id: 'alert_test1',
    title: '추천 플랜 조회를 그만하시겠습니까?',
    content: '데이터가 초기화되고 홈으로 이동합니다. ',
    control: [
      {
        name: '계속하기',
        callback: () => {
          console.log('계속하기');
        }
      },
      {
        name: '홈으로',
        callback: () => {
          console.log('홈으로');
          router.push({ name: 'NEW_FE_HO_00' });
        }
      }
    ]
  });
}
const actBack = () => {
  router.go(-1);
}

</script>

<template>
  <header class="base-header">
    <button type="button" class="btn--back" aria-label="이전 페이지 가기" @click="actBack"></button>
    <div class="base-header--title">{{ store.state.PageInfo.title }}</div>
    <button type="button" class="btn--close" aria-label="페이지 닫기" @click="alertShow"></button>
  </header>
</template>

<style scoped lang="scss">
  .base-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 5.6rem;
    width:100%;
    padding: 0 2.4rem;

    &--title {
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.6rem;
    }
  }
</style>