<script>
  import routes from '@/router/config.js'
  export default {
    functional: true,
    render (e) {
      return (
        <div class="nav-wrap">
          <ul class="nav-ul">
            {routes.map((route, i) => (
              route.isNav &&
              <router-link tag="li" key={i}
                class="nav-item underline"
                to={route.redirect || route.path}
              >
                {route.name}
              </router-link>
            ))}
          </ul>
        </div>
      )
    }
  }

</script>

<style scoped lang="stylus">
  @import "../style/mix.styl"
  .nav-ul
    height 68px
    text-align center
    padding-bottom 18px
    font-size 15px
    background $nav-bg
  .nav-item
    display inline-block
    line-height 48px
    padding 0 6px
    cursor pointer
    transition(.3s)
    color #fff
    opacity .75
    &:not(:last-child)
      margin-right 15px
    &:hover
      opacity .9
    &.router-link-active::after
      width 100%
      border-radius 1px
    &.underline::after
      bottom 8px
</style>
