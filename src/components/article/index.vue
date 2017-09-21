<template>
    <div>
        <ul>
            <li v-for="(item, index) in list" :key="index">
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
@import 'src/assets/style/_common.scss';
ul {
    padding-bottom: 200px;
    li {
        display: block;
        padding: 40px 30px;
        margin-top: 25px;
        box-shadow: 3px 3px 10px rgba(5,5,5,.2);
        border-radius: 6px;
        h3 {
            padding-right: 180px;
            text-align: center;
            font-size: 26px;
            margin-bottom: 30px;
            word-break: break-word;
        }
        .content {
            @include clearfix();
            .left {
                overflow: hidden;
                padding-right: 20px;
                height: 100%;
                // display: flex;
                // flex-direction: column;
                // justify-content: space-between;
                .desc {
                    font-size: 18px;
                    text-indent: 2em;
                    margin-bottom: 15px;
                    word-break: break-all;
                    line-height: 1.5;
                }
                .date {
                    color: $font-color-tips;
                }
            }
            .right {
                float: right;
                .img {
                    max-width: 180px;
                    max-height: 180px;
                    display: block;
                    border-radius: 6px;
                    border: 1px solid #ddd;
                }
            }
        }
    }
}
</style>
