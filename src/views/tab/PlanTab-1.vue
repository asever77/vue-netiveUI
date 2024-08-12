<script setup>
import ListItem from '@/components/contents/ListItem';

const dataList = {
    style: 'checkup-major',
    event: 'none', //'none', 'link', 'link-modal'
    list: [
        { icon: 'a', name: '총콜레스테롤' },
        { icon: 'b', name: 'B형간염' },
        { icon: 'c', name: '위내시경' }
    ]
}
</script>

<template>
    <section class="wrap-box">
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
    </section>
</template>
