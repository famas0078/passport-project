
<template>
  <div class="wrapper container">
    <HeaderAdmin :status="status"/>
    <div class="admin-list">
      <table class="w-100 " border="0" cellspacing="0" cellpadding="0">
        <thead class="wrapper_table">
          <tr>
            <th class="item-list">Название проекта</th>
            <th class="item-list">ФИО</th>
            <th class="item-list">Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in arrayProject" class="w-100 item-list-spisok" @click="OpenDescriptionProject(item.id)">
            <td class="item_name">{{ item.name }}</td>
            <td class="item_fio">{{ item.fio }}</td>
            <td v-if="item.status === 3 " class="item_status d-flex"> <img src="../../assets/img/ThreeStatusProject.svg" alt=""><div class="item_status_text">Отклонена</div></td>
            <td v-if="item.status === 2 " class="item_status d-flex"> <img src="../../assets/img/TwoStatusProject.svg" alt=""><div class="item_status_text">Принята</div></td>
            <td v-if="item.status === 1 " class="item_status d-flex"> <img src="../../assets/img/OneStatusProject.svg" alt=""><div class="item_status_text">Не рассмотрена</div></td>
          </tr>
        </tbody>
      </table>
      <div class="accordion" id="accordion">
        <div v-for="(item, index) in arrayProject" class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+ index" aria-expanded="false" :aria-controls="'collapseOne' + index">
              {{ item.name }}
            </button>
          </h2>
          <div :id="'collapse' + index" class="accordion-collapse collapse" data-bs-parent="#accordion">
            <div class="accordion-body">
              <div class="wrapper-fio my-3">
                <p>
                  <b>
                    ФИО
                  </b>
                </p>
                <p class="my-2">
                  {{ item.fio }}
                </p>
              </div>
              <div class="wrapper-status my-3">
                <p>
                  <b>
                    СТАТУС
                  </b>
                </p>
                <p v-if="item.status === 3 " class="item_status d-flex justify-content-center align-items-center my-2"> <img src="../../assets/img/ThreeStatusProject.svg" alt=""><div class="item_status_text">Отклонена</div></p>
                <p v-if="item.status === 2 " class="item_status d-flex justify-content-center align-items-center my-2"> <img src="../../assets/img/TwoStatusProject.svg" alt=""><div class="item_status_text">Принята</div></p>
                <p v-if="item.status === 1 " class="item_status d-flex justify-content-center align-items-center my-2"> <img src="../../assets/img/OneStatusProject.svg" alt=""><div class="item_status_text">Не рассмотрена</div></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAdmin from "@/components/headerAdmin/headerAdmin.vue";
import СrowdfundingDataServices from "@/services/СrowdfundingDataServices";

export default {
  name: "AdminList",
  components: { HeaderAdmin },
  data() {
    return {
      status: null,
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
    }
  },
  mounted(){
    this.getStatus()
  },
  methods: {
    OpenDescriptionProject(id) {
      this.$router.push({ name: 'AdminDescriptionPage', params: { id: id } });
    },
    async getStatus() {
      await СrowdfundingDataServices.getStatus()
          .then( (response) => {
            this.status = response.data
            console.log(this.status)
          })
          .catch((e) => {
            console.log(e)
          })
    }
  }
}
</script>


<style scoped></style>