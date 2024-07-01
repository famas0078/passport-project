<script>
export default {
  name: "headerAdmin",
  props: {
    status: {
      type: []
    }
  }
}
</script>

<template>
<div class="wrapper">
  <div class="row">
    <div class="select d-flex col-8 col-md-3 col-lg-2 d-flex justify-content-center align-items-center my-3">
      <select class="form-select admin-sort d-flex justify-content-center align-items-center cursor-pointer h-100">
        <option selected>Статус заявки</option>
        <option value="0">Все</option>
        <option v-for=" (item, index) in status" :key="index" :value="index + 1">{{ item.name }}</option>
      </select>
    </div>
    <div class="input-search col-9 col-md-7 col-lg-8 my-3">
      <input type="text" class="input-search-item" placeholder="Поиск по названию проекта">
    </div>
    <div class="col-3 col-md-2 col-lg-2 d-flex justify-content-center align-items-center my-3">
      <button class="btn btn-search h-100 w-100">
        Найти
      </button>
    </div>
  </div>
</div>
</template>