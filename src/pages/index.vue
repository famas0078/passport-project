<script>
import Header from "@/components/header/header.vue"
import OneSection from "@/pages/Section/OneSection.vue";
import Footer from "@/components/footer/footer.vue";
export default {
  components: {
    Footer,
    OneSection
  },
  name: "index"
}
</script>

<template>
  <Header />
  <OneSection />
  <div class="index-btn d-flex">
    <div class="btn-last btn-item">
      <img src="../assets/img/Vector.svg" alt="">
      К прошлому разделу
    </div>
    <div class="btn-prev btn-item">
      Продолжить
      <img src="../assets/img/Caret_Circle_Left.svg" alt="">
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
.btn-item{
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
.btn-prev{
  border-radius: 8px;
  color: white;
  background-color: var(--bg-color-green-btn);
}
</style>