<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  data: Object,
  current: Number,
  expanded: Number,
  accoid: String,
  level: Number,
});

const _data = ref(props.data);
const current = ref(props.current);
const expanded = ref(props.expanded);
const accoId = ref(props.accoid);
const level = ref(props.level);

const isExpanded = ref(current.value === expanded.value ? true : false);
const isHidden = ref(!isExpanded.value);
let timer;
const actToggle = e => {
  isExpanded.value = !isExpanded.value;
  isHidden.value = !isHidden.value;
  const _this = e.target;
  const _acco = _this.closest('.acco');
  const _accoBody = _acco.querySelector('.acco--body');
  const _accoItem = _accoBody.querySelector('.acco--item');
  
  if (isHidden.value) {
    //닫힐때
    const h = _accoItem.offsetHeight;
    _accoBody.style.height = h + 'px';
    clearTimeout(timer);
    timer = setTimeout(() => {
      _accoBody.addEventListener('transitionend', () => {
        _accoBody.style.height = '0';
      });
      _accoBody.style.height = 0;
    }, 0);
  } else {
    //열릴때
    const act = () => {
      _accoBody.style.height = 'auto';
      _accoBody.removeEventListener('transitionend',act)
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      const h = _accoItem.offsetHeight;
      console.log(h);
      _accoBody.addEventListener('transitionend', act);
      _accoBody.style.height = h + 'px';
     
    }, 0);
  }
}

</script>

<template>
  <div class="acco">
    <div class="acco--head" :data-icon="_data.icon" >
      <button type="button" class="acco--btn" 
        :aria-expanded="isExpanded" 
        :aria-controls="(accoId + '_ctr')" 
        :aria-label="_data.title + (isExpanded ? ' 열기' : ' 닫기')" 
        :id="accoId"
        @click="actToggle"
      ></button>
      <strong class="acco--title" :aria-level="level" role="heading" >{{ _data.title }}</strong>
    </div>
    <div class="acco--body" role="region" :aria-labelledby="accoId" :id="(accoId + '_ctr')" :aria-hidden="isHidden" :style="(current === expanded ? 'height:auto' : 'height:0')">
      <div class="acco--item">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
