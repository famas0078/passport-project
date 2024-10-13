<template>
  <div class="wrapper-filters">
    <Header :headerActiveMenu= this.headerActiveMenu />
    <div class="main-filters container mt-5">
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
    </div>
  </div>
</template>

<script>
import Header from "@/components/headerInvestment/header.vue";

export default {
  name: "filters",
  components: {
    Header
  },

  data(){
    return{
      headerActiveMenu: 3,
      statusProject: 3,
    }
  },

  methods: {
    updateStatusProjectFilter(status) {
      this.statusProject = status;
    },
  },

  mounted() {

  },

}
</script>
