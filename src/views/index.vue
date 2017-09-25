<template>
  <div class="body">
    <!-- 导航 -->
    <nav-bar :list="navList"></nav-bar>

    <!-- 主内容 -->
    <router-view></router-view>

    <!-- host by -->
    <p class="hosted t-a-c" style="line-height: 4">Hosted by
      <a href="https://pages.coding.me" style="font-weight: bold">Coding Pages</a>
    </p>

  </div>
</template>

<script>
  import navBar from '../components/nav'
  export default {
    data() {
      return {
        navList: [{
            tag: 'Home',
            href: '/'
          },
          {
            tag: 'Friends',
            href: '/friends'
          },
          {
            tag: 'Info',
            href: '/info'
          },
          {
            tag: 'Search',
            href: '/search'
          },
        ],
      }
    },
    components: {
      navBar,
    }
  }

</script>

<style lang="scss">
  body {
    // background-color: #fbfbfb;
    background: #eef7f7;
  }

</style>
