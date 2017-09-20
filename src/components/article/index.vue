<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <h3>
          <a :href="item.href">{{item.title}}</a>
        </h3>
        <div class="content">
          <div class="left">
            <p class="desc">{{item.desc}}</p>
            <span class="date">{{item.date}}</span>
          </div>
          <div class="right">
            <img class="img" :src="item.img">
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
  ul {
    li {
      display: block;
      margin: 0 auto;
      width: 80%;
      margin-top: 50px;
      h3 {
        text-align: center;
        font-size: 26px;
        margin-bottom: 30px;
      }
      .content {
        .left {
          overflow: hidden;
          height: 100%;
          .desc {
            font-size: 18px;
            text-indent: 2em;
            margin-bottom: 10px;
          }
        }
        .right {
          float: right;
          width: 150px;
          height: 150px;
          .img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
      }
    }
  }

</style>
