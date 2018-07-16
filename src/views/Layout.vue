<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  render () {
    return (
      <div class="layout">
        <Header />
        <router-view />
        <Footer />
      </div>
    )
  }
}
</script>

<style scoped lang="stylus">
 .layout
    font-size 14px
</style>
