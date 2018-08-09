<script>
export default {
  functional: true,
  render() {
    return (
      <div class="info-container" key="about">
        <h2 class="info__title m-b--40">About this blog</h2>
        <div class="info__container">
          bener写字的地方。
        </div>
      </div>
    )
  }
}
</script>
<style scoped lang="stylus">
.info-container
  min-height 300px
  padding 40px
  margin 0 10px
  border-radius 6px
  background #fff
.info__container
  font-size 14px

@media screen and (max-width 640px)
  .info-container
    padding 20px
    margin 0
</style>
