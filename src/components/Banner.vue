<script>
  export default {
    functional: true,
    render (h, context) {
      const { hideBanner, bannerUrl, bennerTitle, bennerDesc } = context.data
      console.log(context)
      return (
        <div class={`banner__wrap ${(hideBanner || !bannerUrl) && 'simple'}`}>
          <div class="banner__container posi--align">
            <div class="banner__content" >{{bennerTitle}}</div>
            <img src={bannerUrl} draggable="false" class="banner__img transition-05 posi--align" />
          </div>
        </div>
      )
    }
  }

</script>

<style scoped lang="stylus">
  @import "../style/mix.styl"
  .banner
    &__wrap
      position relative
      top -20px
      height $banner-height
      overflow hidden
      &.simple
        height 20px
    &__container
      overflow hidden
      height $banner-height
      width 280%
      border-radius 50% 50% 0 0
      background $page-bg
    &__content
      position absolute
      bottom 30px
      font-size 30px
      color #fff
    &__img
      max-width 100vw
      min-width 760px

  @media screen and (max-width 640px)
    .banner
      &__wrap
        height $banner-height - 200
      &__container
        height $banner-height - 200
      &__img
        min-width 560px


</style>
