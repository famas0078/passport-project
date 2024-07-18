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
                Сведения об инициаторе мероприятия (проекта)
            </div>

            <div class="item d-flex">
                <div class="item-title">
                    Инициатор мероприятия 
                </div>
                <div class="item-under">
                   {{ infoProject.initiator }}
                </div>
                <div class="item-title">
                    ОРГН
                </div>
                <div class="item-under">
                    {{ infoProject.OGRN }}
                </div>
                <div class="item-title">
                    Телефон инициатора мероприятия 
                </div>
                <div class="item-under">
                    {{ infoProject.initiatorPhone }}
                </div>
                <div class="item-title">
                    Email инициатора мероприятия  
                </div>
                <div class="item-under">
                    {{ infoProject.initiatorEmail }}
                </div>
                <div class="item-title">
                    Веб-сайт инициатора мероприятия
                </div>
                <div class="item-under">
                    {{ infoProject.initiatorSite }}
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
      },
  },
}
</script>

<style scoped>
</style>