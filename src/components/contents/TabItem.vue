<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  data: Object,
});

const tabData = ref(props.data);

const tabList = tabData.value.tab;
const selectedTab = tabData.value.selected;

const tabSelect = e => {
  console.log('select', e.currentTarget)
  const _this = e.currentTarget;
  const _wrap = _this.closest('.tab--list');
  const _selected = _wrap.querySelector('.tab--item[aria-selected="true"]');
  _selected.removeAttribute('aria-selected');
  _this.setAttribute('aria-selected', true);
}

console.log('tab', document.querySelector('.tab-panel'))
</script>

<template>
  <div class="tab">
    <ul class="tab--list" role="tablist">
      <li class="tab--item" role="tab" v-for="(_item, index) in tabList" :key="index" :data-key="index"
        :aria-selected="(selectedTab === index ? true : false)" @click="tabSelect">
        <span>{{ _item }}</span>
      </li>
    </ul>
  </div>
  <div class="tab-panel" data->
    <slot name="panel"></slot>
  </div>
</template>

<style scoped lang="scss">
.tab {
  .tab--list {
    display: flex;
    background: #F2F3F5;
    padding: .4rem;
    border-radius: 1.2rem;
  }

  .tab--item {
    position: relative;
    flex: 1;
    min-width: min-content;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 600;
    color: #98A0AD;
    transition: color 500ms cubic-bezier(0, 0, 0.5, 1), font 500ms cubic-bezier(0, 0, 0.5, 1);

    span {
      position: relative;
      z-index: 1;
    }

    &::after {
      content: "";
      position: absolute;
      background: #fff;
      box-shadow: 0 .4rem 1.6rem rgba(0, 0, 0, 6%);
      border-radius: .8rem;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
      opacity: 0;
      transform: scaleX(0.8);
      transition: opacity 500ms cubic-bezier(0, 0, 0.5, 1), transform 200ms cubic-bezier(0, 0, 0.5, 1);
    }

    &[aria-selected="true"] {
      font-weight: 700;
      color: #101010;

      &::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
}
</style>
