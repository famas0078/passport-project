<template>
<div class="wrapper">
  <MultiSlider :ActiveSlide = ActiveSlide />
  <div class="title">
    ОБЩИЕ СВЕДЕНИЯ О МЕРОПРИЯТИИ (ПРОЕКТЕ)
  </div>
  <div class="wrapper-general-information">
    <div class="card wrapper-type-event">
      <div class="type-event-title text-left">
        <p>
          Тип мероприятия
        </p>
      </div>
      <ul>
        <li v-for="(item, index) in typeEvent" key="index">
          <input :id="'r' + index" type="radio" name="radio" value="1">
          <label class="position-relative d-flex align-items-center" :for="'r' + index">
            {{ item.text }}
          </label>
        </li>
      </ul>
      <div class="form-input-item">
        <input class="form-input-item-input" type="text" placeholder="Напишите другие типы мероприятий">
      </div>
    </div>
    <div class="card wrapper-code">
      <div class="type-event-title text-left">
        <p>
          Код ОКВЭД
        </p>
      </div>
      <ul>
        <li v-for="(item, index) in codeOKVED" key="index">
          <input :id="'r' + index" type="radio" name="radio" value="1">
          <label class="position-relative d-flex align-items-center" :for="'r' + index">
            {{ item.text }}
          </label>
        </li>
      </ul>
      <div class="form-input-item">
        <input class="form-input-item-input" type="text" placeholder="Напишите другие типы мероприятий">
      </div>
    </div>
    <div class="card wrapper-input-with-additional-info"></div>
    <div class="card wrapper-status-event"></div>
  </div>
</div>
</template>
<script>
import MultiSlider from "@/components/multiSlider/index.vue";

export default {
  name: "FourSection",
  data(){
    return {
        typeEvent: [
          {
            text: 'Промышленное (крупное или среднее) предприятие'
          },
          {
            text: 'Жилищное строительство'
          },
          {
            text: 'Благоустройство'
          },
          {
            text: 'Малое предпринимательство'
          },
          {
            text: 'Объект социальной инфраструктуры'
          },
          {
            text: 'Объект инженерной инфраструктуры'
          },
          {
            text: 'Объект транспортной инфраструктуры'
          },
          {
            text: 'Объект (элемент) инновационной инфраструктуры (бизнес-инкубаторы, технопарки и др.)'
          },
          {
            text: 'Организационное мероприятие'
          },
          {
            text: 'НИР / НИОКР'
          },
          {
            text: 'Нормативно-правовой акт'
          },
          {
            text: 'Другое (указать)'
          },
        ],
        codeOKVED: [
          {
            text: 'Раздел A Сельское, лесное хозяйство, охота, рыболовство и рыбоводство'
          },
          {
            text: 'Раздел B Добыча полезных ископаемых'
          },
          {
            text: 'Раздел C Обрабатывающие производства'
          },
          {
            text: 'Раздел D Обеспечение электрической энергией, газом и паром; кондиционирование воздуха'
          },
          {
            text: 'Раздел E Водоснабжение; водоотведение, организация сбора и утилизации отходов, деятельность по ликвидации загрязнений'
          },
          {
            text: 'Раздел F Строительство'
          },
          {
            text: 'Раздел G Торговля оптовая и розничная; ремонт автотранспортных средств и мотоциклов'
          },
          {
            text: 'Раздел H Транспортировка и хранение'
          },
          {
            text: 'Раздел I Деятельность гостиниц и предприятий общественного питания'
          },
          {
            text: 'Раздел J Деятельность в области информации и связи'
          },
          {
            text: 'Раздел K Деятельность финансовая и страховая'
          },
          {
            text: 'Раздел L Деятельность по операциям с недвижимым имуществом'
          },
          {
            text: 'Раздел M Деятельность профессиональная, научная и техническая'
          },
          {
            text: 'Раздел N Деятельность административная и сопутствующие дополнительные услуги'
          },
          {
            text: 'Раздел O Государственное управление и обеспечение военной безопасности; социальное обеспечение'
          },
          {
            text: 'Раздел P Образование'
          },
          {
            text: 'Раздел Q Деятельность в области здравоохранения и социальных услуг'
          },
          {
            text: 'Раздел R Деятельность в области культуры, спорта, организации досуга и развлечений'
          },
          {
            text: 'Раздел S Предоставление прочих видов услуг'
          },
          {
            text: 'Раздел T Деятельность домашних хозяйств как работодателей'
          },
          {
            text: 'Раздел U Деятельность экстерриториальных организаций и органов'
          }
        ]
    }
  },
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
.wrapper-general-information{
  width: 100%;
  max-width: 700px;
  margin: 50px auto;
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