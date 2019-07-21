<script>
export default {
  render() {
    return (
      <div class="info__wrap" key="about">
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
.info__wrap
  min-height 300px
  padding 40px
  border-radius 6px
  background #fff
.info__container
  font-size 14px

@media screen and (max-width 640px)
  .info__wrap
    padding 20px
    border-radius 0
</style>
