<script setup>
import TabItem from '@/components/contents/TabItem';
import TestTab1_1 from '@/views/tab/TabTest1-1.vue';
import TestTab1_2 from '@/views/tab/TabTest1-2.vue';
import TestTab1_3 from '@/views/tab/TabTest1-3.vue';

const TabData = {
    id: 'plan3',
    selected: 2,
    tab: ['tab1', 'tab2', 'tab3'],
    panel: ['TabTest1', 'TabTest2', 'TabTest3']
}
</script>

<template>
    <TabItem :data="TabData">
        <template #panel>
            <section class="panel--item">
                <TestTab1_1 />
            </section>
            <section class="panel--item">
                <TestTab1_2 />
            </section>
            <section class="panel--item">
                <TestTab1_3 />
            </section>
        </template>
    </TabItem>
</template>

<style lang="scss" scoped></style>