<script setup>
import ListItem from '@/components/contents/ListItem';

const dataList = {
    style: 'checkup-major',
    event: 'none', //'none', 'link', 'link-modal'
    list: [
        { icon: 'a', name: '고밀도콜레스테롤 (HDL)' },
        { icon: 'b', name: '치면세균막' },
        { icon: 'c', name: '간초음파' }
    ]
}
</script>

<template>
    <section class="wrap-box">
        <div class="subject-group">
            <h2 class="subject-group--heading">
                스탠다드 플랜
            </h2>
            <em class="subject-group--addition">
                나와 비슷한 성별, 연령대의 검진 항목
            </em>
        </div>

        <div class="mt-x4">
            <h3 class="a11y-hidden">스탠다드 플랜 주요항목 3가지</h3>
            <ListItem :data="dataList" />
        </div>
    </section>
</template>
