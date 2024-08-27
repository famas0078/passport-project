<template>
  <div class="wrapper-simple-form px-3">
    <div v-show="!this.$route.query.nameType">
      <div class="title">
        ПАСПОРТ ПРОЕКТА ДЛЯ РАЗМЕЩЕНИЯ<br/> НА ПЛАТФОРМЕ НА ПЛАТФОРМЕ "РАНТЬЕ. РАЗВИВИЕМ ГОРОДА”
      </div>
      <div class="description mt-4">
        <div class="card-w wrapper-types">
          <div class="types-title text-left">
            <b>
              Тип проекта
            </b>
          </div>
          <ul>
            <li v-for="(item, index) in typesProject" :key="index">
              <input
                  :id="'radio-event' + index"
                  type="radio"
                  name="radio"
                  :value="item.id"
                  v-model="chooseType">
              <label class="position-relative d-flex align-items-center" :for="'radio-event' + index">
                {{ item.text }}
              </label>
            </li>
          </ul>
          <div class="d-flex justify-content-center mt-5">
            <button class="btn-next btn-item" @click="nextPage" :disabled="error">
              Продолжить
              <img src="../../assets/img/Caret_Circle_Left.svg" alt="">
            </button>
          </div>
        </div>
      </div>
      <div class="alert" :class="{ 'error': error }">
        {{ error ? 'Ошибка! Выберите тип проекта!' : '' }}
      </div>
    </div>

    <component v-show="this.$route.query.nameType" :is="projectComponents[this.$route.query.nameType]" />

  </div>
</template>

<script>

// import services

import СrowdfundingDataServices from '@/services/СrowdfundingDataServices'
import UploadFilesDataServices from "@/services/UploadFilesDataServices"

// import components

import innovation from '@/pages/sectionsShort/innovation.vue'
import invention from '@/pages/sectionsShort/invention.vue'
import creativeProject from '@/pages/sectionsShort/creativeProject.vue'
import cryptoProject from '@/pages/sectionsShort/cryptoProject.vue'
import charityProject from '@/pages/sectionsShort/charityProject.vue'
import socialProject from '@/pages/sectionsShort/socialProject.vue'
import businessProject from '@/pages/sectionsShort/businessProject.vue'
import startup from '@/pages/sectionsShort/startup.vue'
import investmentProject from '@/pages/sectionsShort/investmentProject.vue'


export default {
  components: {
    investmentProject,
    startup,
    businessProject,
    socialProject,
    charityProject,
    cryptoProject,
    creativeProject,
    invention,
    innovation
  },
  data(){
    return {
      error: false,
      nameTypes: this.$route.query.nameType,
      chooseType: parseInt(localStorage.getItem('chooseType')) || null,
      typesProject: [
        {
          id: 1,
          type: 'investmentProject',
          text: 'Инвестиционный проект (реальный сектор экономики)',
        },
        {
          id: 2,
          type: 'startup',
          text: 'Стартап',
        },
        {
          id: 3,
          type: 'businessProject',
          text: 'Бизнес-проект (создание нового бизнеса)',
        },
        {
          id: 4,
          type: 'socialProject',
          text: 'Спонсорский проект',
        },
        {
          id: 5,
          type: 'charityProject',
          text: 'Благотворительный проект',
        },
        {
          id: 6,
          type: 'cryptoProject',
          text: 'Криптопроект',
        },
        {
          id: 7,
          type: 'creativeProject',
          text: 'Креативный проект',
        },
        {
          id: 8,
          type: 'invention',
          text: 'Изобретение, технология, ноу-хау',
        },
        {
          id: 9,
          type: 'innovation',
          text: 'Инновация (улучшение или расширение возможностей экосистемы «Рантье»)',
        },
      ],
      projectComponents: {
        investmentProject,
        startup,
        businessProject,
        socialProject,
        charityProject,
        cryptoProject,
        creativeProject,
        invention,
        innovation
      }
  }
},
  watch: {
    '$route'(to) {
      this.nameTypes = to.query.nameType
    }
  },
  mounted() {
    this.checkAndRemoveQueryParam()
  },
  methods:{
    checkAndRemoveQueryParam() {
      if (!this.chooseType && this.$route.query.nameType) {
        const { nameType, ...restQuery } = this.$route.query;
        this.$router.replace({
          name: this.$route.name,
          query: restQuery
        });
      }
    },
    nextPage() {

      if (this.chooseType) {
        const queryParams = { ...this.$route.query, nameType: this.typesProject[this.chooseType - 1].type}

        localStorage.setItem('chooseType', this.chooseType)

        this.$router.push({
          name: this.$route.name,
          query: queryParams
        })
      } else {

        const { nameType, ...restQuery } = this.$route.query;

        this.$router.push({
          query: restQuery
        })

        this.error = true
        setTimeout(() => {
          this.error = false
        }, 5000)
      }
    },
  },
  name: "index"
}

</script>




