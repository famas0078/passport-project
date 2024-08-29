
<template>
  <div class="alert" :class="{ 'show': success, 'error': error }" >
    {{ success ? 'Статус успешно изменен!' : 'Ошибка, попробуйте позже!' }}
  </div>
  <div v-if="!typeForm">
    <OneSection v-if="activeSectionDescription === 1" :infoProject="infoProject" />
    <TwoSection v-if="activeSectionDescription === 2" :infoProject="infoProject" />
    <ThreeSection v-if="activeSectionDescription === 3" :infoProject="infoProject" />
    <FourSection v-if="activeSectionDescription === 4" :infoProject="infoProject" />
    <FiveSection v-if="activeSectionDescription === 5" :isLoading="isLoading" :success="success" :putStatusProject="putStatusProject" :infoProject="infoProject" />
    <div class="wrapper-pagination my-3">
      <div class="paggination">
        <div class="wrapper">
          <div class="wrapper-slider d-flex justify-content-around position-relative">
            <img class="arrow" src="../../assets/img/Chevron_Left.svg" alt="" @click="PrevNextSection()">
            <div v-for="item in pagination" class="d-flex align-items-center justify-content-center flex-column">
              <div
                  :class="{
            'wrapper-slider-item-back': activeSectionDescription === item.id,
            'wrapper-slider-item': activeSectionDescription !== item.id && activeSectionDescription < item.id,
          }"
                  @click="OpenCurrentSection(item.id)"
              >
                <div
                    class="d-flex align-items-center justify-content-center h-100 w-100"
                >
                  <div
                      :class="{
                'wrapper-slider-item-text-white':
                activeSectionDescription === item.id,
                'wrapper-slider-item-text':
                activeSectionDescription !== item.id,
              }"
                  >
                    {{ item.id }}
                  </div>
                </div>
              </div>
            </div>
            <img class="arrow" src="../../assets/img/Chevron_Right.svg" alt="" @click="OpenNextSection()">
          </div>
        </div>
      </div>
      <div class="arrow-right">

      </div>
    </div>
  </div>
  <div v-else>
    <short-form :typeForm="typeForm" :isLoading="isLoading" :success="success" :putStatusShortProject="putStatusShortProject" :infoProject="infoProject"/>
  </div>
</template>

<script>

/* components */

import OneSection from './sectionAdminDescription/OneSection.vue';
import TwoSection from './sectionAdminDescription/TwoSection.vue';
import ThreeSection from './sectionAdminDescription/ThreeSection.vue';
import FourSection from './sectionAdminDescription/FourSection.vue';
import FiveSection from './sectionAdminDescription/FiveSection.vue';
import ShortForm from './shortForm/ShortForm.vue';

/* services */

import ProjectsDataServices from '@/services/ProjectsDataServices'

