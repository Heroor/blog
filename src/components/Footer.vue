<script>
export default {
  functional: true,
  render() {
    return (
      <div class="m-t--20">
        <p class="footer__hosted">
          <span>Hosted by </span>
          <b><a class="footer__strong" href="https://pages.coding.me">Coding Pages</a></b>
          <span> | Made by </span>
          <a href="https://github.com/Heroor" target="_black">
            <b class="footer__strong">Bener</b>
          </a>
        </p>
      </div>
    )
  }
}
</script>

<style scoped lang="stylus">
@import '../style/mix.styl';

.footer__hosted {
  line-height: 3;
  text-align: center;
  color: #999;
}

.footer__strong {
  color: #587f8c;
}
</style>

