<script>
  import { articleList }  from '@/service/mock.js'
  import ArticleListItem  from '@/components/ArticleListItem'
  export default {
    render() {
      return (
        <div class="article-wrap">
          <ul class="article__ul p-b--100">
            {articleList.map((v, i) => (
              <ArticleListItem itemData={v} key={i} />
            ))}
          </ul>
        </div>
      )
    }
  }

</script>

<style scoped lang="stylus">
  @import "../../style/mix.styl"
  .article
    &-wrap
      margin 0 10px

  @media screen and (max-width 640px)
    .article
      &-wrap
        margin 0
</style>
