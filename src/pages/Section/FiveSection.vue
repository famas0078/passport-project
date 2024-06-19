<script>
import MultiSlider from "@/components/multiSlider/index.vue";

export default {
  name: "FiveSection",
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
  <MultiSlider :ActiveSlide = ActiveSlide />
  <div class="title">
    ЦЕЛЕВЫЕ ПОКАЗАТЕЛИ МЕРОПРИЯТИЯ (ПРОЕКТА)
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