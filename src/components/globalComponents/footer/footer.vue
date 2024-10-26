<script>
export default {
  name: "footer"
}
</script>

<template>
<div class="wrapper d-flex justify-content-between">

  <div class="wrapper-left text-left">
    АО "Рантье Финанс"<br />
    420500, Республика Татарстан, Верхнеуслонский<br />
    муниципальный район, город Иннополис, ул.<br />
    Университетская, д. 5, этаж 1, помещение №111,<br />
    рабочее место 15/2<br />
    © 2024. Все права защищены.
  </div>

  <div class="wrapper-right text-right">
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
  margin: 70px auto;
  padding: 0 30px;
  max-width: 1528px;
  width: 100%;
}
</style>