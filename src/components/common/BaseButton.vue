<script setup>
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

console.log(props.iconBefore);
</script>

<template>
    <button class="base-button" type="button" :data-shape=props.shape :data-size=props.size :data-bg=props.bg>
        <span v-if="props.iconBefore" :data-icon=props.iconBefore></span>
        <span>
            <slot></slot> 
        </span>
        <span v-if="props.iconAfter" :data-icon=props.iconAfter></span>
    </button>
</template>

<style scoped lang="scss">
$gap: var(--gap);
$gap_half: var(--gap) / 2;

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
        [data-icon]{
            width:1.2rem;
            height:1.2rem;
            background-size:1.2rem;
        }
    }
    &[data-size="medium"]{ 
        padding: .4rem 1.2rem;
        font-size: 1.4rem;
        &[data-shape="round"] {border-radius: 3rem;}
        [data-icon]{
            width:1.4rem;
            height:1.4rem;
            background-size:1.4rem;
        }
    }
    &[data-size="large"]{ 
        padding: .6rem 1.8rem;
        font-size: 1.6rem;
        &[data-shape="round"] {border-radius: 4rem;}
        [data-icon]{
            width:1.6rem;
            height:1.6rem;
            background-size:1.6rem;
        }
    }
}

[data-icon] {
    position: relative;
    display: block;
    border:.1rem dashed #ccc;
}
</style>
