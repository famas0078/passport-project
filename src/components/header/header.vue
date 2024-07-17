<template>
 <div class="wrapper-header d-flex justify-content-between">
   <div class="wrapper-header-img">
     <img src="../../assets/img/Logo.svg" alt="Logo Rantie">
   </div>
   <div class="wrapper-header-middle d-flex justify-content-around">
     <div class="middle-item cursor-pointer">О платформе</div>
     <div class="middle-item cursor-pointer">Инвестировать</div>
     <div class="middle-item cursor-pointer">Разместить проект</div>
     <div class="middle-item cursor-pointer">Стать партнером</div>
   </div>
   <div class="wrapper-header-btn d-flex justify-content-between">favicon.svg
     <router-link class="wrapper-header-btn-login header-btn cursor-pointer" to="/admin">
       Войти
     </router-link>
   </div>
   <div class="wrapper-header-mobile">
     <div class="wrapper-icon-menu" :class="{ open: isOpen }" >
       <a href="#" @click="toggleMenu" class="nav" :class="{ open: isOpen }">
         <div class="one"></div>
         <div class="two"></div>
         <div class="three"></div>

       </a>
     </div>
     <div class="wrapper-burger-menu" :class="{open: isOpen}">
       <ul>
         <li class="cursor-pointer">
           <h2>
             О платформе
           </h2>
         </li>
         <li class="cursor-pointer">
           <h2>
             Инвестировать
           </h2>
         </li>
         <li class="cursor-pointer">
           <h2>
             Разместить проект
           </h2>
         </li>
         <li class="cursor-pointer">
           <h2>
             Стать партнером
           </h2>
         </li>
       </ul>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>
<style scoped>
.wrapper-burger-menu{
  display: none;
}
.open.nav + .wrapper-burger-menu {
  display: block;
}

</style>