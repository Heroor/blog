<script>
export default {
  functional: true,
  render() {
    return (
      <div class="info-container">
        <h2 class="info__title m-b--40">About this blog</h2>
        <div class="info__container">
          There is the blog of bener.
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
