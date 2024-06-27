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
                    Инициатор мероприятия 
                </div>
                <div class="item-under">
                   {{ iniciator.iniciator }}
                </div>
                <div class="item-title">
                    ОРГН
                </div>
                <div class="item-under">
                    {{ iniciator.ORGN }}
                </div>
                <div class="item-title">
                    Телефон инициатора мероприятия 
                </div>
                <div class="item-under">
                    {{ iniciator.tel }}
                </div>
                <div class="item-title">
                    Email инициатора мероприятия  
                </div>
                <div class="item-under">
                    {{ iniciator.email }}
                </div>
                <div class="item-title">
                    Веб-сайт инициатора мероприятия
                </div>
                <div class="item-under">
                    {{ iniciator.web }}
                </div>
            </div>
        </div>
    </div>
    
    </template>

<script>
export default{
    name: "OneSectionAdmin",
    props:{
    iniciator:{
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