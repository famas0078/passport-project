<template>
  <Header />
  <OneSection v-show="ActiveSlide === 1" :ActiveSlide="ActiveSlide" />
  <TwoSection v-show="ActiveSlide === 2" v-model:form="form" :ActiveSlide="ActiveSlide" />
  <ThreeSection v-show="ActiveSlide === 3" v-model:form="form" :ActiveSlide="ActiveSlide" />
  <FourSection v-show="ActiveSlide === 4" v-model:form="form" :source="source" :needs="needs" :status="status" :typeEvent="typeEvent" :codeOKVED="codeOKVED" :inputEvent="inputEvent" :ActiveSlide="ActiveSlide" />
  <FiveSection v-show="ActiveSlide === 5" v-model:form="form" :ActiveSlide="ActiveSlide" />
  <SixSection v-show="ActiveSlide === 6" :alert_presentation_danger="alert_presentation_danger" :alert_map_danger="alert_map_danger" :handleFilePresentationChange="handleFilePresentationChange" :updateSelectedItems="updateSelectedItems" :fileNamePresentation="fileNamePresentation" :fileNameMap="fileNameMap" :handleFileMapChange="handleFileMapChange" v-model:form="form" :ActiveSlide="ActiveSlide" />
  <div class="index-btn d-flex">
    <div class="btn-last btn-item" @click="lastSlider()">
      <img src="../../assets/img/Vector.svg" alt="">
      К прошлому разделу
    </div>
    <div class="btn-next btn-item" v-if="ActiveSlide !== 6" @click="nextSlider()">
      Продолжить
      <img src="../../assets/img/Caret_Circle_Left.svg" alt="">
    </div>
    <button class="btn-next btn-item" v-else-if="!isLoading" :disabled="success" @click="postForm(this.form)">
        Отправить
      <img src="../../assets/img/Caret_Circle_Left.svg" alt="">
    </button>
    <div class="btn-next btn-item" v-else>
      <div class="loader"></div>
      <img src="../../assets/img/Caret_Circle_Left.svg" alt="">
    </div>
  </div>
  <div class="alert" :class="{ 'show': success, 'error': error }" >
    {{ success ? 'Успешно отправлено!' : 'Ошибка! Не все поля заполнены!' }}
  </div>
  <Footer/>
</template>

<script>

// import services

import СrowdfundingDataServices from '@/services/СrowdfundingDataServices'
import UploadFilesDataServices from "@/services/UploadFilesDataServices"

// import components

import Header from "@/components/header/header.vue"
import OneSection from "@/pages/Section/OneSection.vue";
import Footer from "@/components/footer/footer.vue";
import TwoSection from "@/pages/Section/TwoSection.vue";
import ThreeSection from "@/pages/Section/ThreeSection.vue";
import FourSection from "@/pages/Section/FourSection.vue";
import FiveSection from "@/pages/Section/FiveSection.vue";
import SixSection from "@/pages/Section/SixSection.vue";

