<template>
  <div class="main-container">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style scoped lang="stylus">
@import '../style/mix.styl';

.main-container {
  max-width: $container-width;
  padding: 0 10px;
  margin: 0 auto;
}
</style>

<style lang="stylus">
.fade-enter-active, .fade-leave-active
  transition all .2s
.fade-enter, .fade-leave-to
  transform translateY(30px)
  opacity 0
</style>

