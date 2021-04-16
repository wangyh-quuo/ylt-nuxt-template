<template>
  <div class="container">
    <a-button type="primary" @click="$message.success('click')">
      Primary
    </a-button>
    {{ $t('home.title') }}

    <h1 class="h1">一级标题</h1>
    <h2 class="h2">二级标题</h2>
    <h3 class="h3">三级标题</h3>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.h1 {
  .font-size-xxl();
}
.h2 {
  .font-size-xl();
}
.h3 {
  .font-size-md();
}
</style>
