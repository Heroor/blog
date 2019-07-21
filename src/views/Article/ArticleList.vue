<script>
  import { articleList }  from '@/service/mock.js'
  import ArticleListItem  from '@/components/ArticleListItem'
  export default {
    render() {
      return (
        <div class="article-list-wrap">
          <ul class="article__ul">
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
  .article-list
    &-wrap
      flex 1
      max-width $main-width
  .article-list
    &-wrap
      margin 0 10px

  @media screen and (max-width 640px)
    .article-list
      &-wrap
        margin 0
</style>
