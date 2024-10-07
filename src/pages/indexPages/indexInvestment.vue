
<template>
  <div class="d-flex flex-column h-100">
    <Header />

    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/headerInvestment/header.vue";
import Footer from "@/components/footer/footer.vue";

export default {
  name: "indexInvestment",
  components: {
    Footer,
    Header
  },

  data(){
    return{

    }
  },

}
</script>

<style scoped>

</style>