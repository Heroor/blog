<template>
  <div class="home-article-list">
    <ul>
      <li v-for="(item, index) in list" :key="index" class="transition-05">
        <h3 class="t-a-c w-b-ba">
          <!-- <router-link :to="`article-${item.articleUuid}`" class="transition-03"> -->
          <router-link :to="`article-${index}`" class="transition-03">
            {{item.title}}
          </router-link>
        </h3>
        <div class="content">
          <div class="left">
            <p class="desc w-b-ba">{{item.desc}}</p>
            <span class="date">{{item.date}}</span>
          </div>
          <div class="right">
            <img class="img transition-05" :src="item.image">
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
  @import './article.scss';

</style>
