<script>
export default {
  props: {
    el: {
      type: [Object, HTMLDivElement],
      default: () => ({})
    }
  },
  data () {
    return {
      currentLink: '',
      currentId: '',
      id: '',
    }
  },
  computed: {
    navList() {
      return this.parseNav(this.el)
    }
  },
  methods: {
    hasHashChange () {
      const url = window.location.href
      const sharpLinkMatch = /#([^#]+)$/.exec(url)
      if (!sharpLinkMatch) return
      this.currentLink = sharpLinkMatch[0]
      this.currentId = window.decodeURI(sharpLinkMatch[1])

      console.log(this.currentId)
      console.log(this.currentLink)
    },
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
    anchorTo (e, content, id) {
      this.id = id
    }
  },
  render() {
    return (
      <div class="side-nav__wrap">
        <ul class="side-nav__container">
          {
            this.navList.map((ele, i) => (
              <li class={ele.tagName.toLowerCase()} key={i}>
                <a data-id={i}
                  class={i === this.id ? 'current' : ''}
                  title={ele.textContent}
                  href={`#${ele.textContent}-${i}`}
                  onClick={e => this.anchorTo(e, ele.textContent, i)}>
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
.side-nav__wrap
  flex 1
  overflow auto
.side-nav__container
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
      &.current
        color: #078bb5
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
