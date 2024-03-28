<script setup>
import BaseIcon from '@/components/common/BaseIcon.vue';
import { defineProps } from 'vue';

const props = defineProps({
    shape: {
        Type: String,
        default: 'square', //square, round, circle
    },
    size: {
        Type: String,
        default: 'medium', //small, medium, large
    },
    bg: {
        Type: String,
        default: 'white', // white, dark, color....
    },
    iconBefore: {
        Type: String,
        default: false
    },
    iconAfter: {
        Type: String,
        default: false
    },
});

</script>

<template>
    <button class="base-button" type="button" :data-shape=props.shape :data-size=props.size :data-bg=props.bg>
        <BaseIcon v-if="props.iconBefore" :name=props.iconBefore :size=props.size></BaseIcon>
        <span class="base-button-txt" >
            <slot></slot> 
        </span>
        <BaseIcon v-if="props.iconAfter" :name=props.iconAfter :size=props.size></BaseIcon>
    </button>
</template>

<style scoped lang="scss">
.base-button{
    border:.1rem solid #ccc;
    display: flex;
    align-items: center;
    gap: 0;
    font-weight: 500;

    &[data-bg="white"] {
        background: #fff;
        color: #222;
    }
    &[data-bg="dark"] {
        background: #222;
        color: #fff;
    }

    &[data-size="small"]{ 
        padding: .4rem 1.2rem;
        font-size: 1.2rem;
        &[data-shape="round"] {border-radius: 2rem;}
    }
    &[data-size="medium"]{ 
        padding: .4rem 1.2rem;
        font-size: 1.4rem;
        &[data-shape="round"] {border-radius: 3rem;}
    }
    &[data-size="large"]{ 
        padding: .6rem 1.8rem;
        font-size: 1.6rem;
        &[data-shape="round"] {border-radius: 4rem;}
    }
}


</style>
