
<template>
    <div class="wrapper-auth h-100 w-100 d-flex align-items-center justify-content-center">
      <div class="container-login w-100 row">
        <div class="container-form col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center">
          <div class="title-subtitle">
            <div class="title">
              <h1>АВТОРИЗАЦИЯ</h1>
            </div>
            <div class="subtitle mt-3">
              <p class="text-center">
                Вход
              </p>
            </div>
          </div>
          <div class="form w-100 mt-5">
            <form @submit.prevent="login">
              <div class="form-group position-relative mb-3">
                <input class="form-control" type="text" required="" placeholder="Логин">
              </div>
              <div class="form-group position-relative">
                <input class="form-control" :type="active?'password':'text'" required="" placeholder="Пароль">
                <div class="show-hide cursor-pointer" @click.prevent="show">
                  <img v-if="active" class="svg-icon" src="@/assets/img/auth/eye-close.svg"  alt="">
                  <img v-else class="svg-icon" src="@/assets/img/auth/eye-open.svg" alt="">
                </div>
              </div>
              <div class="wrapper-btn mt-5">
                <button class="btn b-primary" type="submit">
                  Войти
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="container-image col-12 col-md-6 col-lg-8">
          <img class="w-100" src="@/assets/img/auth.svg" alt="">
        </div>
      </div>
    </div>
</template>
<script>
import UserDataService from '@/services/UserDataServices'

export default ({
  name: "login",
  data() {
    return {
      active: true,
    };
  },
  mounted() {
    this.login()
  },
  methods: {
    show() {
      this.active = !this.active;
    },
    async login(){
      UserDataService.login()
    }
  }
})
</script>