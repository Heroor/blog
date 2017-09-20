<template>
  <section class="banner">
    <div class="content">
      <img :src="src" ondragstart="return false">
    </div>
    <div class="article-title">
      <h1 class="trans-font">{{articleInfo.title}}</h1>
      <p class="desc trans-font">{{articleInfo.desc}}</p>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['src', 'articleInfo']
  }

</script>

<style lang="scss" scoped>
  @import './banner.less';

</style>
