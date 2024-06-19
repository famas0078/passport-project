<script>
import MultiSlider from "@/components/multiSlider/index.vue";

export default {
  name: "FourSection",
  props:{
    ActiveSlide:{
      type: Number,
      required: true
    }
  },
  components: {MultiSlider}
}
</script>

<template>
<div class="wrapper">
  <MultiSlider :ActiveSlide = ActiveSlide />
  <div class="title">
    общие сведения о мероприятии (проекте)
  </div>
</div>
</template>

<style scoped>
.title{
  margin-top: 80px;
  color: var(--text-color);
  font-weight: 700;
  font-size: 48px;
}
</style>