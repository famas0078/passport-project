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
          <input :id="'radio-event' + index" type="radio" name="radio" value="1">
          <label class="position-relative d-flex align-items-center" :for="'radio-event' + index">
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
        <li v-for="(item, index) in codeOKVED" :key="index">
          <input :id="'code' + index" type="radio" name="code" value="1">
          <label class="position-relative d-flex align-items-center" :for="'code' + index">
            {{ item.text }}
          </label>
        </li>
      </ul>
    </div>
    <div class="card wrapper-input-with-additional-info">
      <div class="form-input-item">
        <label class="form-input-item-label text-left">
          Наименование мероприятия
          <span class="text-danger">
            *
          </span>
        </label>
        <input class="form-input-item-input" type="text" placeholder="Наименование мероприятия">
      </div>
      <div class="form-input-item" v-for="(item, index) in inputEvent" :key="index">
        <label class="form-input-item-label text-left">
          {{ item.text }}
          <span v-if="item.necessarily" class="text-danger">
            *
          </span>
        </label>
        <input class="form-input-item-input" type="text" :placeholder="item.text">
      </div>
    </div>
    <div class="card wrapper-status-event">
      <div class="type-event-title text-left">
        <p>
          Статус реализации мероприятия*
          <span class="text-danger">
            *
          </span>
        </p>
      </div>
      <ul>
        <li v-for="(item, index) in status" :key="index">
          <input :id="'status' + index" type="radio" name="code" value="1">
          <label class="position-relative d-flex align-items-center" :for="'status' + index">
            {{ item.text }}
          </label>
        </li>
      </ul>
    </div>
    <div class="card wrapper-source-event">
      <div class="type-event-title text-left">
        <p>
          Источники финансирования мероприятия
          <span class="text-danger">
            *
          </span>
        </p>
      </div>
      <ul>
        <li v-for="(item, index) in source" :key="index">
          <input :id="'source' + index" type="radio" name="source" value="1">
          <label class="position-relative d-flex align-items-center" :for="'source' + index">
            {{ item.text }}
          </label>
        </li>
      </ul>
    </div>
    <div class="card wrapper-more">
      <div class="form-input-item">
        <label class="form-input-item-label text-left">
          Общая стоимость реализации мероприятия с НДС, млн руб.*
          <span class="text-danger">
            *
          </span>
        </label>
        <input class="form-input-item-input" type="text" placeholder="млн руб.">
      </div>
      <ul>
        <li v-for="(item, index) in needs" :key="index">
          <input :id="'needs' + index" type="radio" name="needs" value="1">
          <label class="position-relative d-flex align-items-center" :for="'needs' + index">
            {{ item.text }}
          </label>
        </li>
      </ul>
      <input class="form-input-item-input" type="text" placeholder="Напишите другие потребности">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label text-left">
        Потребность в земельных ресурсах и(или) муниципальном имуществе
        <span class="text-danger">
            *
          </span>
      </label>
      <input class="form-input-item-input" type="text" placeholder="Потребность в земельных ресурсах и(или) муниципальном имуществе">
    </div>
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
        ],
        inputEvent: [
          {
            text: 'Наименование мероприятия',
            necessarily: true,
          },
          {
            text: 'Цель мероприятия',
            necessarily: true,
          },
          {
            text: 'Задачи мероприятия',
            necessarily: false,
          },
          {
            text: 'Город (регион) реализации проекта',
            necessarily: false,
          },
          {
            text: 'Дата начала реализации мероприятия',
            necessarily: true,
          },
          {
            text: 'Дата начала реализации мероприятияДата выхода на проектную мощность',
            necessarily: false,
          },
          {
            text: 'Дата окончания реализации мероприятия',
            necessarily: true,
          },
        ],
        status: [
          {
            text: 'Бизнес-идея'
          },
          {
            text: 'Разработка ТЭО'
          },
          {
            text: 'Разработка ПСД'
          },
          {
            text: 'Строительство'
          },
          {
            text: 'Эксплуатация'
          },
        ],
        source: [
          {
            text: 'Федеральный бюджет'
          },
          {
            text: 'Региональный бюджет'
          },
          {
            text: 'Муниципальный бюджет'
          },
          {
            text: 'Заёмные средства'
          },
          {
            text: 'Собственные средства'
          },
          {
            text: 'Коллективное финансирование'
          },
        ],
        needs: [
          {
            text: 'Электроснабжение'
          },
          {
            text: 'Теплоснабжение'
          },
          {
            text: 'Газоснабжение'
          },
          {
            text: 'Водоснабжение и водоотведение'
          },
          {
            text: 'Подъездная автомобильная дорога'
          },
          {
            text: 'Подъездные ж/д пути'
          },
          {
            text: 'Другое (указать)'
          },
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

<style scoped>
.title{
  margin-top: 80px;
  color: var(--text-color);
  font-weight: 700;
  font-size: 48px;
}
.wrapper-general-information{
  width: 100%;
  max-width: 593px;
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