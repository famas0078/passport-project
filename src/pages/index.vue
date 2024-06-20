<template>
  <Header />
  <OneSection v-if="ActiveSlide === 1" :ActiveSlide="ActiveSlide" />
  <TwoSection v-if="ActiveSlide === 2" :ActiveSlide="ActiveSlide" />
  <ThreeSection v-if="ActiveSlide === 3" :ActiveSlide="ActiveSlide" />
  <FourSection v-if="ActiveSlide === 4" :ActiveSlide="ActiveSlide" />
  <FiveSection v-if="ActiveSlide === 5" :ActiveSlide="ActiveSlide" />
  <SixSection v-if="ActiveSlide === 6" :ActiveSlide="ActiveSlide" />
  <div class="index-btn d-flex">
    <div class="btn-last btn-item" @click="lastSlider()">
      <img src="../assets/img/Vector.svg" alt="">
      К прошлому разделу
    </div>
    <div class="btn-next btn-item" @click="nextSlider()">
      Продолжить
      <img src="../assets/img/Caret_Circle_Left.svg" alt="">
    </div>
  </div>
  <Footer/>
</template>

<script>
import Header from "@/components/header/header.vue"
import OneSection from "@/pages/Section/OneSection.vue";
import Footer from "@/components/footer/footer.vue";
import TwoSection from "@/pages/Section/TwoSection.vue";
import ThreeSection from "@/pages/Section/ThreeSection.vue";
import FourSection from "@/pages/Section/FourSection.vue";
import FiveSection from "@/pages/Section/FiveSection.vue";
import SixSection from "@/pages/Section/SixSection.vue";
export default {
  components: {
    ThreeSection,
    Header,
    TwoSection,
    Footer,
    OneSection,
    FourSection,
    FiveSection,
    SixSection
  },
  data(){
    return{
      ActiveSlide: parseInt(localStorage.getItem('activeSlide') || 1)
    }
  },
  watch:{
    ActiveSlide(newValue){
      localStorage.setItem('activeSlide', newValue)
    }
  },
  methods:{
    lastSlider(){
      if (this.ActiveSlide > 1){
        this.ActiveSlide = this.ActiveSlide - 1
      }
    },
    nextSlider(){
      if (this.ActiveSlide < 6){
        this.ActiveSlide = this.ActiveSlide + 1
      }
    }
  },
  name: "index"
}

</script>

<style scoped>
.btn-item{
  cursor: pointer;
  gap: 15px;
  display: flex;
  padding: 16px 24px;
  align-items: center;
}
.index-btn{
  margin-top: 36px;
  gap: 16px;
  justify-content: center;
}
.btn-last{
  border-radius: 8px;
  color: var(--text-color);
  background-color: var(--bg-color-light-green-btn);
}
.btn-next{
  border-radius: 8px;
  color: white;
  background-color: var(--bg-color-green-btn);
}
@media screen and (max-width: 1200px) {
  .btn-item{
    padding: 12px 20px;

  }
}
@media screen and (max-width: 760px) {
  .btn-item{
    padding: 8px 16px;

  }
}
@media screen and (max-width: 425px) {
  .btn-item{
    padding: 4px 12px;

  }
}
</style>


