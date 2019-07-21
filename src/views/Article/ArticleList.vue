<script>
  import { articleList }  from '@/service/mock.js'
  import ArticleListItem  from '@/components/ArticleListItem'
  export default {
    render() {
      return (
        <div class="article-list__wrap">
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
