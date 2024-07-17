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
                ЦЕЛЕВЫЕ ПОКАЗАТЕЛИ МЕРОПРИЯТИЯ (ПРОЕКТА)
            </div>

            <div class="item d-flex">
                <div class="item-title">
                    Число создаваемых рабочих мест на период строительства, ед.
                </div>
                <div class="item-under">
                  {{ formatNumberItem(infoProject.countOfNewJobs) }}
                </div>
                <div class="item-title">
                    Число создаваемых рабочих мест при выходе на проектную мощьность
                </div>
                <div class="item-under">
                    {{ formatNumberItem(infoProject.countOfNewJobsAfterWentOnProductionCapacity) }}
                </div>
                <div class="item-title">
                    Средняя номинально начисленная заработная плата работников
                </div>
                <div class="item-under">
                    {{ formatNumberK(infoProject.avarageSalary) }}
                </div>
                <div class="item-title">
                    Объем первоначальных инвестиций в основной капитал 
                </div>
                <div class="item-under">
                    {{ formatNumber(infoProject.amountOfInitialInvestmentOfMainCapital) }}
                </div>
                <div class="item-title">
                    Объем налоговых платежей при выходе на проектную мощьность
                </div>
                <div class="item-under">
                    {{ formatNumber(infoProject.averageTaxAfterWentOnProductionCapacity) }}
                </div>
                <div class="item-title">
                    Объем производства в натуральных показателях при выходе на проектную мощьность
                </div>
                <div class="item-under">
                    {{ formatNumberItem(infoProject.amountOfOutputAfterWentOnProductionCapacity) }}
                </div>
                <div class="item-title">
                    Выручка при выходе на проектную мощьность
                </div>
                <div class="item-under">
                    {{ formatNumber(infoProject.revenueOutputAfterWentOnProductionCapacity) }}
                </div>
                <div class="item-title">
                    Ожидаемая эффективность для коллективного инвестора (вкладчика)
                </div>
                <div class="item-under">
                    {{ infoProject.expectedEffectivenessAfterWentOnProductionCapacity }}
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
        type: Array,
        required: true
      }
    },
  methods: {
    formatNumber(number) {
      return number.toLocaleString('ru-RU').replace(/,/g, ' ') + ' млн. руб.';
    },
    formatNumberK(number) {
      return number.toLocaleString('ru-RU').replace(/,/g, ' ') + ' тыс. руб.';
    },
    formatNumberItem(number) {
      return number.toLocaleString('ru-RU').replace(/,/g, ' ') + ' ед.';
    }
  }
}
</script>

<style scoped>
</style>