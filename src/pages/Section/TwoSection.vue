<script>
import MultiSlider from "@/components/multiSlider/index.vue";

export default {
  components: {MultiSlider},
  props:{
    ActiveSlide: {
      type: Number,
      required: true
    }
  },
  name: "TwoSection"
}
</script>

<template>
<div class="wrapper">
  <MultiSlider :ActiveSlide = ActiveSlide />
  <div class="title">
    паспорт мероприятия (проекта) для размещения<br/> на платформе “рантье. развиваем города”
  </div>
  <div class="description">
    Сведения о лице, заполняющем настоящую форму, с обязательным указанием контактных данных для связи в случае<br/>
    появления вопросов у экспертов "Рантье.РГ" или необходимости получения дополнительных пояснений
  </div>
  <div class="form">
    <div class="form-input-item">
      <label class="form-input-item-label">
        Имя
      </label>
      <input class="form-input-item-input" type="text" placeholder="Имя">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label">
        Отчество
      </label>
      <input class="form-input-item-input" type="text" placeholder="Отчество">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label">
        Фамилия
      </label>
      <input class="form-input-item-input" type="text" placeholder="Фамилия">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label">
        Телефон
      </label>
      <input class="form-input-item-input" type="tel" placeholder="Телефон">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label">
        Электронная почта
      </label>
      <input class="form-input-item-input"  type="email" placeholder="Электронная почта">
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
  width: 593px;
  border: 1px solid rgba(37, 36, 52, 0.75);
}
@media (max-width: 593px) {
  .form-input-item-input {
    width: 100%;
  }
}

.form-input-item{
  margin-top: 16px;
  max-width: 593px;
  margin-right: 20px;
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
  .description{
    font-size: 20px;
  }
}
@media screen and (max-width: 760px) {
  .title{
    font-size: 20px;
  }
  .description{
    font-size: 15px;
  }
}
</style>