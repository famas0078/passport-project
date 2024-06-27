
<template>

<OneSection v-if="activeSectionDescription === 1" :contact = descriptionProject[0].contact[0] :infoProject = descriptionProject[0].infoProject[0] />
<TwoSection v-if="activeSectionDescription === 2" :iniciator = descriptionProject[0].iniciator[0] :infoProject = descriptionProject[0].infoProject[0] />
<div class="wrapper-pagination">
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
 
</template>

<script>
import OneSection from './sectionAdminDescription/OneSection.vue';
import TwoSection from './sectionAdminDescription/TwoSection.vue';
export default{
    name: "AdminList",
    components: {
        OneSection,
        TwoSection
    },
    data(){
        return{
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
        }
        
        
    },
    methods:{
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