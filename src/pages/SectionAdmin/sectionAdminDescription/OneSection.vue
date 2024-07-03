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
                Сведения о контактном лице
            </div>

            <div class="item d-flex">
                <div class="item-title">
                    Имя 
                </div>
                <div class="item-under">
                    {{ infoProject.firstName }}
                </div>
                <div class="item-title">
                    Отчество
                </div>
                <div class="item-under">
                    {{ infoProject.middleName }}
                </div>
                <div class="item-title">
                    Фамилия 
                </div>
                <div class="item-under">
                    {{ infoProject.lastName }}
                </div>
                <div class="item-title">
                    Телефон 
                </div>
                <div class="item-under">
                    {{ infoProject.phone }}
                </div>
                <div class="item-title">
                    Электронная почта 
                </div>
                <div class="item-under">
                    {{ infoProject.email }}
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
    }
  },
}
</script>

<style scoped>
</style>