export default {
  components: {
    ThreeSection,
    Header,
    TwoSection,
    Footer,
    OneSection,
    FourSection,
    FiveSection,
    SixSection
  },
  data(){
    return{
      name: 'test',
      success: false,
      error: false,
      alert_map_danger: '',
      alert_presentation_danger: '',
      fileNameMap: localStorage.getItem('fileNameMap') || '',
      fileNamePresentation: localStorage.getItem('fileNamePresentation') || '',
      ActiveSlide: parseInt(localStorage.getItem('activeSlide') || 1),
      typeEvent: [],
      codeOKVED: [],
      inputEvent: [
        {
          text: 'Наименование мероприятия',
          input: 'name',
          necessarily: true,
        },
        {
          text: 'Цель мероприятия',
          input: 'goal',
          necessarily: true,
        },
        {
          text: 'Задачи мероприятия',
          input: 'tasks',
          necessarily: false,
        },
        {
          text: 'Город (регион) реализации проекта',
          input: 'realizationLocation',
          necessarily: false,
        },
        {
          text: 'Дата начала реализации мероприятия',
          input: 'dateOfStartDesign',
          necessarily: true,
          datetime: true,
        },
        {
          text: 'Дата выхода на проектную мощность',
          input: 'dateOfAfterWentOnProductionCapacity',
          necessarily: false,
          datetime: true,
        },
        {
          text: 'Дата окончания реализации мероприятия',
          input: 'dateOfRealizationEnd',
          necessarily: true,
          datetime: true,
        },
      ],
      status: [],
      source: [],
      needs: [],
      isLoading: false,
      form: {
        firstName: "",
        lastName: "",
        middleName: "",
        email: "",
        phone: "",
        initiator: "",
        OGRN: "",
        initiatorEmail: "",
        initiatorPhone: "",
        initiatorSite: "",
        crowdfundingTypeCustomName: "",
        name: "",
        goal: "",
        tasks: "",
        realizationLocation: "",
        dateOfAfterWentOnProductionCapacity: "",
        dateOfStartDesign: "",
        dateOfRealizationEnd: "",
        cost: parseInt(0),
        crowdfundingRequirementToConstructinCustomName: "",
        requirementsOfLand: "",
        countOfNewJobs: 0,
        countOfNewJobsAfterWentOnProductionCapacity: 0,
        avarageSalary: 0,
        averageTaxAfterWentOnProductionCapacity: 0,
        amountOfInitialInvestmentOfMainCapital: 0,
        amountOfOutputAfterWentOnProductionCapacity: 0,
        revenueOutputAfterWentOnProductionCapacity: 0,
        expectedEffectivenessAfterWentOnProductionCapacity: "",
        relevance: "",
        HowWillProjectAffectCity: "",
        map: "",
        projectExecutor: "",
        membersOfProject: "",
        expectedResults: "",
        whatNeedToDoForStartProject: "",
        expectedEffectivenessForInvestor: "",
        proejctPresentation: "",
        crowdfundingAndFinancingSourseRelationsIds: [
          0
        ],
        crowdfundingAndAvailableGuaranteeIds: [],
        crowdfundingTypeId: Number,
        crowdfundingCodeOVKEDId: Number,
        crowdfundingDevelopmentStatusId: Number,
        crowdfundingRequirementToConstructingId: Number,
      }
    }
  },
  created(){
    let formData = localStorage.getItem('formData');
    if(formData){
      this.form = JSON.parse(formData);
    }
  },
  watch:{
    ActiveSlide(newValue){
      localStorage.setItem('activeSlide', newValue)
    },
    form(){
      const formString = JSON.stringify(this.form);
      localStorage.setItem('formData', formString)
    }
  },
  mounted() {
    this.getCodeOKVEDR()
    this.getType()
    this.getNeedConstuction()
    this.getDevStatus()
    this.getFinance()
  },
  methods:{
    async postForm(body){
      this.isLoading = true
      await СrowdfundingDataServices.postForm(body)
          .then((response) => {
            this.isLoading = false
            localStorage.removeItem('activeSlide')
            localStorage.removeItem('fileNameMap')
            localStorage.removeItem('fileNamePresentation')
            localStorage.removeItem('formData')
            this.success = true
            setTimeout(() => {
              this.success = false
              location.reload();
            }, 5000)
          })
          .catch((e) => {
            this.isLoading = false
            this.error = true
            console.log(e)
            setTimeout(() => {
              this.error = false
            }, 5000)
          })
    },
    async handleFileMapChange(event) {
      const file = event.target.files[0];
      this.fileNameMap = file.name;
      localStorage.setItem('fileNameMap', this.fileNameMap)
      let formDataDetail = new FormData();
      formDataDetail.append("file", file);
      this.alert_map_danger = ''
      await UploadFilesDataServices.postMap(formDataDetail)
          .then(({data}) => {
            this.form.map = data.filepath
            this.alert_map_danger = ''
          })
          .catch((e) => {
            if (e.response.status === 415) {
              this.alert_map_danger = 'Недопустимый формат файла'
            }
            console.log(e);
          });
    },
    async handleFilePresentationChange(event) {
      const filePresentation = event.target.files[0];
      this.fileNamePresentation = filePresentation.name;
      localStorage.setItem('fileNamePresentation', this.fileNamePresentation)
      let formDataDetail = new FormData();
      formDataDetail.append("file", filePresentation);
      this.alert_presentation_danger = ''
      await UploadFilesDataServices.postPresentation(formDataDetail)
          .then(({data}) => {
            this.form.proejctPresentation = data.filepath
            this.alert_presentation_danger = ''
          })
          .catch((e) => {
            if (e.response.status === 415) {
              this.alert_presentation_danger = 'Недопустимый формат файла'
            }
            console.log(e);
          });
    },
    getFinance(){
      СrowdfundingDataServices.getFinance()
          .then((response) => {
            this.source = response.data
          })
          .catch((e) => {
            console.log(e)
          })
    },
    getDevStatus(){
      СrowdfundingDataServices.getDevStatus()
          .then((response) => {
            this.status = response.data
          })
          .catch((e) => {
            console.log(e)
          })
    },
    getNeedConstuction(){
      СrowdfundingDataServices.getNeedConstuction()
          .then((response) => {
            this.needs = response.data
          })
          .catch((e) => {
            console.log(e)
          })
    },
    getCodeOKVEDR(){
      СrowdfundingDataServices.getCodeOKVEDR()
          .then((response) => {
            this.codeOKVED = response.data
          })
          .catch((e) => {
            console.log(e)
          })
    },
    getType(){
      СrowdfundingDataServices.getType()
          .then((response) => {
            this.typeEvent = response.data
          })
          .catch((e) => {
            console.log(e)
          })
    },
    lastSlider(){
      if (this.ActiveSlide > 1){
        this.ActiveSlide = this.ActiveSlide - 1
      }
    },
    nextSlider(){
      if (this.ActiveSlide < 6){
        this.ActiveSlide = this.ActiveSlide + 1
      }
    },
    updateForm(){
      const formString = JSON.stringify(this.form);
      localStorage.setItem('formData', formString)
    },
  },
  name: "index"
}

</script>

<style scoped>
.btn-item{
  cursor: pointer;
  gap: 15px;
  display: flex;
  padding: 16px 24px;
  align-items: center;
}
.index-btn{
  margin-top: 36px;
  gap: 16px;
  justify-content: center;
}
.btn-last{
  border-radius: 8px;
  color: var(--text-color);
  background-color: var(--bg-color-light-green-btn);
}
.btn-next{
  border-radius: 8px;
  color: white;
  background-color: var(--bg-color-green-btn);
}
@media screen and (max-width: 1200px) {
  .btn-item{
    padding: 12px 20px;

  }
}
@media screen and (max-width: 760px) {
  .btn-item{
    padding: 8px 16px;

  }
}
@media screen and (max-width: 425px) {
  .btn-item{
    padding: 4px 12px;

  }
}
</style>


