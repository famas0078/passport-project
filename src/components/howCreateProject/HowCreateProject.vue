

<template>
<div class="wrapper_howCreateProject" id="HowCreateProject">
  <div class="container">
    <h2 class="title">
      как создать проект?
    </h2>
    <div class="desktop">
      <div class="row">
        <div  class="col-xl-4">
          <div class="card-item">
            <div class="card-item-inner">
              <div class="title">
                Сформулируйте цель своего проекта
              </div>
              <img class="Arrow_img" src="../../assets/img/Arrow-Rifght-HowCreateProjectsvg.svg" alt="">
              <div class="description">
                <ul>
                  <li>Займ</li>
                  <li>поделиться долей в бизнесе или акциями компании</li>
                  <li>спонсорство</li>
                  <li>благотворительность</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card-item">
            <div class="card-item-inner">
              <div class="title">
                Зарегистрируетесь на платформе
              </div>
              <img class="Arrow_img" src="../../assets/img/Arrow-Rifght-HowCreateProjectsvg.svg" alt="">
              <div class="description">
                Пройдите процесс регистрации на выбранной платформе для создания проектов,
                чтобы иметь доступ к возможностям публикации,
                финансирования и взаимодействия с другими участниками.
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card-item">
            <img class="Arrow_big_one_img" src="../../assets/img/big-arrow-HowCreateProject.svg" alt="">
            <div class="card-item-inner">
              <div class="title">
                Разместите проект
              </div>
              <div class="description">
                Создайте описание вашего проекта с информацией о его сути, целях, сроках и потребностях.
                Это поможет привлечь внимание потенциальных инвесторов или поддержителей.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4">
          <div class="card-item">
            <div class="card-item-inner">
              <div class="title">
                Анализ проекта
              </div>
              <img class="Arrow_img" src="../../assets/img/Arrow-Rifght-HowCreateProjectsvg.svg" alt="">
              <div class="description">
                Проведите анализ своего проекта, оценив его реализуемость,
                потенциальные риски и выгоды. Это поможет вам лучше понять,
                что нужно сделать для успешного завершения проекта.
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card-item">
            <div class="card-item-inner">
              <div class="title">
                Заключите договор финансирования
              </div>
              <img class="Arrow_img" src="../../assets/img/Arrow-Rifght-HowCreateProjectsvg.svg" alt="">
              <div class="description">
                Согласуйте условия финансирования с соответствующими сторонами и заключите договор,
                чтобы обеспечить финансовую поддержку вашего проекта.
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card-item">
            <img class="Arrow_big_img" src="../../assets/img/big-arrow-HowCreateProject.svg" alt="">
            <div class="card-item-inner">
              <div class="title">
                Презентуйте свой проект
              </div>
              <div class="description">
                Подготовьте убедительное предложение,
                которое выделит ваш проект из других и презентуйте его на платформе,
                чтобы привлечь внимание и поддержку.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4">
          <div class="card-item">
            <div class="card-item-inner">
              <div class="title">
                Финансирование проекта
              </div>
              <img class="Arrow_img" src="../../assets/img/Arrow-Rifght-HowCreateProjectsvg.svg" alt="">
              <div class="description">
                Получите необходимое финансирование от инвесторов, кредиторов или других источников,
                чтобы реализовать задуманное.
                Поддержка финансов поможет вам двигаться вперед и достигнуть поставленных целей.
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card-item">
            <div class="card-item-inner">
              <div class="title">
                Обязательства перед инвесторами
              </div>
              <img class="Arrow_img" src="../../assets/img/Arrow-Rifght-HowCreateProjectsvg.svg" alt="">
              <div class="description">
                Пощдерживайте прозрачную коммуникацию с вашими финансовыми партнерами и следуйте условиям договоренностей,
                чтобы сохранить их доверие и поддержку вашего проекта.
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card-item">
            <div class="card-item-inner">
              <div class="title">
                Создайте свой проект
              </div>
              <div class="description">
                На этом этапе выполните все необходимые шаги для запуска своего проекта в действие.
              </div>
              <div class="button-project">
                <router-link to="/passport" class="button-project-inner">
                  Заполнить паспорт проекта
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="row">
        <div class="col-12" :class="{ 'slide-enter': ActiveSlide === 1, 'slide-leave': ActiveSlide !== 1 }" v-if="ActiveSlide === 1">
          <div class="card-item">
            <div class="card-item-inner">
              <div class="title">
                Сформулируйте цель своего проекта
              </div>

              <div class="description">
                <ul>
                  <li>Займ</li>
                  <li>поделиться долей в бизнесе или акциями компании</li>
                  <li>спонсорство</li>
                  <li>благотворительность</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12" :class="{ 'slide-enter': ActiveSlide === 2, 'slide-leave': ActiveSlide !== 2 }" v-if="ActiveSlide === 2">
          <div class="card-item">
            <div class="card-item-inner">
              <div class="title">
                Зарегистрируетесь на платформе
              </div>

              <div class="description">
                Пройдите процесс регистрации на выбранной платформе для создания проектов,
                чтобы иметь доступ к возможностям публикации,
                финансирования и взаимодействия с другими участниками.
              </div>
            </div>
          </div>
        </div>
        <div class="col-12" :class="{ 'slide-enter': ActiveSlide === 3, 'slide-leave': ActiveSlide !== 3 }" v-if="ActiveSlide === 3">
          <div class="card-item">

            <div class="card-item-inner">
              <div class="title">
                Разместите проект
              </div>
              <div class="description">
                Создайте описание вашего проекта с информацией о его сути, целях, сроках и потребностях.
                Это поможет привлечь внимание потенциальных инвесторов или поддержителей.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12" :class="{ 'slide-enter': ActiveSlide === 4, 'slide-leave': ActiveSlide !== 4 }" v-if="ActiveSlide === 4">
          <div class="card-item">
            <div class="card-item-inner">
              <div class="title">
                Анализ проекта
              </div>

              <div class="description">
                Проведите анализ своего проекта, оценив его реализуемость,
                потенциальные риски и выгоды. Это поможет вам лучше понять,
                что нужно сделать для успешного завершения проекта.
              </div>
            </div>
          </div>
        </div>
        <div class="col-12" :class="{ 'slide-enter': ActiveSlide === 5, 'slide-leave': ActiveSlide !== 5 }" v-if="ActiveSlide === 5">
          <div class="card-item">
            <div class="card-item-inner">
              <div class="title">
                Заключите договор финансирования
              </div>

              <div class="description">
                Согласуйте условия финансирования с соответствующими сторонами и заключите договор,
                чтобы обеспечить финансовую поддержку вашего проекта.
              </div>
            </div>
          </div>
        </div>
        <div class="col-12" :class="{ 'slide-enter': ActiveSlide === 6, 'slide-leave': ActiveSlide !== 6 }" v-if="ActiveSlide === 6">
          <div class="card-item">

            <div class="card-item-inner">
              <div class="title">
                Презентуйте свой проект
              </div>
              <div class="description">
                Подготовьте убедительное предложение,
                которое выделит ваш проект из других и презентуйте его на платформе,
                чтобы привлечь внимание и поддержку.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12" :class="{ 'slide-enter': ActiveSlide === 7, 'slide-leave': ActiveSlide !== 7 }" v-if="ActiveSlide === 7">
          <div class="card-item">
            <div class="card-item-inner">
              <div class="title">
                Финансирование проекта
              </div>

              <div class="description">
                Получите необходимое финансирование от инвесторов, кредиторов или других источников,
                чтобы реализовать задуманное.
                Поддержка финансов поможет вам двигаться вперед и достигнуть поставленных целей.
              </div>
            </div>
          </div>
        </div>
        <div class="col-12" :class="{ 'slide-enter': ActiveSlide === 8, 'slide-leave': ActiveSlide !== 8 }" v-if="ActiveSlide === 8">
          <div class="card-item">
            <div class="card-item-inner">
              <div class="title">
                Обязательства перед инвесторами
              </div>

              <div class="description">
                Пощдерживайте прозрачную коммуникацию с вашими финансовыми партнерами и следуйте условиям договоренностей,
                чтобы сохранить их доверие и поддержку вашего проекта.
              </div>
            </div>
          </div>
        </div>
        <div class="col-12" :class="{ 'slide-enter': ActiveSlide === 9, 'slide-leave': ActiveSlide !== 9 }" v-if="ActiveSlide === 9">
          <div class="card-item">
            <div class="card-item-inner">
              <div class="title">
                Создайте свой проект
              </div>
              <div class="description">
                На этом этапе выполните все необходимые шаги для запуска своего проекта в действие.
              </div>
              <div class="button-project">
                Заполнить паспорт проекта
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="paggination d-flex justify-content-end">
        <div class="arrow" @click="LastSlide()">
          <img src="../../assets/img/Arrow_Left_LG.svg" alt="">
        </div>
        <div class="arrow" @click="NextSlide()">
          <img src="../../assets/img/Arrow_Right_LG.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HowCreateProject",
  data(){
    return{
      ActiveSlide: 1,
    }
  },
  methods:{
    NextSlide() {
      if (this.ActiveSlide < 9) {
        this.ActiveSlide += 1
      }
    },
    LastSlide() {
      if (this.ActiveSlide > 1) {
        this.ActiveSlide -= 1
      }
    }
  }
}
</script>

<style scoped>
.button-project-inner{
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(157, 98, 245, 1);
  border-radius: 8px;
  padding: 12px 80px;
}
.button-project{
  margin-top: 24px;
}
.slide-enter {
  animation: slide-enter 0.5s ease-out;
}
.slide-leave {
  animation: slide-leave 0.5s ease-in;
}
.slide-enter-left {
  animation: slide-enter-left 0.8s ease-out;
}
.slide-enter-top {
  animation: slide-enter-top 0.8s ease-out;
}
.slide-enter-right {
  animation: slide-enter-right 0.8s ease-out;
}
@keyframes slide-enter-left {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slide-enter-top {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-enter-right {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slide-enter {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-leave {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    transform: translateX(-50px);
  }
}
</style>