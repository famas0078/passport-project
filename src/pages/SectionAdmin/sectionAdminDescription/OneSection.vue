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
                    Имя 
                </div>
                <div class="item-under">
                    {{ contact.firstName }}
                </div>
                <div class="item-title">
                    Отчество
                </div>
                <div class="item-under">
                    {{ contact.middleName }}
                </div>
                <div class="item-title">
                    Фамилия 
                </div>
                <div class="item-under">
                    {{ contact.lastName }}
                </div>
                <div class="item-title">
                    Телефон 
                </div>
                <div class="item-under">
                    {{ contact.tel }}
                </div>
                <div class="item-title">
                    Электронная почта 
                </div>
                <div class="item-under">
                    {{ contact.email }}
                </div>

            </div>
        </div>
    </div>
    
    </template>

<script>
export default{
    name: "OneSectionAdmin",
    props:{
    contact:{
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