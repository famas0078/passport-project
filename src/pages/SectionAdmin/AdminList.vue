
<template>
  <div class="wrapper container">
    <HeaderAdmin />
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
          <tr v-for="(item, index) in arrayProject" class="w-100 item-list-spisok">
            <td class="item_name">{{ item.name }}</td>
            <td class="item_fio">{{ item.fio }}</td>
            <td v-if="item.status === 3 " class="item_status d-flex"> <img src="../../assets/img/ThreeStatusProject.svg" alt=""><div class="item_status_text">Отклонена</div></td>
            <td v-if="item.status === 2 " class="item_status d-flex"> <img src="../../assets/img/TwoStatusProject.svg" alt=""><div class="item_status_text">Принята</div></td>
            <td v-if="item.status === 1 " class="item_status d-flex"> <img src="../../assets/img/OneStatusProject.svg" alt=""><div class="item_status_text">Не рассмотрена</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import HeaderAdmin from "@/components/headerAdmin/headerAdmin.vue";

export default {
  name: "AdminList",
  components: { HeaderAdmin },
  data() {
    return {
      arrayProject: [
        {
          id: 1,
          name: "Создание инновационного центра по развитию технологий будущего",
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
  methods: {
  }
}
</script>


<style scoped></style>