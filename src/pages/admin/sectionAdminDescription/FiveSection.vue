<template>

    <div class="wrapper mx-auto p-2">
        <div class="title">
            <div class="title-top d-flex">
              {{ infoProject.name }}
            </div>
            <div class="title-under d-flex">
                {{ infoProject.firstName }} {{ infoProject.middleName }} {{ infoProject.lastName }}
            </div>
        </div>
        <div class="description">
            <div class="description-title">
                ДОПОЛНИТЕЛЬНЫЕ СВЕДЕНИЯ О ПРОЕКТЕ {{ this.$baseUrl }}
            </div>
            <div class="item d-flex">
                <div class="item-title">
                  Актуальность
                </div>
                <div class="item-under">
                   {{ infoProject.relevance }}
                </div>
                <div class="item-title">
                  Как Проект повлияет на развитие городской среды, бизнеса
                </div>
                <div class="item-under">
                    {{ infoProject.HowWillProjectAffectCity }}
                </div>
                <div class="item-title">
                  Карта-схема территориальной привязки
                </div>
                <div class="item-under">
                  <div @click="downloadFile(this.infoProject.map)" class="download-block cursor-pointer">
                    Нажмите здесь для скачивания файла
                  </div>
                </div>
                <div class="item-title">
                  Кто будет исполнителем проекта
                </div>
                <div class="item-under">
                    {{ infoProject.projectExecutor }}
                </div>
                <div class="item-title">
                  Составьте перечень предполагаемых участников проекта
                </div>
                <div class="item-under">
                    {{ infoProject.membersOfProject }}
                </div>
                <div class="item-title">
                  Опишите ожидаемые результаты (качественные и количественные)
                </div>
                <div class="item-under">
                  {{ infoProject.expectedResults }}
                </div>
                <div class="item-title">
                  Что нужно сделать для старта или дальнейшей успешной реализации Проекта
                </div>
                <div class="item-under">
                  {{ infoProject.whatNeedToDoForStartProject }}
                </div>
                <div class="item-title">
                  Ожидаемая эффективность для коллективного инвестора (вкладчика)
                </div>
                <div class="item-under">
                  {{ infoProject.expectedEffectivenessForInvestor }}
                </div>
                <div class="item-title">
                  Имеющиеся гарантии (обязательства) со стороны Инициатора и исполнителя (мероприятия) проекта для вкладчика
                </div>
                <div class="item-under">
                  <div v-for="(item, index) in infoProject.crowdfundingAvailableGuarantee">
                    {{ index + 1 }})
                    {{ item.name }}
                  </div>
                </div>
                <div class="item-title">
                  Презентация проекта
                </div>
                <div class="item-under">
                  <div @click="downloadFile(this.infoProject.proejctPresentation)" class="download-block cursor-pointer">
                    Нажмите здесь для скачивания файла
                  </div>
                </div>
              <div class="wrapper-btn d-flex align-items-center justify-content-center my-3">
                <div v-if="!isLoading">
                  <button class="btn btn-success mx-2" @click="putStatusProject(true)" :disabled="success">
                    Принять
                  </button>
                  <button class="btn btn-danger mx-2" @click="putStatusProject(false)" :disabled="success">
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
    name: "OneSectionAdmin",
    props:{
      infoProject:{
        type: Object,
        required: true
      },
      putStatusProject:{
        type: Function,
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
    mounted() {

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