<script>
export default {
  functional: true,
  render() {
    return (
      <div class="info-container">
        <h2 class="info__title">blog info</h2>
        <div class="info__container">
          There is a blog of bener
        </div>
      </div>
    )
  }
};
</script>
<style scoped lang="stylus">
.info-container
  min-height 300px
  padding 40px
  background #fff
  border-radius 6px
.info__title
  margin-bottom 40px
.info__container
  font-size 14px
</style>
