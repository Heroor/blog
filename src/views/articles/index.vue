<template>
  <div>
    <!-- 头图 -->
    <banner :src="bannerImgSrc" :desc="articleInfo.desc" :title="articleInfo.title"></banner>

    <!-- 文章内容 -->
    <router-view :list="articleListData"></router-view>

    <!-- 文章列表 -->
    <!-- <articleList :list="articleListData"></articleList> -->
  </div>
</template>

<script>
  // 假数据
  import JsonData from '@static/data.json'
  console.log(JsonData)
  import articleList from '@components/article'
  import banner from '@components/banner'
  export default {
    data() {
      return {
        // bannerImgSrc: 'http://oueon55l6.bkt.clouddn.com/5.jpg',
        // 头图
        bannerImgSrc: 'static/images/bg1.jpg',
        // 文章概述
        articleInfo: {
          title: 'Here is the title of the article',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque deserunt tempore optio non? Recusandae eius esse laudantium ipsa eveniet animi numquam ut, est dolorum ratione? Aspernatur debitis quas modi?'
        },
        // 文章列表
        articleListData: JsonData.body.articleList
      }
    },
    components: {
      banner,
      articleList,
    }
  }

</script>

<style lang="scss">

</style>
