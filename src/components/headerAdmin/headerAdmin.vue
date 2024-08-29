<template>
  <div class="wrapper">
    <div class="row">
      <div class="select d-flex col-7 col-md-3 col-lg-2 d-flex justify-content-center align-items-center my-3">
        <select v-model="selectedStatusId" @change="$emit('update:statusId', selectedStatusId)" class="form-select admin-sort d-flex justify-content-center align-items-center cursor-pointer h-100">
          <option value="" disabled>Статус заявки</option>
          <option :value="0" selected>Все</option>
          <option v-for="(item, index) in status" :key="index" :value="index + 1">{{ item.name }}</option>
        </select>
      </div>
      <div class="col-5 col-md-2 col-lg-2 d-flex justify-content-center align-items-center my-3">
        <button v-if="!typeFormShort" class="btn btn-search h-100 w-100" @click="changeTypeForm">
          Упр. форма
        </button>
        <button v-else class="btn btn-search h-100 w-100" @click="changeTypeForm">
          Полная форма
        </button>
      </div>
      <div class="input-search col-7 col-md-5 col-lg-6 my-3">
        <input type="text" class="input-search-item" placeholder="Поиск по названию проекта" :value="search" @input="$emit('update:search', $event.target.value)">
      </div>
      <div class="col-5 col-md-2 col-lg-2 d-flex justify-content-center align-items-center my-3">
        <button class="btn btn-search h-100 w-100" @click="getSearch">
          Найти
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerAdmin",
  props: {
    status: {
      type: Array,
      required: true
    },
    search: {
      type: String,
      required: true
    },
    getSearch: {
      type: Function,
      required: true
    },
    statusId: {
      type: Number,
      default: 0
    },
    changeTypeForm: {
      type: Function,
      required: true
    },
    typeFormShort: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      selectedStatusId: this.statusId !== undefined ? this.statusId : ""
    }
  },
  watch: {
    statusId(newValue) {
      localStorage.setItem('statusId', newValue)
      this.getSearch()
      this.selectedStatusId = newValue !== undefined ? newValue : "";
    }
  }
}
</script>
