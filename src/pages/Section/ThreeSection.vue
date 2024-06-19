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
<!--    <MultiSlider :ActiveSlide = ActiveSlide />-->
    <div class="title">
      Сведения об инициаторе мероприятия (проекта)
    </div>
    <div class="form">
      <div class="form-input-item">
        <label class="form-input-item-label">
          Инициатор мероприятия
        </label>
        <input class="form-input-item-input" type="text" placeholder="Инициатор мероприятия">
      </div>
      <div class="form-input-item">
        <label class="form-input-item-label">
          ОГРН
        </label>
        <input class="form-input-item-input" type="text" placeholder="ОГРН">
      </div>
      <div class="form-input-item">
        <label class="form-input-item-label">
          Телефон инициатора мероприятия
        </label>
        <input class="form-input-item-input" type="tel" placeholder="Телефон инициатора мероприятия">
      </div>
      <div class="form-input-item">
        <label class="form-input-item-label">
          Email инициатора мероприятия
        </label>
        <input class="form-input-item-input" type="text" placeholder="Email инициатора мероприятия">
      </div>
      <div class="form-input-item">
        <label class="form-input-item-label">
          Веб-сайт инициатора мероприятия
        </label>
        <input class="form-input-item-input" type="text" placeholder="Веб-сайт инициатора мероприятия">
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-input-item-label{
  margin-bottom: 5px;
  color: rgba(37, 36, 52, 1);
  font-size: 16px;
  font-weight: 450;
}
.form-input-item-input{
  padding: 10px;
  border-radius: 12px;
  width: 100%;
  border: 1px solid rgba(37, 36, 52, 0.75);
}
.form-input-item{
  margin: 0 auto;
  margin-top: 16px;
  max-width: 593px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
}
.title{
  margin-top: 80px;
  color: var(--text-color);
  font-weight: 700;
  font-size: 48px;
}
.description{
  max-width: 1528px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 24px;
  text-align: left;
  margin-top: 60px;
}
.form{
  margin-top: 60px;
}
</style>