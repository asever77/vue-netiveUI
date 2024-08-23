<script setup>
import ListItem from '@/components/contents/ListItem';

const dataList = {
    style: 'checkup-major',
    event: 'none', //'none', 'link', 'link-modal'
    list: [
        { icon: '2-1', name: '갑상선초음파', event: false, },
        { icon: '2-2', name: '위내시경', event: false, },
        { icon: '2-3', name: '상복부초음파', event: false, }
    ]
}
</script>

<template>
    <section class="wrap-box">
        <RouterLink :to="{name: 'NEW_FE_ST_03', params:{ planID: 'standard'}}" role="text">
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
        </RouterLink>
    </section>
</template>