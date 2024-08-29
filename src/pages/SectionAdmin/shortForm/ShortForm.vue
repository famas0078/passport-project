
<template>
  <div class="wrapper mx-auto p-2 mb-4">
    <div class="description">
      <div class="description-title">
        {{ typesProject[typeForm - 1].text }}
      </div>

      <div class="item d-flex">
        <div v-if="infoProject.name">
          <div class="item-title">
            Название проекта
          </div>
          <div class="item-under">
            {{ infoProject.name }}
          </div>
        </div>
        <div v-if="infoProject.cityOfTheProject">
          <div class="item-title">
            Город проекта
          </div>
          <div class="item-under">
            {{ infoProject.cityOfTheProject }}
          </div>
        </div>
        <div v-if="infoProject.shortDescription">
          <div class="item-title">
            Краткая суть проекта
          </div>
          <div class="item-under">
            {{ infoProject.shortDescription }}
          </div>
        </div>
        <div v-if="infoProject.businessModel">
          <div class="item-title">
            Бизнес-модель (как проект будет зарабатывать)
          </div>
          <div class="item-under">
            {{ infoProject.businessModel }}
          </div>
        </div>
        <div v-if="infoProject.amountOfInvestment">
          <div class="item-title">
            Сумма инвестиций
          </div>
          <div class="item-under">
            {{ infoProject.amountOfInvestment }}
          </div>
        </div>
        <div v-if="infoProject.market">
          <div class="item-title">
            Рынок
          </div>
          <div class="item-under">
            {{ infoProject.market }}
          </div>
        </div>
        <div v-if="infoProject.projectStageId">
          <div class="item-title">
            На какой стадии реализации находится стартап?
          </div>
          <div class="item-under">
            {{ infoProject.projectStageId }}
          </div>
        </div>
        <div v-if="infoProject.solvedProblem">
          <div class="item-title">
            Какую проблему рынка/клиента решает стартап?
          </div>
          <div class="item-under">
            {{ infoProject.solvedProblem }}
          </div>
        </div>
        <div v-if="infoProject.advantageOfProjects">
          <div class="item-title">
            В чем преимущество стартапа в сравнении с конкурентами?
          </div>
          <div class="item-under">
            {{ infoProject.advantageOfProjects }}
          </div>
        </div>
        <div v-if="infoProject.presentation">
          <div class="item-title">
            Презентация (резюме)
          </div>
          <div class="item-under">
            <div @click="downloadFile(this.infoProject.presentation)" class="download-block cursor-pointer">
              Нажмите здесь для скачивания файла
            </div>
          </div>
        </div>
        <div v-if="infoProject.financialModel">
          <div class="item-title">
            Финансовая модель (бизнес-план, ТЭО)
          </div>
          <div class="item-under">
            <div @click="downloadFile(this.infoProject.financialModel)" class="download-block cursor-pointer">
              Нажмите здесь для скачивания файла
            </div>
          </div>
        </div>
        <div v-if="infoProject.fioOfLeader">
          <div class="item-title">
            ФИО инициатора проекта
          </div>
          <div class="item-under">
            {{ infoProject.fioOfLeader }}
          </div>
        </div>
        <div v-if="infoProject.intellectualProperty">
          <div class="item-title">
            Оформлена ли интеллектуальная собственность
          </div>
          <div class="item-under">
            {{ infoProject.intellectualProperty }}
          </div>
        </div>
        <div v-if="infoProject.site">
          <div class="item-title">
            Сайт
          </div>
          <div class="item-under">
            {{ infoProject.site }}
          </div>
        </div>
        <div v-if="infoProject.phone">
          <div class="item-title">
            Телефон
          </div>
          <div class="item-under">
            {{ infoProject.phone }}
          </div>
        </div>
        <div v-if="infoProject.email">
          <div class="item-title">
            E-mail
          </div>
          <div class="item-under">
            {{ infoProject.email }}
          </div>
        </div>
        <div v-if="infoProject.telegram">
          <div class="item-title">
            Телеграм
          </div>
          <div class="item-under">
            {{ infoProject.telegram }}
          </div>
        </div>
        <div class="wrapper-btn d-flex align-items-center justify-content-center my-3 position-relative mb-5">
          <div v-if="!isLoading" >
            <button class="btn btn-success mx-2" @click="putStatusShortProject(true)" :disabled="success">
              Принять
            </button>
            <button class="btn btn-danger mx-2" @click="putStatusShortProject(false)" :disabled="success">
              Отказать
            </button>
          </div>
          <div v-else class="loader-cover m-5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  name: "ShortForm",
  props: {
    typeForm: {
      type: [Boolean, Number],
      required: true
    },
    infoProject:{
      type: Object,
      required: true
    },
    putStatusShortProject:{
      type: Function,
      required: true
    },
    success: {
      type: Boolean,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      typesProject: [
        {
          id: 1,
          text: 'Инвестиционный проект (реальный сектор экономики)',
        },
        {
          id: 2,
          text: 'Стартап',
        },
        {
          id: 3,
          text: 'Бизнес-проект (создание нового бизнеса)',
        },
        {
          id: 4,
          text: 'Спонсорский проект',
        },
        {
          id: 5,
          text: 'Благотворительный проект',
        },
        {
          id: 6,
          text: 'Криптопроект',
        },
        {
          id: 7,
          text: 'Креативный проект',
        },
        {
          id: 8,
          text: 'Изобретение, технология, ноу-хау',
        },
        {
          id: 9,
          text: 'Инновация (улучшение или расширение возможностей экосистемы «Рантье»)',
        },
      ],
    }
  },
  methods: {
    downloadFile(path) {
      const url = `${this.BACK_URL}/${path}`;

      const fileName = url.split('/').pop();

      fetch(url)
          .then(response => response.blob())
          .then(blob => {
            const link = document.createElement('a');
            const url = window.URL.createObjectURL(blob);
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
          })
          .catch(error => console.error('Ошибка при скачивании файла:', error));
    }
  }
}
</script>

<style scoped>
.btn{
  padding: 15px 30px;
  font-family: HelveticaNeueCyr, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  color: #fff;
}
</style>