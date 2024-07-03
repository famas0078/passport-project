
<template>
  <div class="wrapper container">
    <HeaderAdmin v-model:search="search" v-model:statusId="statusId" :getSearch="getSearch" :status="status"/>
    <div class="admin-list h-100">
      <table v-if="!isLoading" class="w-100 " border="0" cellspacing="0" cellpadding="0">
        <thead class="wrapper_table">
          <tr>
            <th class="item-list">Название проекта</th>
            <th class="item-list">ФИО</th>
            <th class="item-list">Статус</th>
          </tr>
        </thead>
        <tbody v-if="arrayProject.length > 0">
        <tr v-for="(item, index) in arrayProject" :key="index" class="w-100 item-list-spisok cursor-pointer" @click="OpenDescriptionProject(item.id)">
          <td class="item_name text-left">{{ item.name }}</td>
          <td class="item_fio">{{ item.firstName }} {{ item.lastName }} {{ item.middleName }}</td>
          <td v-if="item.crowdfundingStatus && item.crowdfundingStatus.id === 3" class="item_status d-flex">
            <img src="../../assets/img/TwoStatusProject.svg" alt="">
            <div class="item_status_text">Принята</div>
          </td>
          <td v-if="item.crowdfundingStatus && item.crowdfundingStatus.id === 2" class="item_status d-flex">
            <img src="../../assets/img/ThreeStatusProject.svg" alt="">
            <div class="item_status_text">Отклонена</div>
          </td>
          <td v-if="item.crowdfundingStatus && item.crowdfundingStatus.id === 1" class="item_status d-flex">
            <img src="../../assets/img/OneStatusProject.svg" alt="">
            <div class="item_status_text">Не рассмотрена</div>
          </td>
        </tr>
        </tbody>
        <div class="my-5" v-else>
         Таких проектов не существует
        </div>
      </table>
      <div v-if="!isLoading" class="accordion" id="accordion">
        <div v-for="(item, index) in arrayProject" class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+ index" aria-expanded="false" :aria-controls="'collapseOne' + index">
              {{ item.name }}
            </button>
          </h2>
          <div :id="'collapse' + index" class="accordion-collapse collapse cursor-pointer" data-bs-parent="#accordion" @click="OpenDescriptionProject(item.id)">
            <div class="accordion-body">
              <div class="wrapper-fio my-3">
                <p>
                  <b>
                    ФИО
                  </b>
                </p>
                <p class="my-2">
                  {{ item.firstName }} {{ item.lastName }} {{ item.middleName }}
                </p>
              </div>
              <div class="wrapper-status my-3">
                <p>
                  <b>
                    СТАТУС
                  </b>
                </p>
                <p v-if="item.crowdfundingStatus && item.crowdfundingStatus.id === 3 " class="item_status d-flex justify-content-center align-items-center my-2"> <img src="@/assets/img/TwoStatusProject.svg" alt=""><div class="item_status_text">Отклонена</div></p>
                <p v-if="item.crowdfundingStatus && item.crowdfundingStatus.id === 2 " class="item_status d-flex justify-content-center align-items-center my-2"> <img src="@/assets/img/ThreeStatusProject.svg" alt=""><div class="item_status_text">Принята</div></p>
                <p v-if="item.crowdfundingStatus && item.crowdfundingStatus.id === 1 " class="item_status d-flex justify-content-center align-items-center my-2"> <img src="@/assets/img/OneStatusProject.svg" alt=""><div class="item_status_text">Не рассмотрена</div></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-pagination" v-if="countOfPages > 1 && !isLoading">
        <div class="paggination">
          <div class="wrapper">
            <div class="wrapper-slider d-flex justify-content-around position-relative">
              <img class="arrow" src="@/assets/img/Chevron_Left.svg" alt="" @click="PrevNextSection()">
              <div v-for="(item, index) in countOfPages" class="d-flex align-items-center justify-content-center flex-column">
                <div
                    :class="{
            'wrapper-slider-item-back': activePage === index + 1,
            'wrapper-slider-item': activePage !== index + 1 && activePage < index + 1,
          }"
                    @click="OpenCurrentSection(index + 1)"
                >
                  <div
                      class="d-flex align-items-center justify-content-center h-100 w-100"
                  >
                    <div
                        :class="{
                'wrapper-slider-item-text-white':
                activePage === index + 1,
                'wrapper-slider-item-text':
                activePage !== index + 1,
              }"
                    >
                      {{ index + 1 }}
                    </div>
                  </div>
                </div>
              </div>
              <img class="arrow" src="@/assets/img/Chevron_Right.svg" alt="" @click="OpenNextSection()">
            </div>
          </div>
        </div>
        <div class="arrow-right">

        </div>
      </div>
      <div v-if="isLoading" class="loaderSearch"></div>
    </div>
  </div>
