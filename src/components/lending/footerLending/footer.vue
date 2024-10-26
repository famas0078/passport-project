<script>
export default {
  name: "footer"
}
</script>

<template>
  <div class="wrapper container">
    <div class="row">
      <div class="col-12 d-flex justify-content-between">
        <div class="wrapper-left text-left col-xxl-6">
          АО "Рантье Финанс"<br />
          420500, Республика Татарстан, Верхнеуслонский<br />
          муниципальный район, город Иннополис, ул.<br />
          Университетская, д. 5, этаж 1, помещение №111,<br />
          рабочее место 15/2<br />
          © 2024. Все права защищены.
        </div>

        <div class="wrapper-right text-right col-xxl-6">
          <div class="wrapper-right-item">Пользовательское соглашение</div>
          <div class="wrapper-right-item">Политика конфиденциальности</div>
          <div class="wrapper-right-item">Публичная оферета</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper-right-item {
  color: var(--color-purple);
}
</style>