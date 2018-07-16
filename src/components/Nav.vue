<template>
  <div class="nav-wrap">
    <ul class="nav-ul">
      <li class="nav-item" v-for="(v, i) in navList" :key="i">
        <router-link :to="v.link" class="underline">
          {{v.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList: [{
          name: 'Home',
          link: '/article'
        }, {
          name: 'Info',
          link: '/info'
        }]
      }
    }
  }

</script>

<style scoped lang="stylus">
  @import "../style/mix.styl"
  .nav-ul
    height 68px
    text-align center
    padding-bottom 18px
    font-size 15px
    background $nav-bg
    .nav-item
      display inline-block
      margin 0 10px
      a
        line-height 48px
        display inline-block
        padding 0 8px
        text-decoration none
        transition(.3s)
        color #d7e2e6
        &:hover
          color #fff
        &.router-link-active::after
          width 100%
          border-radius 1px
        &.underline::after
          bottom 8px
</style>
