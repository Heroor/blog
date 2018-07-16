<script>
  import data from '@/service/mock.js'
  console.log(data)
  export default {
    data() {
      return {
        articleList: []
      }
    },
    mounted() {
      this.articleList = data.mapList
    },
    render() {
      return (
        <div class="article-wrap">
          <ul class="article__ul">
            {
              this.articleList.map((v, i) =>
                <li key={i} class="article-item">
                  <h2 class="w-b--b-a article__title-wrap">
                    <router-link to={'article/' + v.id} class="article__title">{v.title}</router-link>
                  </h2>
                  <div class="article__content">
                    <div class="article__left">
                      <p class="article__desc w-b--b-w w-b--b-a">{v.desc}</p>
                      <span class="article__date">{v.date}</span>
                    </div>
                    {
                      v.poster &&
                      <div class="article__right">
                        <img class="article__img" src={v.poster} alt=""/>
                      </div>
                    }
                  </div>
                </li>
              )
            }
          </ul>
        </div>
      )
    }
  }

</script>

<style scoped lang="stylus">
  @import "../../style/mix.styl"
  .article__ul
    padding-bottom 100px
    .article-item
      padding 28px
      border-radius 6px
      background-color #fff
      transition(.3s)
      &:not(:last-child)
        margin-bottom 25px
      &:hover
        box-shadow 0 0 30px rgba(35, 180, 226, 0.2)
  .article__title-wrap
    font-weight bold
    text-align center
    margin-bottom 36px
  .article__title
    display inline-block
    font-size $font-title
    color $font-color-title
    &:hover
      color $nav-bg
  .article__content
    display flex
  .article__left
    display flex
    flex 1
    flex-direction column
    transition(.4s)
  .article__desc
    flex 1
    margin-bottom 20px
    min-height 50px
    font-size $font-content + 2
    color $font-color-content
  .article__date
    font-size $font-tips + 2
    color #858585
  .article__right
    display flex
    align-items center
    margin-left 20px
    transition(.4s)
  .article__img
    max-width 180px
    max-height 180px
    display block
    border-radius 8px
    // box-shadow 0 0 15px rgba(0, 0, 0, .1)
    transition(.4s)

  @media screen and (max-width 640px)
    .article__title
      font-size $font-title - 2
    .article__desc
      font-size $font-content
    .article__content
      flex-wrap wrap
      flex-direction column-reverse
    .article__left
      flex 1 100%
    .article__right
      justify-content center
      margin 0 0 20px
    .article__img
      max-width 200px
      max-height 200px
  @media screen and (max-width 300px)
    .article__img
      max-width 100px
      max-height 100px
  @media screen and (max-width 200px)
    .article__right
      margin 0
    .article__img
      max-width 0
      max-height 0
      transform rotate(360deg)
</style>

