<template>
  <div>
    <!-- 导航 -->
    <nav-bar :nav-list="navList"></nav-bar>

    <!-- 头图 -->
    <banner :src="bannerImgSrc" :article-info="articleInfo"></banner>
  </div>
</template>

<script>
  import navBar from '../components/nav'
  import banner from '../components/banner'
  export default {
    data() {
      return {
        navList: [
          {tag: 'Home', href: '/'},
          {tag: 'Friends', href: '/friends'},
          {tag: 'Info', href: '/info'},
          {tag: 'Search', href: '/search'},
        ],
        bannerImgSrc: 'http://oueon55l6.bkt.clouddn.com/5.jpg',
        articleInfo: {
          title: 'Here is the title of the article',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque deserunt tempore optio non? Recusandae eius esse laudantium ipsa eveniet animi numquam ut, est dolorum ratione? Aspernatur debitis quas modi?'
        }
      }
    },
    components: {
      navBar,
      banner,
    }
  }

</script>

<style lang="scss">


  .trans-font {
    transition: all .5s ease;
  }

  ul li a.router-link-active {
    // color: #7bdde9;
  }

</style>
