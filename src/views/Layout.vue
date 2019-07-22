<template>
  <div class="layout">
    <!-- <LoadingBar
      :on-error-done="errorDone"
      :on-progress-done="progressDone"
      :progress="progress"
      :error="error"
    /> -->
    <Header />
    <Container />
    <Footer />
    <GoTop />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import types from '@/store/mutations'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'
import Container from '@/views/MainContainer'
import LoadingBar from 'vue2-loading-bar'
import 'vue2-loading-bar/src/css/loading-bar.css'

export default {
  components: { LoadingBar, Header, Container, Footer, GoTop },
  computed: mapState({
    progress: 'loadingProgress',
    error: 'loadingError'
  }),
  methods: {
    errorDone() {
      // this.$store.commit(types.SET_LOADING_ERROR, true)
    },
    progressDone() {}
  }
}
</script>
<style lang="stylus">
.LoadingBar
  background #52dbff
  box-shadow -3px 0 15px 1px rgba(82, 219, 255, 0.4)
</style>
