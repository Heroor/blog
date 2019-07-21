<script>
import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import store from '@/store'

export default {
  functional: true,
  render (h, context) {
    var bannerInfo = {...store.state.bannerInfo}
    return (
      <div class="header-wrap m-b--20">
        <Nav />
        <Banner {...bannerInfo}/>
      </div>
    )
  }
}
</script>

<style scopde lang="stylus">
.header-wrap
  @media screen and (max-width 640px)
    margin-bottom -20px
</style>
