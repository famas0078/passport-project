
<template>
  <div class="wrapper-auth h-100 w-100 d-flex align-items-center justify-content-center">
    <div class="container-register w-100 row">
      <div class="container-form col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center">
        <div class="title-subtitle">
          <div class="title">
            <h1>РЕГИСТРАЦИЯ</h1>
          </div>
          <div class="subtitle mt-3">
            <p class="text-center">
              Придумайте логин и пароль
            </p>
          </div>
        </div>
        <div class="form w-100 mt-5">
          <form @submit.prevent="login">
            <div class="form-group position-relative mb-3">
              <input class="form-control" type="text" required="" placeholder="Логин">
            </div>
            <div class="form-group position-relative mb-3">
              <input class="form-control" :type="active[0].state?'password':'text'" required="" placeholder="Пароль">
              <div class="show-hide cursor-pointer" @click.prevent="show(0)">
                <img v-if="active[0].state" class="svg-icon" src="@/assets/img/auth/eye-close.svg"  alt="">
                <img v-else class="svg-icon" src="@/assets/img/auth/eye-open.svg" alt="">
              </div>
            </div>
            <div class="form-group position-relative">
              <input class="form-control" :type="active[1].state?'password':'text'" required="" placeholder="Повторите пароль">
              <div class="show-hide cursor-pointer" @click.prevent="show(1)">
                <img v-if="active[1].state" class="svg-icon" src="@/assets/img/auth/eye-close.svg"  alt="">
                <img v-else class="svg-icon" src="@/assets/img/auth/eye-open.svg" alt="">
              </div>
            </div>
            <div class="wrapper-btn mt-5">
              <button class="btn b-primary" type="submit">
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="container-image col-12 col-md-6 col-lg-8">
        <img class="w-100" src="../assets/img/auth/auth.svg" alt="">
      </div>
    </div>
  </div>
</template>
<script>

export default ({
  name: "register",
  data() {
    return {
      active: [
        {
          state: true
        },
        {
          state: true
        }
      ]
    };
  },
  methods: {
    show( index ) {
      this.active[index].state = !this.active[index].state;
    },
  }
})
</script>

<style scoped>

</style>