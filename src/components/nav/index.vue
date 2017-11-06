<template>
    <nav class="nav">
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <router-link :to="item.href"  class="underline">{{item.tag}}</router-link>
            </li>
        </ul>
        <!-- 顶部左右功能键 -->
        <!-- <a href="#" class="left"></a> -->
        <!-- <a href="#" class="right"></a> -->
    </nav>
</template>

<script>
export default {
    props: ['list'],
}

</script>

<style lang="scss" scoped>
@import './nav.scss';
</style>
