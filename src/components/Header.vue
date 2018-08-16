<script>
import Nav from "@/components/Nav";
import Banner from "@/components/Banner";

export default {
  // functional: true,
  render (h, context) {
    var bannerInfo = Object.assign({}, this.$store.state.bannerInfo)
    console.log(bannerInfo)
    return (
      <div class="header-wrap m-b--20">
        <Nav />
        <Banner bannerInfo={bannerInfo}/>
      </div>
    )
  }
}
</script>
