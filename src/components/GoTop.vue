<script>
export default {
  methods: {
    goTop () {
      let top = document.scrollingElement.scrollTop
      const step = top / (250 / 16)
      requestAnimationFrame(function scroll () {
        top-=step
        document.scrollingElement.scrollTop = top
        console.log(top)
        top > 0 && requestAnimationFrame(scroll)
      })
    }
  },
  render () {
    return (
      <div class="go-top t--c" onClick={this.goTop}>Top</div>
    )
  }
}
</script>

<style scoped lang="stylus">
.go-top
  position fixed
  bottom 30px
  right 30px
  width 45px
  height 45px
  line-height 45px
  font-size 10px
  border-radius 50%
  background #fff
  box-shadow 0 0 8px rgba(0, 0, 0, .2)
  cursor pointer
  z-index 1000
</style>
