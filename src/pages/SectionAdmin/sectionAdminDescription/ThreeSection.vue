<template>

    <div class="wrapper mx-3">
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
                общие сведения о мероприятии (проекте)
            </div>

            <div class="item d-flex">

                <div class="item-title">
                    Тип мероприятия
                </div>
                <div class="item-under">
                   {{ infoProject.crowdfundingType.name }}
                </div>

                <div class="item-title">
                    Код ОКВЭД
                </div>
                <div class="item-under">
                    {{ infoProject.crowdfundingCodeOKVED.name }}
                </div>

                <div class="item-title">
                    Наименование мероприятия
                </div>
                <div class="item-under">
                    {{ infoProject.name }}
                </div>

                <div class="item-title">
                    Цель мероприятия
                </div>
                <div class="item-under">
                    {{ infoProject.goal }}
                </div>

                <div class="item-title">
                    Задача мероприятия
                </div>
                <div class="item-under">
                    {{ infoProject.tasks }}
                </div>

                <div class="item-title">
                    Город (регион) реализации проекта
                </div>
                <div class="item-under">
                    {{ infoProject.realizationLocation }}
                </div>

                <div class="item-title">
                    Дата начала реализации мероприятия
                </div>
                <div class="item-under">
                    {{ formatDate(infoProject.dateOfStartDesign) }}
                </div>

                <div class="item-title">
                    Дата выхода на проектную мощность
                </div>
                <div class="item-under">
                    {{ formatDate(infoProject.dateOfAfterWentOnProductionCapacity) }}
                </div>

                <div class="item-title">
                    Дата окончания реализации мероприятия
                </div>
                <div class="item-under">
                    {{ formatDate(infoProject.dateOfRealizationEnd) }}
                </div>

                <div class="item-title">
                    Статус реализации мероприятия
                </div>
                <div class="item-under">
                    {{ infoProject.crowdfundingDevelopmentStatus.name }}
                </div>

                <div class="item-title">
                    Источник финансирования мероприятия
                </div>
                <div class="item-under">
                    {{ infoProject.crowdfundingFinancingSourse[0].name }}
                </div>

                <div class="item-title">
                    Общая стоимость реализации мероприятия с НДС, млн. руб.
                </div>
                <div class="item-under">
                    {{ formatNumber(infoProject.cost) }}
                </div>

                <div class="item-title">
                    Потребность в строительстве объектов инженерно-технической и транспортной инфаструктуры для реализации проекта
                </div>
                <div class="item-under">
                    {{ infoProject.crowdfundingRequirementToConstructing.name }}
                </div>

                <div class="item-title">
                    Потребность в земельных ресурсах и (или) муниципальном имуществе
                </div>
                <div class="item-under">
                    {{ infoProject.requirementsOfLand }}
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
      }
    },
  methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr);
      const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
      ];
      const day = date.getUTCDate();
      const month = months[date.getUTCMonth()];
      const year = date.getUTCFullYear();
      return `${day} ${month} ${year} года`;
    },
    formatNumber(number) {
      return number.toLocaleString('ru-RU').replace(/,/g, ' ') + ' млн. руб.';
    }
  }
}
</script>

<style scoped>
</style>