<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import scrollPage from '@/plugins/scrollPage.js'
  export default {
    name: 'App',
    mounted () {
      scrollPage()
    }
  }

</script>

<style lang="stylus" src="./style/index.styl" />
