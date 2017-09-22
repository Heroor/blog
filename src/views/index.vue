<template>
  <div class="body">
    <!-- 导航 -->
    <nav-bar :list="navList"></nav-bar>

    <!-- 头图 -->
    <banner :src="bannerImgSrc" :desc="articleInfo.desc" :title="articleInfo.title"></banner>

    <!-- 文章列表 -->
    <articleItem :list="articleList"></articleItem>

    <!-- host by -->
    <p class="hosted t-a-c">Hosted by
      <a href="https://pages.coding.me" style="font-weight: bold">Coding Pages</a>
    </p>
  </div>
</template>

<script>
  import navBar from '../components/nav'
  import article from '../components/article'
  import banner from '../components/banner'
  export default {
    data() {
      return {
        navList: [{
            tag: 'Home',
            href: '/'
          },
          {
            tag: 'Friends',
            href: '/friends'
          },
          {
            tag: 'Info',
            href: '/info'
          },
          {
            tag: 'Search',
            href: '/search'
          },
        ],
        // bannerImgSrc: 'http://oueon55l6.bkt.clouddn.com/5.jpg',
        bannerImgSrc: 'static/images/bg1.jpg',
        articleInfo: {
          title: 'Here is the title of the article',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque deserunt tempore optio non? Recusandae eius esse laudantium ipsa eveniet animi numquam ut, est dolorum ratione? Aspernatur debitis quas modi?'
        },
        articleList: [{
            title: 'aaaaaaaaaaaaaaaa',
            desc: 'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
            date: '2017-5-6',
            img: 'static/images/avatar.jpg',
            href: "#"
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
      navBar,
      banner,
      articleItem: article,
    }
  }

</script>

<style lang="scss">
  body {
    // background-color: #fbfbfb;
    background: #eef7f7;
  }

  .hosted {
    line-height: 4;
  }

</style>
