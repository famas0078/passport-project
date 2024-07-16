<template>
  <div class="wrapper wrapper-header-lending">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <div class="logotype">
            <img src="../../assets/img/logoLendingPage.svg" alt="Логотип Рантье" />
            <div class="logotype-text">Развиваем города</div>
          </div>
          <div class="menu d-flex" :class="{ show: isMenuVisible }">
            <div class="menu-item"><a href="#platform">О платформе</a></div>
            <div class="menu-item"><a href="#becomeInvestor">Инвестировать</a></div>
            <div class="menu-item"><a href="#HowCreateProject">Разместить проект</a></div>
            <div class="menu-item"><a href="#partner">Как присоединиться?</a></div>
            <div class="wrapper-btn">
              <div class="btn">
                <router-link to="/passport" class="btn-inner">Заполнить анкету</router-link>
              </div>
            </div>
          </div>
          <div class="burger-menu" @click="toggleMenu" v-if="!isDesktop">
            <div class="burger-icon" :class="{ open: isMenuVisible }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="btn-costum">
            <router-link to="/passport" class="btn-costum-inner">Заполнить анкету</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuVisible: false,
      isDesktop: true,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    checkScreenSize() {
      this.isDesktop = window.innerWidth >= 1200;
      // Скрываем меню, если пользователь перешел на десктопный экран
      if (this.isDesktop) {
        this.isMenuVisible = false;
      }
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
};
</script>