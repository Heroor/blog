<template>
  <div class="detail__wrap">
    <h1 class="title text--c w-b--word">{{detail.title}}</h1>
    <!-- <p class="desc">{desc}</p> -->
    <div v-html="'<h1>Loading...</h1>'" ref="contentContainer" class="content md" />
    <div class="date m-t--50">{{detail.date}}</div>
  </div>
</template>

<script>
import { articleList } from "@/service/mock.js"
import types from '@/store/mutations'

export default {
  name: 'ArticleDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      detail: {
        title: "",
        desc: "",
        poster: "",
        content: "",
        date: "",
        id: null
      }
    }
  },
  methods: {
    toggleSideBar(isShow) {
      this.$store.commit(types.SWITCH_SIDE_NAV, isShow)
    },
  },
  mounted() {
    const id = this.id
    this.mock(articleList.find(v => v.id === id))
      .then(res => {
        Object.assign(this.detail, res)

        const contentHtml = this.detail.content
        const containerEle = this.$refs.contentContainer
        if (contentHtml && containerEle) {
          containerEle.innerHTML = contentHtml || ''

          this.$emit('content-render', containerEle)
          this.toggleSideBar(true)
        }
      })
  },
  beforeDestroy() {
    this.toggleSideBar(false)
  },
}
</script>

<style src="@/style/markdown.css"></style>
<style src="@/style/hljs.css"></style>
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


@media screen and (max-width 640px)
  .detail__wrap
    padding 20px
    border-radius 0
</style>
