<script>
import MultiSlider from "@/components/multiSlider/index.vue";

export default {
  name: "SixSection.vue",
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
    ДОПОЛНИТЕЛЬНЫЕ СВЕДЕНИЯ О МЕРОПРИЯТИИИ (ПРОЕКТЕ)
  </div>
  <div class="form">
    <div class="form-input-item">
      <label class="form-input-item-label">
        Актуальность
      </label>
      <input class="form-input-item-input" type="text" placeholder="Актуальность">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label">
        Как Проект повлияет на развитие городской среды, бизнеса
      </label>
      <input class="form-input-item-input" type="text" placeholder="Карта-схема территориальной привязки">
      <label class="form-input-item-label">
        Укажите ссылку, либо прикрепите ваш файл
      </label>
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label">
        Кто будет исполнителем проекта
      </label>
      <input class="form-input-item-input" type="text" placeholder="Кто будет исполнителем проекта">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label">
        Составьте перечень предполагаемых участников проекта
      </label>
      <input class="form-input-item-input" type="text" placeholder="Составьте перечень предполагаемых участников проекта">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label">
        Опишите ожидаемые результаты (качественные и количественные)
      </label>
      <input class="form-input-item-input"  type="text" placeholder="Опишите ожидаемые результаты (качественные и количественные)">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label">
        Что нужно сделать для старта или дальнейшей успешной реализации Проекта
      </label>
      <input class="form-input-item-input"  type="text" placeholder="Что нужно сделать для старта">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label">
        Ожидаемая эффективность для коллективного инвестора (вкладчика)
      </label>
      <input class="form-input-item-input"  type="text" placeholder="Ожидаемая эффективность для коллективного инвестора (вкладчика)">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label">
        Имеющиеся гарантии (обязательства) со стороны Инициатора и исполнителя (мероприятия) проекта для вкладчика
      </label>
      <div >
        <div class="wrapper-checkbox">
          <input class=""  type="checkbox" placeholder="Имеется договор с Рантье">
          <label>Имеется договор с Рантье</label>
        </div>
        <div class="wrapper-checkbox">
          <input class=""  type="checkbox" placeholder="Договор с вкладчиком">
          <label>Договор с вкладчиком</label>
        </div>
        <div class="wrapper-checkbox">
          <input class=""  type="checkbox" placeholder="Иные письменные гарантии">
          <label>Иные письменные гарантии</label>
        </div>
        <div class="wrapper-checkbox">
          <input class=""  type="checkbox" placeholder="Готов договориться">
          <label>Готов договориться</label>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.wrapper-checkbox{
  display: flex;
  max-width: 593px;
}
.title{
  margin-top: 80px;
  color: var(--text-color);
  font-weight: 700;
  font-size: 48px;
}
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
.form{
  margin-top: 60px;
  max-width: 583px;
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