</template>

<script>
import HeaderAdmin from "@/components/headerAdmin/headerAdmin.vue";
import СrowdfundingDataServices from "@/services/СrowdfundingDataServices";
import ProjectsDataServices from '@/services/ProjectsDataServices'

export default {
  name: "AdminList",
  components: { HeaderAdmin },
  data() {
    return {
      status: null,
      statusId: localStorage.getItem('statusId') ? localStorage.getItem('statusId') : 0,
      search: null,
      arrayProject: [
        {
          id: 1,
          name: "Создание инновационного центра по развитию технологий будущего.Создание инновационного центра по развитию технологий будущего",
          fio: "Василий Васильевич Василий",
          status: 1
        },
        {
          id: 2,
          name: "проект 2",
          fio: "Василий Васильевич Василий",
          status: 2
        },
        {
          id: 3,
          name: "проект 3",
          fio: "Василий Васильевич Василий",
          status: 3
        },
        {
          id: 4,
          name: "проект 4",
          fio: "4@mail.ru",
          status: 1
        },
        {
          id: 5,
          name: "проект 5",
          fio: "5@mail.ru",
          status: 1
        },
        {
          id: 6,
          name: "проект 6",
          fio: "6@mail.ru",
          status: 2
        },
        {
          id: 7,
          name: "проект 1",
          fio: "1@mail.ru",
          status: 1
        },
        {
          id: 8,
          name: "проект 1",
          fio: "1@mail.ru",
          status: 1
        },
        {
          id: 9,
          name: "проект 1",
          fio: "1@mail.ru",
          status: 1
        },
        {
          id: 10,
          name: "проект 1",
          fio: "1@mail.ru",
          status: 1
        },
        {
          id: 11,
          name: "проект 1",
          fio: "1@mail.ru",
          status: 1
        },
        {
          id: 12,
          name: "проект 1",
          fio: "1@mail.ru",
          status: 1
        },
        {
          id: 13,
          name: "проект 1",
          fio: "1@mail.ru",
          status: 1
        },
        {
          id: 14,
          name: "проект 1",
          fio: "1@mail.ru",
          status: 1
        },
        {
          id: 15,
          name: "проект 1",
          fio: "1@mail.ru",
          status: 1
        },
        {
          id: 16,
          name: "проект 1",
          fio: "1@mail.ru",
          status: 1
        },
        {
          id: 17,
          name: "проект 1",
          fio: "1@mail.ru",
          status: 1
        },
        {
          id: 18,
          name: "проект 1",
          fio: "1@mail.ru",
          status: 1
        },
        {
          id: 19,
          name: "проект 21",
          fio: "21@mail.ru",
          status: 3
        },
        {
          id: 20,
          name: "проект 21",
          fio: "21@mail.ru",
          status: 3
        },
      ],
      countOfPages: null,
      page: 1,
      pageSize: 2,
      activePage: 1,
      isLoading: true,
    }
  },
  mounted(){
    this.getStatus()
    this.getAllProjects()
  },
  methods: {
    OpenDescriptionProject(id) {
      this.$router.push({ name: 'AdminDescriptionPage', params: { id: id } });
    },
    async getAllProjects() {
      this.isLoading = true
      ProjectsDataServices.getAllProjects(this.pageSize, this.activePage, this.statusId, this.search)
          .then( (response) => {
            this.countOfPages = response.data.countOfPages;
            this.arrayProject = response.data.values
            console.log("Проекты", response.data)
            this.isLoading = false
          })
          .catch((e) => {
            this.isLoading = false
            console.log(e)
          })
    },
    async getStatus() {
      await СrowdfundingDataServices.getStatus()
          .then( (response) => {
            this.status = response.data
            console.log(this.status)
            this.isLoading = false
          })
          .catch((e) => {
            this.isLoading = false
            console.log(e)
          })
    },
    getSearch(){
      this.activePage = 1
      this.getAllProjects()
    },
    OpenNextSection(){
      console.log('OpenNextSection')
      if (this.activePage < this.countOfPages){
        this.activePage += 1
        this.getAllProjects(this.pageSize, this.activePage, this.statusId, this.search)
      }
    },
    PrevNextSection(){
      if (this.activePage > 1){
        this.activePage -= 1
        this.getAllProjects()
      }
    },
    OpenCurrentSection(id){
      this.activePage = id
      this.getAllProjects()
    }
  }
}
</script>


<style scoped>
.item_name{
  font-family: HelveticaNeueCyr;
  font-size: 20px;
  font-weight: 550;
  line-height: 21px;
  text-align: left;
  color: #015458;
}
.arrow{
  cursor: pointer;
}
.admin-list{
  min-height: 400px;
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