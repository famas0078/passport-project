<template>
  <div class="d-flex flex-column h-100">
    <Header />
    <div class="flex-grow-1 my-5">
      <router-view>

      </router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>

// import components

import Header from "@/components/header/header.vue"
import Footer from "@/components/footer/footer.vue";


export default {
  name: "index",
  components: {
    Header,
    Footer,
  },

  data(){
    return{

    }
  }
}

</script>



