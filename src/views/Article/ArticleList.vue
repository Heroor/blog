<script>
  import { articleList }  from '@/service/mock.js'
  export default {
    functional: true,
    render() {
      return (
        <div class="article-wrap">
          <ul class="article__ul p-b--100">
            {articleList.map((v, i) => (
              <li key={i} class="article-item">
                <div class="article__content">
                  <div class="article__left">
                    <router-link
                      class="w-b--b-a article__title"
                      to={"article/" + v.id} tag="h2"
                    >
                      {v.title}
                    </router-link>
                    {v.poster && (
                      <div class="article__right--moble">
                        <img class="article__img" src={v.poster} alt="" />
                      </div>
                    )}
                    <p class="article__desc w-b--b-w w-b--b-a">{v.desc}</p>
                    <span class="article__date">{v.date}</span>
                  </div>
                  {v.poster && (
                    <div class="article__right">
                      <img class="article__img" src={v.poster} alt="" />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }

</script>

<style scoped lang="stylus">
  @import "../../style/mix.styl"
  .article-wrap
    margin 0 10px
  .article-item
    padding 28px
    border-radius 6px
    background-color #fff
    transition(.3s)
    transition-property box-shadow
    &:not(:last-child)
      margin-bottom 25px
    &:hover
      box-shadow 0 0 30px rgba(35, 180, 226, 0.2)
  .article__content
    display flex
  .article__left
    display flex
    flex 1
    flex-direction column
    transition(.4s)
  .article__title
    display inline-block
    margin-bottom 20px
    font-weight bold
    font-size $font-title
    color $font-color-title
    cursor pointer
    transition(.3s)
    transition-property color
    &:hover
      color $nav-bg
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
  .article__right--moble
    display none
  .article__img
    max-width 160px
    max-height 160px
    display block
    border-radius 8px
    // box-shadow 0 0 15px rgba(0, 0, 0, .1)
    transition(.4s)

  @media screen and (max-width 640px)
    .article-wrap
      margin 0
    .article-item
      padding 22px 20px 20px
    .article__content
      flex-wrap wrap
      flex-direction column-reverse
    .article__left
      flex 1 100%
    .article__title
      font-size 18px
      text-align center
    .article__desc
      font-size 14px
    .article__date
      font-size $font-tips
    .article__right
      display none
    .article__right--moble
      display flex
      justify-content center
      align-items center
      margin-bottom 20px
      transition(.4s)
    .article__img
      max-width 150px
      max-height 150px
  @media screen and (max-width 300px)
    .article__img
      max-width 100px
      max-height 100px
  @media screen and (max-width 200px)
    .article__right--moble
      margin 0
    .article__img
      max-width 0
      max-height 0
      transform rotate(360deg)
</style>
