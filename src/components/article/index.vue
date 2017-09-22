<template>
    <div>
        <ul>
            <li v-for="(item, index) in list" :key="index" class="transition-05">
                <h3>
                    <a :href="item.href">{{item.title}}</a>
                </h3>
                <div class="content">
                    <div class="right">
                        <img class="img" :src="item.img">
                    </div>
                    <div class="left">
                        <p class="desc">{{item.desc}}</p>
                        <span class="date">{{item.date}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['list']
}

</script>
<style scoped lang="scss">
@import './article.scss'
</style>
