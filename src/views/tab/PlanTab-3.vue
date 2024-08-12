<script setup>
import ListItem from '@/components/contents/ListItem';

const dataList = {
    style: 'checkup-major',
    event: 'none', //'none', 'link', 'link-modal'
    list: [
        { icon: 'a', name: '중성지방' },
        { icon: 'b', name: '골다공증' },
        { icon: 'c', name: '혈청알파태아단백(AFP)' }
    ]
}
</script>

<template>
    <section class="wrap-box">
        <div class="subject-group">
            <h2 class="subject-group--heading">
                프리미엄 플랜
            </h2>
            <em class="subject-group--addition">
                중대 질환을 미리 예방하기 위한 검진 항목
            </em>
        </div>

        <div class="mt-x4">
            <h3 class="a11y-hidden">프리미엄 플랜 주요항목 3가지</h3>
            <ListItem :data="dataList" />
        </div>
    </section>
</template>
