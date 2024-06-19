<script>
export default {
  name: "header"
}
</script>

<template>
 <div class="wrapper-header d-flex justify-content-between">
   <div class="wrapper-header-img">
     <img src="../../assets/img/Logo.svg" alt="Logo Rantie">
   </div>
   <div class="wrapper-header-middle d-flex justify-content-around">
     <div class="middle-item">О платформе</div>
     <div class="middle-item">Инвестировать</div>
     <div class="middle-item">Разместить проект</div>
     <div class="middle-item">Стать партнером</div>
   </div>
   <div class="wrapper-header-btn d-flex justify-content-between">
     <div class="wrapper-header-btn-register header-btn">
       Регистрация
     </div>
     <div class="wrapper-header-btn-login header-btn">
       Войти
     </div>
   </div>
 </div>
</template>

<style scoped>
.middle-item{
  font-weight: 400;
  font-size: 16px;
  color: var(--text-color);
}
.wrapper-header{
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 24px;
}
.wrapper-header-middle{
  gap: 36px;
  align-items: center;
}
.wrapper-header-btn{
  max-height: 50px;
  align-items: center;
  gap: 16px;
}
.header-btn{
  padding: 16px 24px 16px 24px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 400;
}
.wrapper-header-btn-register{
  color: var(--text-color);
  background-color: var(--bg-color-light-green-btn);
}
.wrapper-header-btn-login{
  color: white;
  background-color: var(--bg-color-green-btn);
}
</style>