<template>
  <Header />
  <OneSection v-show="ActiveSlide === 1" :ActiveSlide="ActiveSlide" />
  <TwoSection v-show="ActiveSlide === 2" v-model:form="form" :ActiveSlide="ActiveSlide" />
  <ThreeSection v-show="ActiveSlide === 3" v-model:form="form" :ActiveSlide="ActiveSlide" />
  <FourSection v-show="ActiveSlide === 4" v-model:form="form" :source="source" :needs="needs" :status="status" :typeEvent="typeEvent" :codeOKVED="codeOKVED" :inputEvent="inputEvent" :ActiveSlide="ActiveSlide" />
  <FiveSection v-show="ActiveSlide === 5" v-model:form="form" :ActiveSlide="ActiveSlide" />
  <SixSection v-show="ActiveSlide === 6" :handleFileChange="handleFileChange" v-model:form="form" :ActiveSlide="ActiveSlide" />
  <div class="btn" @click="postForm(this.form)">Отправить</div>
  <div class="index-btn d-flex">
    <div class="btn-last btn-item" @click="lastSlider()">
      <img src="../../assets/img/Vector.svg" alt="">
      К прошлому разделу
    </div>
    <div class="btn-next btn-item" @click="nextSlider()">
      Продолжить
      <img src="../../assets/img/Caret_Circle_Left.svg" alt="">
    </div>
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
        realizationLocation: "string",
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
        amountOfOutputAfterWentOnProductionCapacity: 0,
        revenueOutputAfterWentOnProductionCapacity: 0,
        expectedEffectivenessAfterWentOnProductionCapacity: "",
        relevance: "",
        HowWillProjectAffectCity: "",
        map: "",
        projectExecutor: "",
        membersOfProject: "",
        expectedResults: "string",
        whatNeedToDoForStartProject: "string",
        expectedEffectivenessForInvestor: "string",
        proejctPresentation: "string",
        crowdfundingAndFinancingSourseRelationsIds: [
          0
        ],
        crowdfundingAndAvailableGuaranteeIds: [
          1,
          2,
          3
        ],
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
      await СrowdfundingDataServices.postForm(body)
          .then((response) => {
            console.log("Создано")
          })
          .catch((e) => {
            console.log(body)
            console.log(e)
          })
    },
    async handleFileChange(event) {
      console.log("В родителе")
      const file = event.target.files[0];
      this.fileNameMap = file.name;
      let formDataDetail = new FormData();
      formDataDetail.append("file", file);
      console.log(formDataDetail)
      await UploadFilesDataServices.postMap(formDataDetail)
          .then(({data}) => {
            this.form.map = data.filepath
            console.log("ПРИШЛИ ДАННЫЕ", this.form.map)
          })
          .catch((e) => {
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


