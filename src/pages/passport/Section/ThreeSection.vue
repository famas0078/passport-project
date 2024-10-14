<script>
import MultiSlider from "@/components/passport/multiSlider/index.vue";

export default {
  components: {MultiSlider},
  props:{
    ActiveSlide:{
      type:Number,
      required:true
    },
    form:{
      type: Object,
      required: true
    },
  },
  name: "ThreeSection"
}
</script>

<template>
  <div class="wrapper">
    <MultiSlider :ActiveSlide = ActiveSlide />
    <div class="title">
      СВЕДЕНИЯ ОБ ИНИЦИАТОРЕ ПРОЕКТА
    </div>
    <div class="form">
      <div class="form-input-item">
        <label class="form-input-item-label">
          Инициатор мероприятия
        </label>
        <input class="form-input-item-input" type="text" placeholder="Инициатор мероприятия" :value="form.initiator" @input="$emit('update:form', { ...form, initiator: $event.target.value })">
      </div>
      <div class="form-input-item">
        <label class="form-input-item-label">
          ОГРН
        </label>
        <input class="form-input-item-input" type="text" placeholder="ОГРН" :value="form.OGRN" @input="$emit('update:form', { ...form, OGRN: $event.target.value })">
      </div>
      <div class="form-input-item">
        <label class="form-input-item-label">
          Телефон инициатора мероприятия
        </label>
        <input class="form-input-item-input" type="tel" placeholder="Телефон инициатора мероприятия" :value="form.initiatorPhone" @input="$emit('update:form', { ...form, initiatorPhone: $event.target.value })">
      </div>
      <div class="form-input-item">
        <label class="form-input-item-label">
          Email инициатора мероприятия
        </label>
        <input class="form-input-item-input" type="text" placeholder="Email инициатора мероприятия" :value="form.initiatorEmail" @input="$emit('update:form', { ...form, initiatorEmail: $event.target.value })">
      </div>
      <div class="form-input-item">
        <label class="form-input-item-label">
          Веб-сайт инициатора мероприятия
        </label>
        <input class="form-input-item-input" type="text" placeholder="Веб-сайт инициатора мероприятия" :value="form.initiatorSite" @input="$emit('update:form', { ...form, initiatorSite: $event.target.value })">
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
  margin-top: 16px;
  margin-right: 20px;
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
  max-width: 593px;
  margin: 0 auto;
}
@media screen and (max-width: 1200px) {
  .title{
    font-size: 30px;

  }
}
@media screen and (max-width: 760px) {
  .title{
    font-size: 20px;
  }
}
</style>