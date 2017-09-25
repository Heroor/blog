<template>
  <div>
    <!-- 头图 -->
    <banner :src="bannerImgSrc" :desc="articleInfo.desc" :title="articleInfo.title"></banner>

    <router-view :list="articleListData"></router-view>
    <!-- 文章列表 -->
    <!-- <articleList :list="articleListData"></articleList> -->
  </div>
</template>

<script>
  import articleList from '../../components/article'
  import banner from '../../components/banner'
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
        articleListData: [{
            title: 'aaaaaaaaaaaaaaaa',
            desc: 'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
            date: '2017-5-6',
            img: 'static/images/avatar.jpg',
            href: "/article/2017-9-22-15-31"
          },
          {
            title: 'aaaaaaaaaaaaaaaa',
            desc: 'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
            date: '2017-5-6',
            img: '',
            href: "#"
          },
          {
            title: '阿斯达所大所多撒',
            desc: '阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒',
            date: '2017-5-6',
            img: 'static/images/avatar.jpg',
            href: "#"
          },
          {
            title: '阿斯达所大所多撒',
            desc: '阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒',
            date: '2017-5-6',
            img: '',
            href: "#"
          },
          {
            title: 'aaaaaaaaaaaaaaaa',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque deserunt tempore optio non? Recusandae eius esse laudantium ipsa eveniet animi numquam ut, est dolorum ratione? Aspernatur debitis quas modi',
            date: '2017-5-6',
            img: '',
            href: "#"
          },
          {
            title: 'aaaaaaaaaaaaaaaa',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque deserunt tempore optio non? Recusandae eius esse laudantium ipsa eveniet animi numquam ut, est dolorum ratione? Aspernatur debitis quas modi',
            date: '2017-5-6',
            img: 'static/images/avatar.jpg',
            href: "#"
          },
        ]
    }
  },
  components: {
      banner,
      articleList,
  }
}
</script>

<style>

</style>
