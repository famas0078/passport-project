
<script>

import MultiSlider from "@/components/multiSlider/index.vue";
import Header from "@/components/header/header.vue";

export default {
  components:{
    Header,
    MultiSlider
  },
  data(){
    return{

    }
  }
}
</script>

<template>
<div class="wrapper">
  <Header />
  <MultiSlider :isActiveSlide = 1 />
</div>
</template>

<style scoped>

</style>