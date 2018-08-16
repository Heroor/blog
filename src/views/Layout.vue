<script>
import { mapState } from 'vuex'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'
import Container from '@/views/MainContainer'

export default {
  render () {
    return (
      <div class="layout">
        <Header />
        <Container />
        <Footer />
        <GoTop />
      </div>
    )
  }
}
</script>

<style scoped lang="stylus">
 .layout
    font-size 14px
</style>
