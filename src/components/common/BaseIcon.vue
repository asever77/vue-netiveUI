<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    name: {
        Type: String,
        default: '',
    },
    size: {
        Type: String,
        default: 'medium', //small, medium, large
    },
    splite: {
        Type: String,
        default: '',
    }
});
const _splite = ref(props.splite);

</script>

<template>
    <span v-if="_splite !== ''" :data-icon=props.name :data-size=props.size :data-splite="_splite"></span>
    <span v-else :data-icon=props.name :data-size=props.size></span>
</template>

<style scoped lang="scss">
    [data-icon] {
        position: relative;
        display: block;
        border:.1rem dashed #ccc;

        &[data-size="small"] {
            width:1.2rem;
            height:1.2rem;
            background-size:1.2rem;
        }
        &[data-size="medium"] {
            width:1.4rem;
            height:1.4rem;
            background-size:1.4rem;
        }
        &[data-size="large"] {
            width:1.6rem;
            height:1.6rem;
            background-size:1.6rem;
        }
    }

    [data-icon="aaa"] {
        background: url() no-repeat 0 0 / 10rem;
    }
</style>