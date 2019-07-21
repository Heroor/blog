<template>
  <div class="main__container">
    <div class="sidebar__wrap" v-if="showSideBar">
      <div class="sidebar__container" :class="{fixed: isSideBarFixed}">
        <transition name="fade" mode="out-in">
          <sideNav v-show="showSideNav"/>
        </transition>
      </div>
    </div>

    <transition name="slide-up" mode="out-in">
      <router-view ref="container"
        @hook:mounted="onContainerMounted"
        @hook:destroyed="onContainerDestroyed"/>
    </transition>
  </div>
</template>

<script>
import sideNav from '@/components/sideNav'
import types from '@/store/mutations'
import { mapState } from 'vuex'

export default {
  components: { sideNav },
  data () {
    return {
      pageScrollTop: 0,
      fixedOffsetTop: 0,
    }
  },
  computed: {
    ...mapState([ 'showSideBar', 'showSideNav' ]),
    isSideBarFixed () {
      return this.pageScrollTop >= this.fixedOffsetTop
    }
  },
  methods: {
    updatePageScrollTop (e) {
      this.pageScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    },
    initSideBarPosi () {
      this.updatePageScrollTop()
      this.fixedOffsetTop = (this.$refs.container && this.$refs.container.$el.offsetTop - 25) || 0
    },
    onContainerMounted () {
      this.initSideBarPosi()
      if (this.showSideBar) {
        window.addEventListener('scroll', this.updatePageScrollTop)
        window.addEventListener('resize', this.initSideBarPosi)
      }
    },
    onContainerDestroyed () {
      this.pageScrollTop = 0
      window.removeEventListener('scroll', this.updatePageScrollTop)
      window.removeEventListener('resize', this.initSideBarPosi)
    }
  },
  created () {
    this.updatePageScrollTop()
    this.$store.commit(types.SWITCH_SIDE_BAR, true)
  }
}
</script>


<style scoped lang="stylus">
@import '../style/mix.styl';
.main__container
  display flex
  justify-content center
  align-items start

.sidebar__wrap
  width $side-bar-width
  margin-right 5px
  margin-left 10px
  @media screen and (max-width 990px)
    display none

.sidebar__container
  width $side-bar-width
  padding 15px
  border-radius 4px
  background white
  transition .2s
  &.fixed
    position fixed
    top 25px
</style>

<style lang="stylus">
.slide-up-enter-active, .slide-up-leave-active
  transition all .2s
.slide-up-enter, .slide-up-leave-to
  transform translateY(30px)
  opacity 0

.fade-enter-active, .fade-leave-active
  transition all .2s
.fade-enter, .fade-leave-to
  opacity 0
</style>
