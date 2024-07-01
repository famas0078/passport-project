<script>
import MultiSlider from "@/components/multiSlider/index.vue";

export default {
  name: "SixSection.vue",
  props:{
    ActiveSlide:{
      type: Number,
      required: true
    },
    form:{
      type: Object,
      required: true
    },
    handleFileChange:{
      type: Function,
      required: true
    }
  },
  data() {
    return {
      status: [
        {
          text: 'Имеется договор с Рантье'
        },
        {
          text: 'Договор с вкладчиком'
        },
        {
          text: 'Иные письменные гарантии'
        },
        {
          text: 'Готов договориться'
        },
      ],
      fileNameMap: '',
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
      <label class="form-input-item-label text-left">
        Актуальность
      </label>
      <input class="form-input-item-input" type="text" placeholder="Актуальность" :value="form.relevance" @input="$emit('update:form', { ...form, relevance: $event.target.value })">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label text-left">
        Как Проект повлияет на развитие городской среды, бизнеса
      </label>
      <input class="form-input-item-input" type="text" placeholder="Карта-схема территориальной привязки" :value="form.HowWillProjectAffectCity" @input="$emit('update:form', { ...form, HowWillProjectAffectCity: $event.target.value })">
    </div>
    <div class="form-input-item file w-100">
      <label class="form-input-item-label text-left">
        Карта-схема территориальной привязки
      </label>
      <label class="input-file d-flex justify-content-between w-100 cursor-pointer" for="input-file">
        <p class="input-file-text">
          {{ fileNameMap ? fileNameMap : 'Карта-схема территориальной привязки' }}
        </p>
        <img class="input-file-image" src="@/assets/img/peperClip.svg">
      </label>
      <input class="form-input-item-input-file h-100" id='input-file' type="file" @change="handleFileChange">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label text-left">
        Кто будет исполнителем проекта
      </label>
      <input class="form-input-item-input" type="text" placeholder="Кто будет исполнителем проекта" :value="form.projectExecutor" @input="$emit('update:form', { ...form, projectExecutor: $event.target.value })">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label text-left">
        Составьте перечень предполагаемых участников проекта
      </label>
      <input class="form-input-item-input" type="text" placeholder="Составьте перечень предполагаемых участников проекта" :value="form.membersOfProject" @input="$emit('update:form', { ...form, membersOfProject: $event.target.value })">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label text-left">
        Опишите ожидаемые результаты (качественные и количественные)
      </label>
      <input class="form-input-item-input"  type="text" placeholder="Опишите ожидаемые результаты (качественные и количественные)" :value="form.expectedResults" @input="$emit('update:form', { ...form, expectedResults: $event.target.value })">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label text-left">
        Что нужно сделать для старта или дальнейшей успешной реализации Проекта
      </label>
      <input class="form-input-item-input"  type="text" placeholder="Что нужно сделать для старта" :value="form.whatNeedToDoForStartProject" @input="$emit('update:form', { ...form, whatNeedToDoForStartProject: $event.target.value })">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label text-left">
        Ожидаемая эффективность для коллективного инвестора (вкладчика)
      </label>
      <input class="form-input-item-input"  type="text" placeholder="Ожидаемая эффективность для коллективного инвестора (вкладчика)" :value="form.expectedEffectivenessForInvestor" @input="$emit('update:form', { ...form, expectedEffectivenessForInvestor: $event.target.value })">
    </div>
    <div class="form-input-item">
      <label class="form-input-item-label text-left">
        Имеющиеся гарантии (обязательства) со стороны Инициатора и исполнителя (мероприятия) проекта для вкладчика
      </label>
      <div >
        <ul>
          <li v-for="(item, index) in status" :key="index">
            <input :id="'status' + index" type="checkbox" name="code" value="1">
            <label class="position-relative d-flex align-items-center cursor-pointer" :for="'status' + index">
              {{ item.text }}
            </label>
          </li>
        </ul>
      </div>
    </div>
    <div class="form-input-item file w-100">
      <label class="form-input-item-label text-left">
        Презентация проекта
      </label>
      <label class="input-file d-flex justify-content-between w-100 cursor-pointer" for="input-file">
        <p class="input-file-text">
          Презентация проекта
        </p>
        <img class="input-file-image" src="@/assets/img/peperClip.svg">
      </label>
      <input class="form-input-item-input-file h-100" id='input-file' type="file">
    </div>
  </div>
</div>
</template>

<style scoped>

.title{
  color: var(--text-color);
  font-weight: 700;
  font-size: 48px;
  max-width: 1400px;
  width: 100%;
  margin: 80px auto;
}
.form-input-item-label{
  margin-bottom: 5px;
  color: rgba(37, 36, 52, 1);
  font-size: 16px;
  font-weight: 450;
}
.form-input-item-input-file{
  margin-bottom: 5px;
  color: rgba(37, 36, 52, 1);
  font-size: 16px;
  font-weight: 450;
  width: 100%;
  padding: 10px 5px;
  border-radius: 12px;
  border: 1px solid rgba(37, 36, 52, 0.75);
}
.form-input-item-input{
  padding: 10px 10px;
  border-radius: 12px;
  width: 100%;
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