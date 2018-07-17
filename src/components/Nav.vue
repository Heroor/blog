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
              <li class="nav-item" key={i}>
                <router-link to={route.redirect || route.path} class="underline">
                  {route.name}
                </router-link>
              </li>
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
    margin 0 10px
    a
      line-height 48px
      display inline-block
      padding 0 8px
      text-decoration none
      transition(.3s)
      color #d7e2e6
      &:hover
        color #fff
      &.router-link-active::after
        width 100%
        border-radius 1px
      &.underline::after
        bottom 8px
</style>