export default{
    name: "AdminList",
    components: {
      OneSection,
      TwoSection,
      ThreeSection,
      FourSection,
      FiveSection,
      ShortForm
    },
    data(){
        return{
          typeForm: parseInt(this.$route.query.type) || false,
          success: false,
          error: false,
          isLoading: false,
          activeSectionDescription: 1,
          descriptionProject: [
              {
                  infoProject:
                  [
                      {
                      projectName: "Исследование влияния социокультурных факторов на формирование гражданского общества",
                      firstName: "Владимир",
                      middleName: "Николаевич",
                      lastName: "Морозов",
                      }
                  ],
                  contact: [
                      {
                          firstName: "Владимир",
                          middleName: "Николаевич",
                          lastName: "Морозов",
                          tel: "8-900-888-77-77",
                          email: "boffagrijuha-4090@yopmail.com"
                      }
                  ],
                  iniciator: [
                  {
                          iniciator: "iniciator",
                          ORGN: "ОРГН",
                          web: "Веб-сайт инициатора мероприятия",
                          tel: "8-900-888-77-77",
                          email: "boffagrijuha-4090@yopmail.com"
                      },
                  ],
                  desProject:[
                      {
                          type: "Тип мероприятия",
                          OCVD: "ОКВД",
                          nameProject: "Наименование мероприятия",
                          goalProject: "Цель мероприятия",
                          taskProject: "Задача мероприятия",
                          cityRealizations: "шааомлоа",
                          dateStart: "Дата начала",
                          dateExit: "Дата выхода",
                          dateEnd: "Дата конца",
                          statusRealization: "Статус реализации",
                          sourceFinancing: "Источник финансирования",
                          cost: "66387 млн. руб.",
                          needСconstruction: "Газоснобжение",
                          needLandResources: "шааомлоа",
                      }
                  ],
                  TargetIndicatorsProject:[
                      {
                          jobsСonstruction: "45 ед.",
                          jobsFullCapacity: "45 ед.",
                          averageSalary: "5 3647 тыс. руб.",
                          taxes: "6 845 млн. руб.",
                          capital: "6 45 млн. руб.",
                          productionVolume: "45 ед.",
                          revenue: "6 45 млн. руб.",
                          expectedEfficiency: "шааомлоа"
                      }
                  ]
              }
          ],
          pagination: [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: 4,
          },
          {
            id: 5,
          },
        ],
          infoProject: [],
        }
    },
    mounted() {
      if (this.typeForm) {
        this.getDetailShortProject(this.$route.params.id, this.typeForm)
      } else {

        this.getDetailProject(this.$route.params.id)
      }
    },
    methods:{
      getDetailProject(id){
        ProjectsDataServices.getDetailProject(id)
            .then((response) => {
              this.infoProject = response.data
            })
            .catch((e) => {
              console.log(e)
            })
      },
      getDetailShortProject(id, typeId){
        ProjectsDataServices.getDetailShortProject(id, typeId)
            .then((response) => {
              this.infoProject = response.data[0]
            })
            .catch((e) => {
              console.log(e)
            })
      },
      OpenNextSection(){
        if (this.activeSectionDescription < 5){
          this.activeSectionDescription += 1
        }
      },
      PrevNextSection(){
        if (this.activeSectionDescription > 1){
          this.activeSectionDescription -= 1
        }
      },
      OpenCurrentSection(id){
        this.activeSectionDescription = id
      },
      putStatusProject(status){
        try {

          this.isLoading = true

          if (status){
            ProjectsDataServices.putAcceptProject(this.$route.params.id)
                .then((response) => {
                  this.isLoading = false
                  this.success = true
                  setTimeout(() => {
                    this.success = false
                    this.$router.push('/admin')
                  }, 5000)
                })
                .catch((e) => {
                  this.isLoading = false
                  this.error = true
                  setTimeout(() => {
                    this.error = false
                  }, 5000)
                  console.log(e)
                })
          } else {
            ProjectsDataServices.putRejectProject(this.$route.params.id)
                .then((response) => {
                  this.isLoading = false
                  this.success = true
                  setTimeout(() => {
                    this.success = false
                    this.$router.push('/admin')
                  }, 5000)
                })
                .catch((e) => {
                  this.isLoading = false
                  console.log(e)
                  this.error = true
                  setTimeout(() => {
                    this.error = false
                  }, 5000)
                })
          }
        }
        catch (e) {
          console.log(e)
        }
      },
      putStatusShortProject(status){
        try {

          this.isLoading = true

          if (status){
            ProjectsDataServices.putAcceptShortProject(this.$route.params.id, this.$route.query.type)
                .then((response) => {
                  this.isLoading = false
                  this.success = true
                  setTimeout(() => {
                    this.success = false
                    this.$router.push('/admin')
                  }, 5000)
                })
                .catch((e) => {
                  this.isLoading = false
                  this.error = true
                  setTimeout(() => {
                    this.error = false
                  }, 5000)
                  console.log(e)
                })
          } else {
            ProjectsDataServices.putRejectShortProject(this.$route.params.id, this.$route.query.type)
                .then((response) => {
                  this.isLoading = false
                  this.success = true
                  setTimeout(() => {
                    this.success = false
                    this.$router.push('/admin')
                  }, 5000)
                })
                .catch((e) => {
                  this.isLoading = false
                  console.log(e)
                  this.error = true
                  setTimeout(() => {
                    this.error = false
                  }, 5000)
                })
          }
        }
        catch (e) {
          console.log(e)
        }
      }
    }
}
</script>

<style scoped>
.arrow{
    cursor: pointer;
}
.slider-text {
  font-weight: 500;
  color: var(--text-color);
  font-size: 21px;
}
.wrapper-slider-item-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.wrapper-slider-item-circle-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid var(--bg-color-green-btn);
  border-radius: 50%;
}
.wrapper-slider-item-text {
  cursor: pointer;
  font-size: 24px;
  font-weight: 550;
  color: var(--bg-color-green-btn);
}
.wrapper-slider-item-text-white {
  font-size: 24px;
  font-weight: 550;
  color: #ffffff;
}
.wrapper-slider {
  margin: 0 auto;
  max-width: 348px;
  margin-top: 60px;
}
.wrapper-slider-item-back {
  background: linear-gradient(135deg, #cbce55 0.69%, #217b4f 100.69%);
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

</style>