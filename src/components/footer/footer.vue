<script>
export default {
  name: "footer"
}
</script>

<template>
<div class="wrapper d-flex justify-content-between">

  <div class="wrapper-left">
    АО “Рантье”<br/>
    143025, Московская область, Сколково ИНН<br/>
    © 2024. Все права защищены.
  </div>

  <div class="wrapper-right">
    <div class="wrapper-right-item">Пользовательское соглашение</div>
    <div class="wrapper-right-item">Политика конфиденциальности</div>
    <div class="wrapper-right-item">Публичная оферета</div>
  </div>
</div>
</template>

<style scoped>
.wrapper-right-item{
  color: #015458;
}
.wrapper{
  margin: 0 auto;
  margin-top: 226px;
  margin-bottom: 68px;
  max-width: 1528px;
}
</style>