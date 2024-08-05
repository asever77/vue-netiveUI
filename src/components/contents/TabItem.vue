<script setup>
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
  data: Object,
});

const tabData = ref(props.data);

const tabList = tabData.value.tab;
const selectedTab = tabData.value.selected;
const tabID = tabData.value.id;

const actSelect = (v, n, s) => {
  for (let i = 0, len = v.length; i < len; i++) {
    const item = v[i];
    if (i === Number(n)) {
      item.setAttribute('aria-expanded', true);
      item.setAttribute('tabindex', 0);
    } else {
      item.setAttribute('aria-expanded', false);
      item.setAttribute('tabindex', '-1');
    }

    if (s === 'set') {
      item.setAttribute('id', tabID + '_ctr_' + i);
      item.setAttribute('aria-labelledby', tabID + '_id_' + i);
    }
  }
}

const tabSelect = e => {
  console.log('select', e.currentTarget)
  const _this = e.currentTarget;
  const _tab = _this.closest('.tab');
  const _id = _tab.dataset.id;
  const _wrap = _this.closest('.tab--list');
  const _selected = _wrap.querySelector('.tab--item[aria-selected="true"]');
  const _tabPanel = document.querySelector(`.tab-panel[data-id="${_id}"]`);
  const _panels = _tabPanel.querySelectorAll('.panel--item');
  const _key = _this.dataset.key;

  _selected.setAttribute('aria-selected', false);
  _selected.setAttribute('tabindex', '-1');
  _this.setAttribute('aria-selected', true);
  _this.setAttribute('tabindex', 0);
  actSelect(_panels, _key);
}

onMounted(() => {
  //tab panel setting
  const tabPanel = document.querySelector(`.tab-panel[data-id="${tabID}"]`);
  const panels = tabPanel.querySelectorAll('.panel--item');

  actSelect(panels, selectedTab, 'set');
})

</script>

<template>
  <div class="tab" :data-id="tabID">
    <ul class="tab--list" role="tablist">
      <li class="tab--item" role="tab" v-for="(_item, index) in tabList" :key="index" :data-key="index"
        :aria-selected="(selectedTab === index ? true : false)" :id="(tabID + '_id_' + index)"
        :aria-controls="(tabID + '_ctr_' + index)" :tabindex="(selectedTab === index ? 0 : -1)" @click="tabSelect">
        <span>{{ _item }}</span>
      </li>
    </ul>
  </div>
  <div class="tab-panel" :data-id="tabID">
    <slot name="panel"></slot>
  </div>
</template>

<style scoped lang="scss"></style>
