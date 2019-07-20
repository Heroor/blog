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
  font-weight bold
  color #888
  border-radius 50%
  background #fff
  box-shadow 0 0 8px rgba(35,180,226,0.2)
  transition .2s
  opacity .618
  cursor pointer
  z-index 1000
  &:hover
    opacity .8
    color #078bb5
    box-shadow 0 0 12px rgba(35,180,226,0.5)
  &:active
    box-shadow 0 0 8px rgba(35,180,226,0.2)
</style>
