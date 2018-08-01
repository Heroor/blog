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
  background #fff
  border-radius 6px
.info__container
  font-size 14px
</style>
