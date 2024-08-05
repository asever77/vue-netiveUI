<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    data: Object,
});

const _data = ref(props.data);
const _id = _data.value.id;
const _name = _data.value.name;
const _type = _data.value.type;
const _cont = _data.value.cont;
</script>

<template>
    <input :type="_type" :id="_id" :name="_name">
    <label :for="_id" :class="(_type === 'radio' ? 'form-item--radio' : 'form-item--check')">{{ _cont }}</label>
</template>

<style scoped lang="scss"></style>
