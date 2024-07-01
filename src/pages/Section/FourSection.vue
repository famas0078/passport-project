<template>
<div class="wrapper">
  <MultiSlider :ActiveSlide = ActiveSlide />
  <div class="title">
    ОБЩИЕ СВЕДЕНИЯ О МЕРОПРИЯТИИ (ПРОЕКТЕ)
  </div>
  <div class="wrapper-general-information">
    <div class="card-w wrapper-type-event">
      <div class="type-event-title text-left">
        <p>
          Тип мероприятия
        </p>
      </div>
      <ul>
        <li v-for="(item, index) in typeEvent" :key="index">
          <input
              :id="'radio-event' + index"
              type="radio"
              name="radio"
              :value="item.id"
              v-model="form.crowdfundingTypeId"
              @change="$emit('update:form', { ...form, crowdfundingTypeId: parseInt($event.target.value) })">
          <label class="position-relative d-flex align-items-center" :for="'radio-event' + index">
            {{ item.name }}
          </label>
        </li>
      </ul>
      <div class="form-input-item">
        <input class="form-input-item-input" type="text" placeholder="Напишите другие типы мероприятий">
      </div>
    </div>
    <div class="card-w wrapper-code">
      <div class="type-event-title text-left">
        <p>
          Код ОКВЭД
        </p>
      </div>
      <ul>
        <li v-for="(item, index) in codeOKVED" :key="index">
          <input :id="'code' + index" type="radio" name="code" :value="item.id" v-model="form.crowdfundingCodeOVKEDId" @change="$emit('update:form', { ...form, crowdfundingCodeOVKEDId: parseInt($event.target.value) })">
          <label class="position-relative d-flex align-items-center" :for="'code' + index">
            {{ item.name }}
          </label>
        </li>
      </ul>
    </div>
    <div class="card-w wrapper-input-with-additional-info">
      <div class="form-input-item" v-for="(item, index) in inputEvent" :key="index">
        <label class="form-input-item-label text-left">
          {{ item.text }}
          <span v-if="item.necessarily" class="text-danger">
            *
          </span>
        </label>
        <input class="form-input-item-input" :type="item.datetime ? 'datetime-local' : 'text'" :value="form[item.input]" @input="$emit('update:form', { ...form, [item.input]: $event.target.value })">
      </div>
    </div>
    <div class="card-w wrapper-status-event">
      <div class="type-event-title text-left">
        <p>
          Статус реализации мероприятия
          <span class="text-danger">
            *
          </span>
        </p>
      </div>
      <ul>
        <li v-for="(item, index) in status" :key="index">
          <input :id="'status' + index" type="radio" name="code" :value="item.id" v-model="form.crowdfundingDevelopmentStatusId" @change="$emit('update:form', { ...form, crowdfundingDevelopmentStatusId: parseInt($event.target.value) })">
          <label class="position-relative d-flex align-items-center" :for="'status' + index">
            {{ item.name }}
          </label>
        </li>
      </ul>
    </div>
    <div class="card-w wrapper-source-event">
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
          <input :id="'source' + index" type="radio" name="source" :value="item.id" v-model="form.crowdfundingAndFinancingSourseRelationsIds[0]" @change="$emit('update:form', { ...form, [form.crowdfundingAndFinancingSourseRelationsIds[0]]: $event.target.value })">
          <label class="position-relative d-flex align-items-center" :for="'source' + index">
            {{ item.name }}
          </label>
        </li>
      </ul>
    </div>
    <div class="card-w wrapper-more">
      <div class="form-input-item">
        <label class="form-input-item-label text-left">
          Общая стоимость реализации мероприятия с НДС, млн руб.
          <span class="text-danger">
            *
          </span>
        </label>
        <input class="form-input-item-input" type="number" placeholder="млн руб." :value="form.cost" @input="$emit('update:form', { ...form, cost: parseInt($event.target.value) })" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
      </div>
      <ul>
        <li v-for="(item, index) in needs" :key="index">
          <input :id="'needs' + index" type="radio" name="needs" :value="item.id" v-model="form.crowdfundingRequirementToConstructingId" @change="$emit('update:form', { ...form, crowdfundingRequirementToConstructingId: parseInt($event.target.value) })">
          <label class="position-relative d-flex align-items-center" :for="'needs' + index">
            {{ item.name }}
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
      <input class="form-input-item-input" type="text" placeholder="Потребность в земельных ресурсах и(или) муниципальном имуществе" :value="form.requirementsOfLand" @input="$emit('update:form', { ...form, requirementsOfLand: $event.target.value })">
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

    }
  },
  props:{
    ActiveSlide:{
      type: Number,
      required: true
    },
    typeEvent: {
      type: [],
      default: true,
    },
    inputEvent: {
      type: [],
      default: true,
    },
    status: {
      type: [],
      default: true,
    },
    source: {
      type: [],
      default: true,
    },
    needs: {
      type: [],
      default: true,
    },
    codeOKVED: {
      type: [],
      default: true,
    },
    form:{
      type: Object,
      required: true
    },
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