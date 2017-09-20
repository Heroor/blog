<template>
    <div>
        <!-- 导航 -->
        <nav-bar :list="navList"></nav-bar>

        <!-- 头图 -->
        <banner :src="bannerImgSrc" :desc="articleInfo.desc" :title="articleInfo.title"></banner>
        <articleItem :list="articleList"></articleItem>
        <p class="hosted">Hosted by
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
            navList: [
                { tag: 'Home', href: '/' },
                { tag: 'Friends', href: '/friends' },
                { tag: 'Info', href: '/info' },
                { tag: 'Search', href: '/search' },
            ],
            bannerImgSrc: 'http://oueon55l6.bkt.clouddn.com/5.jpg',
            articleInfo: {
                title: 'Here is the title of the article',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque deserunt tempore optio non? Recusandae eius esse laudantium ipsa eveniet animi numquam ut, est dolorum ratione? Aspernatur debitis quas modi?'
            },
            articleList: [
                { title: 'aaaaaaaaaaaaaaaa', desc: 'dddddddddddddddddddddd', date: '2017-5-6', img: '#', href: "#" },
                { title: '阿斯达所大所多撒', desc: '阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒阿斯达所大所多撒', date: '2017-5-6', img: '#', href: "#" },
                { title: 'aaaaaaaaaaaaaaaa', desc: 'dddddddddddddddddddddd', date: '2017-5-6', img: '#', href: "#" },
                { title: 'aaaaaaaaaaaaaaaa', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque deserunt tempore optio non? Recusandae eius esse laudantium ipsa eveniet animi numquam ut, est dolorum ratione? Aspernatur debitis quas modi', date: '2017-5-6', img: '#', href: "#" },
                { title: 'aaaaaaaaaaaaaaaa', desc: 'dddddddddddddddddddddd', date: '2017-5-6', img: '#', href: "#" },
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
.trans-font {
    transition: all .5s ease;
}

ul li a.router-link-active {
    // color: #7bdde9;
}

.hosted {
    text-align: center;
}
</style>
