<template>
  <div class="wrapper-filters">
    <Header :headerActiveMenu= this.headerActiveMenu />
    <div class="main-filters mt-5">
      <div class="title-filters text-uppercase">
        Проекты
      </div>
      <div class="main-menu-filters d-flex">
        <div class="menu-filters d-flex mt-3">
          <div
              class="menu-item"
              :class="{ 'menu-item-active': statusProject === 1 }"
              @click="updateStatusProjectFilter(1)"
          >Все проекты</div>
          <div
              class="menu-item"
              :class="{ 'menu-item-active': statusProject === 2 }"
              @click="updateStatusProjectFilter(2)"
          >Сбор денег</div>
          <div
              class="menu-item"
              :class="{ 'menu-item-active': statusProject === 3 }"
              @click="updateStatusProjectFilter(3)"
          >Сбор завершен</div>
        </div>
      </div>
      <div class="main-projects mt-3 d-flex justify-content-between">
        <div class="main-projects-left">
          <div class="search-projects-left">
            <input type="text" class="input-search-item" placeholder="Поиск по названию проекта">
            <span class="search-icon"><img src="../../../assets/img/investmentPages/Seacrh.svg" alt=""></span>
          </div>
          <div class="rating-projects-left">

          </div>
        </div>
        <div class="main-projects-right">
          <div class="projects-item d-flex">
            <div class="projects-item-img">
              <img src="../../../assets/img/investmentPages/noImageProject.png" alt="">
            </div>
            <div class="projects-item-description text-left">
              <div class="description-category">
                Категория
              </div>
              <div class="project-name mt-2">
                Название проекта
              </div>
              <div class="description-text mt-3">
                Вот вам яркий пример современных тенденций — синтетическое
                тестирование позволяет выполнить важные задания по разработке
                прогресса профессионального сообщества.
              </div>
              <div class="description-under d-flex justify-content-between mt-2">
                <div class="project-rating">
                      <span
                          v-for="star in stars"
                          :key="star"
                          class="star"
                          :class="{ filled: star <= rating }"
                          @click="setRating(star)"
                      >
                        ★
                      </span>
                </div>
                <div class="popular-data-main d-flex">
                  <div class="project-popular">2</div>
                  <div class="project-data">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/investment/headerInvestment/header.vue";

export default {
  name: "filters",
  components: {
    Header
  },

  data(){
    return{
      headerActiveMenu: 3,
      statusProject: 3,
      rating: 2,
      stars: [1, 2, 3, 4, 5],
    }
  },

  methods: {
    updateStatusProjectFilter(status) {
      this.statusProject = status;
    },
    setRating(star) {
      this.rating = star;
    },
  },

  mounted() {

  },

}
</script>
