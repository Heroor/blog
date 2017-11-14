<template>
  <div class="article-content">
    <h1 class="title">{{data.title}}</h1>
    <p class="desc">{{data.desc}}</p>
    <img class="banner" :src="data.image" :alt="data.image">
    <div class="content">
      <p>{{data.content}}</p>
      <p class="date">{{data.date}}</p>
    </div>

  </div>
</template>

<script>
  // 假数据
  import JsonData from '@static/data.json'
  console.log(JsonData)
  export default {
    data() {
      return {
        data: {}
      }
    },
    components: {},
    mounted() {
      setTimeout(() => {
        console.log(this.$route.params[0])
        const articleUuid = this.$route.params[0]
        if (!articleUuid) {
          alert('文章获取错误')
          return
        }
        this.data = JsonData.body.articleList[articleUuid] || {}
        console.log(this.data)
      }, 300)
    }
  }

</script>

<style lang="scss">
  @import './articles.scss';

</style>
