<script>
import MultiSlider from "@/components/multiSlider/index.vue";

export default {
  components: {MultiSlider},
  props:{
    ActiveSlide:{
      type:Number,
      required:true
    }
  },
  name: "ThreeSection"
}
</script>

<template>
  <div class="wrapper">
    <MultiSlider :ActiveSlide = ActiveSlide />
  </div>
</template>

<style scoped>

</style>