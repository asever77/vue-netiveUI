<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

import TabItem from '@/components/contents/TabItem';
import PlanTab_1 from '@/views/tab/PlanTab-1.vue';
import PlanTab_2 from '@/views/tab/PlanTab-2.vue';
import PlanTab_3 from '@/views/tab/PlanTab-3.vue';

const store = useStore();
const tabSelected = ref(store.state.PageInfo.tab);
const TabData = {
    id: 'planTab',
    selected: Number(tabSelected.value),
    tab: ['베이직', '스탠다드', '프리미엄']
}
</script>

<template>
    <TabItem :data="TabData">
        <template #panel>
            <section class="panel--item">
                <PlanTab_1 />
            </section>
            <section class="panel--item">
                <PlanTab_2 />
            </section>
            <section class="panel--item">
                <PlanTab_3 />
            </section>
        </template>
    </TabItem>
</template>

<style lang="scss" scoped></style>