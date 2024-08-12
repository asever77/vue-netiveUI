<script setup>
import { defineProps, ref, defineEmits } from 'vue';


const emit = defineEmits(['call-act']);
const props = defineProps({
    data: Object,
});

const _data = ref(props.data);
const itemList = _data.value.list;
const itemEvent = _data.value.event;

const act = e => {
    const _this = e.target
    const _id = _this.dataset.id;

    emit('call-act', {
      call: _id
    });
}

</script>

<template>
    <div class="list" :data-style="_data.style ? _data.style : null">
        <ul class="list--wrap">
            <li class="list--item" v-for="(_item, index) in itemList" :key="index" :data-icon="_item.icon ? _item.icon : null">
                <template v-if="(itemEvent === 'link')">
                    <button type="button" @click="act" :data-id="_item.id">
                        {{ _item.name }}
                    </button>
                </template>
                <template v-else>
                    <div class="list--title">{{ _item.name }}</div>
                </template>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss"></style>
