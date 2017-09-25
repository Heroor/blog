<template>
    <section class="banner">
        <div class="content">
            <img :src="src" ondragstart="return false" class="transition-05">
        </div>
        <div class="article-title transition-05">
            <h1 class="transition-05">{{title}}</h1>
            <p class="desc transition-05">{{desc}}</p>
        </div>
    </section>
</template>

<script>
export default {
    props: ['src', 'title', 'desc']
}

</script>

<style lang="scss" scoped>
@import './banner.scss';
</style>
