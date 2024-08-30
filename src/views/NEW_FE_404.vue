<script setup>
</script>

<template>
  <main class="base-main" data-layout="bottom-fixed">
    <div class="base-content" >
      <div class="subject-group">
        <img src="@/assets/images/icon/error_404.png" alt="페이지 없을 때 아이콘" class="">
				<h2 class="subject-group--heading">
					죄송합니다.<br> 
          페이지를 찾을 수 없습니다.
				</h2>
			</div>
    </div>
    <div class="wrap--bottom">
      <div class="wrap--btn">
        <RouterLink :to="{name: 'NEW_FE_HO_00'}" class="btn--box" data-color="gray" >
          <span>홈으로 이동</span>
        </RouterLink>
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
    text-align: center;
  }
}
.subject-group--heading {
  text-align: center;
}
</style>