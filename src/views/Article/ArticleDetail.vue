<script>
import {articleList} from "@/service/mock.js"
export default {
  name: 'ArticleDetail',
  data() {
    return {
      map: {
        title: "",
        desc: "",
        poster: "",
        content: "",
        date: "",
        id: null
      }
    }
  },
  mounted() {
    const { id } = this.$route.params
    articleList.some(v => v.id === id && (this.map = v))
  },
  render() {
    const { title, desc, poster, content, date } = this.map
    this.$refs.contentContainer &&
      (this.$refs.contentContainer.innerHTML = content || "")
    return (
      <div class="detail__wrap">
        <h1 class="title t--c w-b--b-w">{title}</h1>
        {/*<p class="desc">{desc}</p>*/}
        <div ref="contentContainer" class="content md" />
        <div class="date m-t--50">{date}</div>
      </div>
    )
  }
}
</script>

<style src="@/style/markdown.css"></style>
<style scoped lang="stylus">
@import '../../style/mix.styl'

.detail__wrap
  min-height 200px
  padding 20px 40px
  border-radius 6px
  background #fff
.title
  padding 50px 0 100px
  font-size $font-title + 5px
  color $font-color-title
.desc
  padding 10px 0
  font-size $font-content + 2px
.content
  font-size $font-content
.date
  padding 20px 0
.md >>> ul
  list-style disc
.md >>> ol
  list-style decimal
</style>
