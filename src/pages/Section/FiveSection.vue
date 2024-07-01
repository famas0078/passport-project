<script>
import MultiSlider from "@/components/multiSlider/index.vue";

export default {
  name: "FiveSection",
  props:{
    ActiveSlide:{
      type: Number,
      required: true
    },
    form:{
      type: Object,
      required: true
    },
  },
  components: {MultiSlider}
}
</script>

<template>
  <div v-show="ActiveSlide === 5">
    <MultiSlider :ActiveSlide = ActiveSlide />
    <div class="title">
      ЦЕЛЕВЫЕ ПОКАЗАТЕЛИ МЕРОПРИЯТИЯ (ПРОЕКТА)
    </div>
    <div class="form">

      <div class="form-input-item">
        <label class="form-input-item-label text-left">
          Число создаваемых рабочих мест на период строительства, ед.
        </label>
        <input class="form-input-item-input" type="text" placeholder="ед." :value="form.countOfNewJobs" @input="$emit('update:form', { ...form, countOfNewJobs: parseInt($event.target.value) })" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
      </div>

      <div class="form-input-item">
        <label class="form-input-item-label text-left">
          Число создаваемых рабочих мест при выходе на проектную мощность
        </label>
        <input class="form-input-item-input" type="text" placeholder="ед." :value="form.countOfNewJobsAfterWentOnProductionCapacity" @input="$emit('update:form', { ...form, countOfNewJobsAfterWentOnProductionCapacity: parseInt($event.target.value) })" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
      </div>

      <div class="form-input-item">
        <label class="form-input-item-label text-left">
          Средняя номинально начисленная заработная плата работников
        </label>
        <input class="form-input-item-input" type="text" placeholder="тыс. руб." :value="form.avarageSalary" @input="$emit('update:form', { ...form, avarageSalary: parseInt($event.target.value) })" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
      </div>

      <div class="form-input-item">
        <label class="form-input-item-label text-left">
          Объем налоговых платежей при выходе на проектную мощность
        </label>
        <input class="form-input-item-input" type="text" placeholder="млн руб." :value="form.averageTaxAfterWentOnProductionCapacity" @input="$emit('update:form', { ...form, averageTaxAfterWentOnProductionCapacity: parseInt($event.target.value) })" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
      </div>

      <div class="form-input-item">
        <label class="form-input-item-label text-left">
          Объем первоначальных инвестиций в основной капитал ------
        </label>
        <input class="form-input-item-input" type="text" placeholder="млн руб. отсутствует" :value="form.amountOfOutputAfterWentOnProductionCapacity" @input="$emit('update:form', { ...form, amountOfOutputAfterWentOnProductionCapacity: parseInt($event.target.value) })" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
      </div>

      <div class="form-input-item">
        <label class="form-input-item-label  text-left">
          Объем производства в натуральных показателях при выходе <br/>
          на проектную мощность
        </label>
        <input class="form-input-item-input" type="text" placeholder="ед." :value="form.amountOfOutputAfterWentOnProductionCapacity" @input="$emit('update:form', { ...form, amountOfOutputAfterWentOnProductionCapacity: parseInt($event.target.value) })" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
      </div>

      <div class="form-input-item">
        <label class="form-input-item-label text-left">
          Выручка при выходе на проектную мощность
        </label>
        <input class="form-input-item-input" type="text" placeholder="млн руб." :value="form.revenueOutputAfterWentOnProductionCapacity" @input="$emit('update:form', { ...form, revenueOutputAfterWentOnProductionCapacity: parseInt($event.target.value) })" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
      </div>

      <div class="form-input-item">
        <label class="form-input-item-label text-left">
          Ожидаемая эффективность для коллективного инвестора (вкладчика)
        </label>
        <input class="form-input-item-input" type="text" placeholder="Ожидаемая эффективность для коллективного инвестора (вкладчика)" :value="form.expectedEffectivenessAfterWentOnProductionCapacity" @input="$emit('update:form', { ...form, expectedEffectivenessAfterWentOnProductionCapacity: $event.target.value })">
      </div>

    </div>
  </div>
</template>

<style scoped>
.left{
  display: flex;
  justify-content: left;
  align-items: flex-start;
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
  width: 100%;
  border: 1px solid rgba(37, 36, 52, 0.75);
}
.form-input-item{
  margin-right: 20px;
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