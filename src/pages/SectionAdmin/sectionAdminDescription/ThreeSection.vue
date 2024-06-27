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
                    Тип мероприятия 
                </div>
                <div class="item-under">
                   {{ desProject.type }}
                </div>

                <div class="item-title">
                    Код ОКВЭД
                </div>
                <div class="item-under">
                    {{ desProject.OCVD }}
                </div>

                <div class="item-title">
                    Наименование мероприятия 
                </div>
                <div class="item-under">
                    {{ desProject.nameProject }}
                </div>

                <div class="item-title">
                    Цель мероприятия 
                </div>
                <div class="item-under">
                    {{ desProject.goalProject }}
                </div>

                <div class="item-title">
                    Задача мероприятия
                </div>
                <div class="item-under">
                    {{ desProject.taskProject }}
                </div>

                <div class="item-title">
                    Город (регион) реализации проекта
                </div>
                <div class="item-under">
                    {{ desProject.cityRealizations }}
                </div>

                <div class="item-title">
                    Дата начала реализации мероприятия
                </div>
                <div class="item-under">
                    {{ desProject.dateStart }}
                </div>

                <div class="item-title">
                    Дата выхода на проектную мощность
                </div>
                <div class="item-under">
                    {{ desProject.dateExit }}
                </div>

                <div class="item-title">
                    Дата окончания реализации мероприятия
                </div>
                <div class="item-under">
                    {{ desProject.dateEnd }}
                </div>

                <div class="item-title">
                    Статус реализации мероприятия
                </div>
                <div class="item-under">
                    {{ desProject.statusRealization }}
                </div>

                <div class="item-title">
                    Источник финансирования мероприятия
                </div>
                <div class="item-under">
                    {{ desProject.sourceFinancing }}
                </div>

                <div class="item-title">
                    Общая стоимость реализации мероприятия с НДС, млн. руб.
                </div>
                <div class="item-under">
                    {{ desProject.cost }}
                </div>
                
                <div class="item-title">
                    Потребность в строительстве объектов инженерно-технической и транспортной инфаструктуры для реализации проекта
                </div>
                <div class="item-under">
                    {{ desProject.needСconstruction }}
                </div>
                
                <div class="item-title">
                    Потребность в земельных ресурсах и (или) муниципальном имуществе
                </div>
                <div class="item-under">
                    {{ desProject.needLandResources }}
                </div>
            </div>
        </div>
    </div>
    
    </template>

<script>
export default{
    name: "OneSectionAdmin",
    props:{
        desProject:{
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