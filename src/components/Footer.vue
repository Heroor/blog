<script>
export default {
  functional: true,
  render() {
    return (
      <div class="footer__wrap">
        <p>
          <span class="vertical-center">
            Made by<a class="bener-link" href="https://github.com/Heroor" target="blank"><b> Bener </b></a>with
            <span class="heart"> ❤ </span>
          </span>
        </p>
        <p>&copy; 2018-2019</p>
      </div>
    )
  }
}
</script>

<style scoped lang="stylus">
@import '../style/mix.styl';
.footer__wrap {
  user-select none
  margin 70px 0 30px
  text-align center
  font-size 13px
  line-height 1.2
  color #666
}
.bener-link {
  color #555
  transition .2s
  &:hover {
    color #078bb5
  }
}
.heart {
  color #F44336
}
</style>
