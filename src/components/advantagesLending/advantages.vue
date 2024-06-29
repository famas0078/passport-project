<template>
    <div class="wrapper-advantages">
        <div class="container">
            <h5 class="title">
                7 преимуществ работы с рантье
            </h5>
            <div class="wrapper-dekstop">
                <div class="row g-4 mt-2 align-items-stretch">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../assets/img/1-sell.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Продажа инвестиционного портфеля в любой момент
                            </div>
                            <div class="des-card flex-grow-1">
                                Оплата основного долга и процентов производится каждые 7–14–30 дней (если речь идет о
                                проектах,
                                где вы выступаете в роли заемщиков)
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../assets/img/2.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Платформа работает под надзором ЦБ РФ
                            </div>
                            <div class="des-card flex-grow-1">
                                Наша платформа входит в реестр операторов инвестиционных платформ Центробанка РФ и
                                осуществляет
                                свою деятельность в строгом соответствии с Федеральным законом от 02.08.2019 N 259-ФЗ (ред.
                                от
                                11.03.2024) "О привлечении инвестиций с использованием инвестиционных платформ и о внесении
                                изменений в отдельные законодательные акты Российской Федерации"Ф
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../assets/img/3.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Регулярные платежи
                            </div>
                            <div class="des-card flex-grow-1">
                                Оплата основного долга и процентов производится каждые 7–14–30 дней (если речь идет о
                                проектах,
                                где вы выступаете в роли заемщиков)
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row g-4 mt-2 align-items-stretch">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../assets/img/4.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Низкий риск
                            </div>
                            <div class="des-card flex-grow-1">
                                ?????????????
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../assets/img/5.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Экспертиза проектов
                            </div>
                            <div class="des-card flex-grow-1">
                                К экспертизе проектов привлекаются эксперты Союза российских городов и Финансового
                                университета
                                при Правительстве РФ
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../assets/img/6.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Сильная диверсификация
                            </div>
                            <div class="des-card flex-grow-1">
                                При использовании одной из инвестиционных стратегий, встроенных в платформу, свободные
                                средства
                                распределяются между несколькими проектами, в соответствии с рекомендациями лучших
                                экспертов.
                                Тем самым, риски сводятся к минимуму
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row g-4 mt-2 align-items-stretch">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../assets/img/7.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Юридическая защита
                            </div>
                            <div class="des-card flex-grow-1">
                                Интересы инвесторов максимально защищены юридически
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-12 col-12">
                        <div class="card-item d-flex">
                            <div class="card-text">
                                <h3 class="title-card-register">
                                    Зарегистрируйтесь и убедитесь сами!
                                </h3>
                                <div class="des-card flex-grow-1">
                                    Регистрируйтесь и узнайте все преимущества первым лицом. Ощутите разницу сами!
                                </div>
                                <div class="group-btn">
                                    <div class="btn-to-register d-flex justify-content-center">
                                        <router-link to="" class="btn-a">Зарегистрироваться</router-link>
                                    </div>
                                    <div class="btn-to-invest d-flex justify-content-center">
                                        <router-link to="" class="btn-a">Начать инвестировать</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="card-image flex-shrink-0">
                                <img src="../../assets/img/8.svg" alt="" class="img-fluid mw-100">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper-mobile">
                <div class="row">
                    <div class="col-12" v-if="ActiveSlide === 1">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../assets/img/1-sell.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Продажа инвестиционного портфеля в любой момент
                            </div>
                            <div class="des-card flex-grow-1">
                                Оплата основного долга и процентов производится каждые 7–14–30 дней (если речь идет о
                                проектах,
                                где вы выступаете в роли заемщиков)
                            </div>
                        </div>
                    </div>

                    <div class="col-12" v-if="ActiveSlide === 2"
                        :class="{ 'slide-enter': ActiveSlide === 2, 'slide-leave': ActiveSlide !== 2 }">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../assets/img/2.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Платформа работает под надзором ЦБ РФ
                            </div>
                            <div class="des-card flex-grow-1">
                                Наша платформа входит в реестр операторов инвестиционных платформ Центробанка РФ и
                                осуществляет свою деятельность в строгом соответствии с Федеральным законом от 02.08.2019 N
                                259-ФЗ (ред. от 11.03.2024) "О привлечении инвестиций с использованием инвестиционных
                                платформ и о внесении изменений в отдельные законодательные акты Российской Федерации"Ф
                            </div>
                        </div>
                    </div>

                    <div class="col-12" v-if="ActiveSlide === 3"
                        :class="{ 'slide-enter': ActiveSlide === 3, 'slide-leave': ActiveSlide !== 3 }">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../assets/img/3.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Регулярные платежи
                            </div>
                            <div class="des-card flex-grow-1">
                                Оплата основного долга и процентов производится каждые 7–14–30 дней (если речь идет о
                                проектах, где вы выступаете в роли заемщиков)
                            </div>
                        </div>
                    </div>

                    <div class="col-12" v-if="ActiveSlide === 4"
                        :class="{ 'slide-enter': ActiveSlide === 4, 'slide-leave': ActiveSlide !== 4 }">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../assets/img/4.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Низкий риск
                            </div>
                            <div class="des-card flex-grow-1">
                                ?????????????
                            </div>
                        </div>
                    </div>

                    <div class="col-12" v-if="ActiveSlide === 5"
                        :class="{ 'slide-enter': ActiveSlide === 5, 'slide-leave': ActiveSlide !== 5 }">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../assets/img/5.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Экспертиза проектов
                            </div>
                            <div class="des-card flex-grow-1">
                                К экспертизе проектов привлекаются эксперты Союза российских городов и Финансового
                                университета при Правительстве РФ
                            </div>
                        </div>
                    </div>

                    <div class="col-12" v-if="ActiveSlide === 6"
                        :class="{ 'slide-enter': ActiveSlide === 6, 'slide-leave': ActiveSlide !== 6 }">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../assets/img/6.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Сильная диверсификация
                            </div>
                            <div class="des-card flex-grow-1">
                                При использовании одной из инвестиционных стратегий, встроенных в платформу, свободные
                                средства распределяются между несколькими проектами, в соответствии с рекомендациями лучших
                                экспертов. Тем самым, риски сводятся к минимуму
                            </div>
                        </div>
                    </div>

                    <div class="col-12" v-if="ActiveSlide === 7"
                        :class="{ 'slide-enter': ActiveSlide === 7, 'slide-leave': ActiveSlide !== 7 }">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../assets/img/7.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Юридическая защита
                            </div>
                            <div class="des-card flex-grow-1">
                                Интересы инвесторов максимально защищены юридически
                            </div>
                        </div>
                    </div>

                    <div class="col-12" v-if="ActiveSlide === 8"
                        :class="{ 'slide-enter': ActiveSlide === 8, 'slide-leave': ActiveSlide !== 8 }">
                        <div class="card-item d-flex">
                            <div class="card-text">
                                <div class="card-image flex-shrink-0 d-flex">
                                    <img src="../../assets/img/8.svg" alt="" height="167px" width="205px">
                                </div>
                                <h3 class="title-card-register">
                                    Зарегистрируйтесь и убедитесь сами!
                                </h3>
                                <div class="des-card flex-grow-1">
                                    Регистрируйтесь и узнайте все преимущества первым лицом. Ощутите разницу сами!
                                </div>
                                <div class="group-btn">
                                    <div class="btn-to-register d-flex justify-content-center">
                                        <router-link to="" class="btn-a">Зарегистрироваться</router-link>
                                    </div>
                                    <div class="btn-to-invest d-flex justify-content-center">
                                        <router-link to="" class="btn-a">Начать инвестировать</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="paggination d-flex">
                    <div class="arrow" @click="LastSlide()">
                        <img src="../../assets/img/Arrow_Left_LG.svg" alt="">
                    </div>
                    <div class="arrow" @click="NextSlide()">
                        <img src="../../assets/img/Arrow_Right_LG.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            ActiveSlide: 1,
            ActiveArrowLeft: false,
            ActiveArrowRight: false,
        }
    },
    methods: {
        NextSlide() {
            if (this.ActiveSlide < 8) {
                this.ActiveSlide += 1
            }
        },
        LastSlide() {
            if (this.ActiveSlide > 1) {
                this.ActiveSlide -= 1
            }
        }
    }
}
</script>


<style scoped>
.slide-enter {
    animation: slide-enter 0.5s ease-out;
}

.slide-leave {
    animation: slide-leave 0.5s ease-in;
}

@keyframes slide-enter {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slide-leave {
    0% {
        opacity: 1;
        transform: translateX(0);
    }

    100% {
        opacity: 0;
        transform: translateX(-50px);
    }
}
</style>