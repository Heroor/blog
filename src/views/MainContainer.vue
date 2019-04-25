<template>
  <div class="main-container">
    <div :style="sideBarStyle" class="main__sidebar" v-show="showSideBar">
      <!-- <sideNav v-show="showSideNav"/> -->
      <div v-show="showSideNav">{{showSideNav}}12037120497120</div>
    </div>
    <transition name="slide" mode="out-in">
      <router-view ref="container"/>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      showSideBar: false,
      scrollTop: 0,
      minScrollTop: 0,
    }
  },
  computed: {
    ...mapState([ 'showSideNav' ]),
    sideBarStyle () {
      return {
        transform: `translateY(${this.scrollTop}px)`
      }
    }
  },
  methods: {
    onPageScroll (e) {
      let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      this.scrollTop = Math.max(top, this.minScrollTop)
    }
  },
  mounted () {
    this.minScrollTop = this.$refs.container.$el.offsetTop
    this.onPageScroll()
    this.showSideBar = true
    window.onscroll = this.onPageScroll
  }
}
</script>


<style scoped lang="stylus">
@import '../style/mix.styl';

.main-container {
  max-width: $container-width;
  display flex
  margin: 0 auto
}
</style>

<style lang="stylus">
.slide-enter-active, .slide-leave-active
  transition all .2s
.slide-enter, .slide-leave-to
  transform translateY(30px)
  opacity 0
.fade-enter-active, .fade-leave-active
  transition all .2s
.fade-enter, .fade-leave-to
  opacity 0
.main__sidebar
  position absolute
  top 0px
  left 20px
</style>
