<script setup>
import ListItem from '@/components/contents/ListItem';

const dataList = {
    style: 'checkup-major',
    event: 'none', //'none', 'link', 'link-modal'
    list: [
        { 
            icon: '1-1', 
            itemName: '체질량지수(BMI)',
            event: false,
        },
        { 
            icon: '1-2', 
            itemName: '공복혈당',
            event: false,
        },
        { 
            icon: '1-3', 
            itemName: '총콜레스테롤', 
            event: false,
        }
    ]
}
</script>

<template>
    <section class="wrap-box" >
        <RouterLink :to="{name: 'NEW_FE_ST_03', params:{ planID: 'basic'} }" role="text">
            <div class="subject-group">
                <h2 class="subject-group--heading">
                    베이직 플랜
                </h2>
                <em class="subject-group--addition">
                    꼭 받아야 하는 필수 검진 항목
                </em>
            </div>

            <div class="mt-x4">
                <h3 class="a11y-hidden">베이직 플랜 주요항목 3가지</h3>
                <ListItem :data="dataList" />
            </div>
        </RouterLink>
    </section>
</template>