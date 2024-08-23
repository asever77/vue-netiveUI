<script setup>
import ListItem from '@/components/contents/ListItem';

const dataList = {
    style: 'checkup-major',
    event: 'none', //'none', 'link', 'link-modal'
    list: [
        { icon: '3-1', name: '경동맥초음파', event: false, },
        { icon: '3-2', name: '특수혈액검사', event: false, },
        { icon: '3-3', name: 'CT검사', event: false, }
    ]
}
</script>

<template>
    <section class="wrap-box">
        <RouterLink :to="{name: 'NEW_FE_ST_03', params:{ planID: 'premium'}}" role="text">
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
        </RouterLink>
    </section>
</template>