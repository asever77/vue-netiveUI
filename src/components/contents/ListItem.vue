<script setup>
import { defineProps, ref } from 'vue';

import CheckupInfoModal from '@/views/modal/CheckupInfoModal.vue';

const props = defineProps({
    data: Object,
});

const _data = ref(props.data);
const itemList = _data.value.list;

</script>

<template>
    <section class="checkup-list">
        <h3></h3>
        <ul class="">
            <li for v-for="(_item, index) in itemList" :key="index">
                <CheckupInfoModal :button="{
                    name: _item.name,
                    class: 'btn--text',
                    para: _item.id
                }" />
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss"></style>
