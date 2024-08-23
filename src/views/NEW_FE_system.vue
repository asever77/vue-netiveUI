<script setup>
</script>

<template>
  <main class="base-main" data-layout="bottom-fixed">
    <div class="base-content" >
      <div class="subject-group">
        <img src="@/assets/images/icon/error_info.png" alt="시스템 점검 안내 아이콘" class="">
				<h2 class="subject-group--heading">시스템 점검 안내</h2>
        <P class="subject-group--addition">서비스를 보다 나은 품질로 제공하기 위해 <br>아래와 같이 점검을 진행합니다</P>
        <P class="subject-group--addition">이용에 불편을 드려 죄송합니다<br>신속하게 점검을 완료하겠습니다<br>감사합니다</P>
        <em class="subject-group--info">점검 일정 : 0000.00.00 00까지</em>
			</div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.base-content {
  padding:2.4rem;
}
.subject-group {
  align-items: center;

  img {
    width:12rem;
    margin-bottom:2.4rem;
  }
  &--addition{
    text-align: center
  }
}
.subject-group--heading {
  text-align: center;
}
</style>