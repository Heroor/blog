<script>
  const bannerUrl = 'http://oueon55l6.bkt.clouddn.com/banner.jpg'
  const title = 'title'
  const desc = 'desc'

  export default {
    functional: true,
    render () {
      return (
        <div class={`banner-wrap ${!bannerUrl && 'simple'}`}>
          <div class="banner-container position--align-c">
            <img src={bannerUrl} ondragstart={() => false} class="banner transition-05 position--align-c" />
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
