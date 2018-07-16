<script>
import Nav from "@/components/Nav";
import Banner from "@/components/Banner";

export default {
  functional: true,
  render() {
    return (
      <div class="header-wrap" style={{marginBottom: '40px'}}>
        <Nav />
        <Banner />
      </div>
    )
  }
};
</script>
