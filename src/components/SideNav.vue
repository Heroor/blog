<script>
export default {
  props: {
    el: {
      type: [Object, HTMLDivElement],
      default: () => ({})
    }
  },
  computed: {
    navList() {
      return this.parseNav(this.el)
    }
  },
  methods: {
    parseNav(contentEle) {
      if (contentEle instanceof Element) {
        const navList = [...contentEle.querySelectorAll('h1, h2, h3, h4')]
        navList.forEach((ele, i) => {
          ele.id = `${ele.textContent}-${i}`
          ele.dataset.index = i
        })
        return navList
      }
      return []
    },
    anchorTo (e, content) {
      console.log('turn to ', content, e)
    }
  },
  render() {
    return (
      <div>
        <ul class="sidebar__wrap">
          {
            this.navList.map((ele, i) => (
              <li class={ele.tagName.toLowerCase()} key={i}>
                <a data-id={i}
                  title={ele.textContent}
                  href={`#${ele.textContent}-${i}`}
                  onClick={e => this.anchorTo(e, ele.textContent)}>
                  {ele.textContent}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    )
  },
}
</script>

<style scoped lang="stylus">
.sidebar__wrap
  overflow auto
  list-style none
  margin 10px 0
  li
    line-height 1.628
    a
      display block
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      text-decoration none
      color #383838
      cursor pointer
      &:hover
        color #078bb5
  .h1
    font-weight bold
  .h2
    padding-left .8em
    font-weight bold
  .h3
    padding-left 1.6em
  .h4
    padding-left 2.4em

</style>
