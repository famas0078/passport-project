
<script>

import MultiSlider from "@/components/multiSlider/index.vue";
import Header from "@/components/header/header.vue";

export default {
  props:{
    ActiveSlide: {
      type: Number,
      required: true
    },
  },
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
  <MultiSlider :ActiveSlide = ActiveSlide />
  <div class="title">
    паспорт мероприятия (проекта) для размещения<br/> на платформе “рантье. развиваем города”
  </div>
  <div class="description">
    Данная форма предназначена для сбора информации о мероприятиях (проектах) по развитию городов для размещения на цифровой платформе "Рантье.Развиваем города"). <br/>
    <br/>
    Форма создана на базе многолетнего опыта экспертной группы Союза российских городов, Агентства социально-экономического развития агломераций и адаптирована под задачи проекта "Рантье.
    Развиваем города" как инструмента содействия развитию коллективных инвестиций в Российской Федерации <br/>
    <br/>
    Пожалуйста, будьте внимательны при заполнении всех пунктов формы. Поля, отмеченные звёздочкой (*), обязательны для заполнения.
    Сохранность данных и их использование по назначению гарантированы в соответствии с федеральным законом №152-ФЗ «О персональных данных».<br/>
    <br/>
    После заполнения, пожалуйста, нажмите кнопку «Отправить». При нажатии кнопки "Отправить" Вы соглашаетесь с требованием вышеназванного закона по предоставлению Ваших персональных данных для использования в рамках работы "Рантье.
    Развиваем города".<br/>
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
.description{
  max-width: 1528px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 24px;
  text-align: left;
  margin-top: 60px;
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