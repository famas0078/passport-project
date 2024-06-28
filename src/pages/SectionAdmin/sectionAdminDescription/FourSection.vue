<template>

    <div class="wrapper">
        <div class="title">
            <div class="title-top d-flex">
                {{ infoProject.projectName }}
            </div>
            <div class="title-under d-flex">
                {{ infoProject.firstName }} {{ infoProject.middleName }} {{ infoProject.lastName }}
            </div>
        </div>
        <div class="description">
            <div class="description-title">
                Сведения о контактном лице
            </div>

            <div class="item d-flex">
                <div class="item-title">
                    Число создаваемых рабочих мест на период строительства, ед.
                </div>
                <div class="item-under">
                   {{ TargetIndicatorsProject.jobsСonstruction }}
                </div>
                <div class="item-title">
                    Число создаваемых рабочих мест при выходе на проектную мощьность
                </div>
                <div class="item-under">
                    {{ TargetIndicatorsProject.jobsFullCapacity }}
                </div>
                <div class="item-title">
                    Средняя номинально начисленная заработная плата работников
                </div>
                <div class="item-under">
                    {{ TargetIndicatorsProject.averageSalary }}
                </div>
                <div class="item-title">
                    Объем первоначальных инвестиций в основной капитал 
                </div>
                <div class="item-under">
                    {{ TargetIndicatorsProject.capital }}
                </div>
                <div class="item-title">
                    Объем налоговых платежей при выходе на проектную мощьность
                </div>
                <div class="item-under">
                    {{ TargetIndicatorsProject.taxes }}
                </div>
                <div class="item-title">
                    Объем производства в натуральных показателях при выходе на проектную мощьность
                </div>
                <div class="item-under">
                    {{ TargetIndicatorsProject.productionVolume }}
                </div>
                <div class="item-title">
                    Выручка при выходе на проектную мощьность
                </div>
                <div class="item-under">
                    {{ TargetIndicatorsProject.revenue }}
                </div>
                <div class="item-title">
                    Ожидаемая эффективность для коллективного инвестора (вкладчика)
                </div>
                <div class="item-under">
                    {{ TargetIndicatorsProject.expectedEfficiency }}
                </div>
            </div>
        </div>
    </div>
    
    </template>

<script>
export default{
    name: "OneSectionAdmin",
    props:{
        TargetIndicatorsProject:{
        type: Array,
        required: true
    },
    infoProject:{
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
</style>