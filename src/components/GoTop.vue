<script>
export default {
  methods: {
    goTop () {
      let top = document.scrollingElement.scrollTop
      const step = top / (250 / 16)
      requestAnimationFrame(function scroll () {
        top -= step
        document.scrollingElement.scrollTop = top
        top > 0 && requestAnimationFrame(scroll)
      })
    }
  },
  render () {
    return (
      <div class="go-top text--c" onClick={this.goTop}>Top</div>
    )
  }
}
</script>

<style scoped lang="stylus">
.go-top
  user-select none
  position fixed
  bottom 30px
  right 30px
  width 40px
  line-height 40px
  font-size 12px
  border-radius 50%
  background #fff
  box-shadow 0 0 8px rgba(0, 0, 0, .2)
  cursor pointer
  z-index 1000
  &:hover
    box-shadow 0 0 15px rgba(0, 0, 0, .2)
  &:active
    box-shadow 0 0 8px rgba(0, 0, 0, .2)
</style>
