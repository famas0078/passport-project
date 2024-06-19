<script>
import MultiSlider from "@/components/multiSlider/index.vue";

export default {
  name: "FiveSection",
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
  <MultiSlider :ActiveSlide = ActiveSlide />
  <div class="title">
    ЦЕЛЕВЫЕ ПОКАЗАТЕЛИ МЕРОПРИЯТИЯ (ПРОЕКТА)
  </div>
  <div class="form">

    <div class="form-input-item">
      <label class="form-input-item-label">
        Число создаваемых рабочих мест на период строительства, ед.
      </label>
      <input class="form-input-item-input" type="text" placeholder="ед.">
    </div>

    <div class="form-input-item">
      <label class="form-input-item-label">
        Число создаваемых рабочих мест при выходе на проектную мощность
      </label>
      <input class="form-input-item-input" type="text" placeholder="ед.">
    </div>

    <div class="form-input-item">
      <label class="form-input-item-label">
        Средняя номинально начисленная заработная плата работников
      </label>
      <input class="form-input-item-input" type="text" placeholder="тыс. руб.">
    </div>

    <div class="form-input-item">
      <label class="form-input-item-label">
        Объем налоговых платежей при выходе на проектную мощность
      </label>
      <input class="form-input-item-input" type="text" placeholder="млн руб.">
    </div>

    <div class="form-input-item">
      <label class="form-input-item-label">
        Объем первоначальных инвестиций в основной капитал
      </label>
      <input class="form-input-item-input" type="text" placeholder="млн руб.">
    </div>

    <div class="form-input-item">
      <label class="form-input-item-label left">
        Объем производства в натуральных показателях при выходе <br/>
        на проектную мощность
      </label>
      <input class="form-input-item-input" type="text" placeholder="ед.">
    </div>

    <div class="form-input-item">
      <label class="form-input-item-label">
        Выручка при выходе на проектную мощность
      </label>
      <input class="form-input-item-input" type="text" placeholder="млн руб.">
    </div>

    <div class="form-input-item">
      <label class="form-input-item-label">
        Ожидаемая эффективность для коллективного инвестора (вкладчика)
      </label>
      <input class="form-input-item-input" type="text" placeholder="Ожидаемая эффективность для коллективного инвестора (вкладчика)">
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