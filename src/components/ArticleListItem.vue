<script>
export default {
  functional: true,
  props: {
    itemData: {
      type: Object,
      required: true
    }
  },
  render (h, {props: {itemData}}) {
    const {id, title, poster, desc, date, wordCount } = itemData
    return (
      <li class="article-item">
        <div class="article__content">
          <div class="article__left">
            <div>
              <router-link tag="h2"
                to={{
                  name: 'ArticleDetail',
                  params: {id}
                }}
                class="w-b--all article__title"
              >
                {title}
              </router-link>
            </div>
            {poster && (
              <div class="article__right--moble">
                <img class="article__img" src={poster} alt="" />
              </div>
            )}
            <p class="article__desc w-b--word w-b--all">{desc}</p>
            <div>
              <span class="article__date m-r--10">{date}</span>
              <span class="article__date">{wordCount}字</span>
            </div>
          </div>
          {poster && (
            <div class="article__right">
              <img class="article__img" src={poster} alt="" />
            </div>
          )}
        </div>
      </li>
    )
  }
}
</script>

<style scoped lang="stylus">
  @import "../style/mix.styl"
  .article
    &-item
      padding 28px
      border-radius 6px
      background-color #fff
      transition(.3s)
      transition-property box-shadow
      &:not(:last-child)
        margin-bottom 25px
      &:hover
        box-shadow 0 0 30px rgba(35, 180, 226, 0.2)
    &__content
      display flex
    &__left
      display flex
      flex 1
      flex-direction column
      transition(.4s)
    &__title
      margin-bottom 20px
      font-weight bold
      font-size $font-title
      color $font-color-title
      cursor pointer
      transition(.3s)
      transition-property color
      &:hover
        color $nav-bg
    &__desc
      flex 1
      line-height 1.5
      margin-bottom 20px
      min-height 50px
      font-size $font-content + 2
      color $font-color-content
    &__date
      font-size $font-tips + 2
      color #858585
    &__right
      display flex
      align-items center
      margin-left 20px
      transition(.4s)
    &__right--moble
      display none
    &__img
      max-width 160px
      max-height 160px
      display block
      border-radius 8px
      // box-shadow 0 0 15px rgba(0, 0, 0, .1)
      transition(.4s)

  @media screen and (max-width 640px)
    .article
      &-item
        padding 22px 20px 20px
        margin-bottom 24px !important
        border-radius 0
      &__content
        flex-wrap wrap
        flex-direction column-reverse
      &__left
        flex 1 100%
      &__title
        font-size 18px
        text-align center
      &__desc
        font-size 14px
      &__date
        font-size $font-tips
      &__right
        display none
      &__right--moble
        display flex
        justify-content center
        align-items center
        margin-bottom 20px
        transition(.4s)
      &__img
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
