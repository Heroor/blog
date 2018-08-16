<script>
  export default {
    functional: true,
    render (h, context) {
      const { hideBanner, bannerUrl, bennerTitle, bennerDesc } = context.props.bannerInfo
      return (
        <div class={`banner-wrap ${(hideBanner || !bannerUrl) && 'simple'}`}>
          <div class="banner-container posi--align">
            <img src={bannerUrl} ondragstart={() => false} class="banner transition-05 posi--align" />
          </div>
        </div>
      )
    }
  }

</script>

<style scoped lang="stylus">
  @import "../style/mix.styl"
  .banner-wrap
    position relative
    top -20px
    height $banner-height
    overflow hidden
    &.simple
      height 20px
  .banner-container
    overflow hidden
    height $banner-height
    width 280%
    border-radius 50% 50% 0 0
    background $page-bg
  .banner
    max-width 100vw
    min-width 760px

  @media screen and (max-width 640px)
    .banner-wrap
      height $banner-height - 200
    .banner-container
      height $banner-height - 200
    .banner
      min-width 560px


</style>
