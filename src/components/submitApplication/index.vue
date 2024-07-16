<script>
export default {
  name: "SubmitApplication"
}
</script>
<template>
  <div class="wrapper-SubmitApplication d-flex justify-content-around align-items-center">
    <div class="left">

    </div>
    <div class="right">
      <div class="title">
        Подай заявку
      </div>
      <div class="description">
        Заполни форму "Паспорт проекта", чтобы начать формировать и приумножать свой капитал,
        либо продвинуть свой проект!
      </div>
      <div class="group-btn">
        <div class="btn-left">
          <router-link class="text-decoration-none btn-left-inner" to="/passport">
            Заполнить паспорт проекта
          </router-link>
        </div>
        <div class="btn-right">
           <a href="#becomeInvestor" class="text-decoration-none btn-right-inner">Инвестировать</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>