<template>
  <nav class="nav">
    <ul>
      <li v-for="(item, index) in navList" :key="index" class="underline">
        <router-link :to="item.href">{{item.tag}}</router-link>
      </li>
    </ul>
    <!-- 顶部左右功能键 -->
    <a href="#" class="left"></a>
    <a href="#" class="right"></a>
  </nav>
</template>

<script>
  export default {
    props: ['navList'],
  }

</script>

<style lang="scss" scoped>
  @import './nav.less';

</style>
