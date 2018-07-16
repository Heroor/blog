<template>
  <div class="home-wrap">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {Header, Footer}
}
</script>

<style scoped lang="stylus">
 .home-wrap
    font-size 14px
</style>
