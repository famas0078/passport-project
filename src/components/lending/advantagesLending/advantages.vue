<template>
    <div class="wrapper-advantages">
        <div class="container">
            <h5 class="title" ref="title" :class="{ 'slide-enter-top': animationPlayed.title, 'isVisible': !animationPlayed.title }">
                7 преимуществ работы с рантье
            </h5>
            <div class="wrapper-dekstop">
                <div class="row g-4 mt-2 align-items-stretch">
                    <div ref="card1" :class="{ 'slide-enter-left': animationPlayed.card1, 'isVisible': !animationPlayed.card1 }" class="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../../assets/img/lendingPages/1-sell.svg" alt="" weight="70px" height="70px">
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

                    <div ref="card2" :class="{ 'slide-enter-top': animationPlayed.card2, 'isVisible': !animationPlayed.card2 }" class="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../../assets/img/lendingPages/2.svg" alt="" weight="70px" height="70px">
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

                    <div ref="card3" :class="{ 'slide-enter-right': animationPlayed.card3, 'isVisible': !animationPlayed.card3 }" class="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../../assets/img/lendingPages/3.svg" alt="" weight="70px" height="70px">
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
                    <div ref="card4" :class="{ 'slide-enter-left': animationPlayed.card4, 'isVisible': !animationPlayed.card4 }" class="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../../assets/img/lendingPages/4.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Низкий риск
                            </div>
                            <div class="des-card flex-grow-1">
                                Низкий риск
                            </div>
                        </div>
                    </div>

                    <div ref="card5" :class="{ 'slide-enter-top': animationPlayed.card5, 'isVisible': !animationPlayed.card5 }" class="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../../assets/img/lendingPages/5.svg" alt="" weight="70px" height="70px">
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

                    <div ref="card6" :class="{ 'slide-enter-right': animationPlayed.card6, 'isVisible': !animationPlayed.card6 }" class="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../../assets/img/lendingPages/6.svg" alt="" weight="70px" height="70px">
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
                    <div ref="card7" :class="{ 'slide-enter-left': animationPlayed.card7, 'isVisible': !animationPlayed.card7 }" class="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../../assets/img/lendingPages/7.svg" alt="" weight="70px" height="70px">
                            <div class="title-card">
                                Юридическая защита
                            </div>
                            <div class="des-card flex-grow-1">
                                Интересы инвесторов максимально защищены юридически
                            </div>
                        </div>
                    </div>
                    <div ref="card8" :class="{ 'slide-enter-right': animationPlayed.card8, 'isVisible': !animationPlayed.card8 }" class="col-xl-8 col-lg-8 col-md-12 col-12">
                        <div class="card-item d-flex">
                            <div class="card-text">
                                <h3 class="title-card-register">
                                    Заполните анкету и убедитесь сами!
                                </h3>
                                <div class="des-card flex-grow-1">
                                    Заполните анкету и узнайте все преимущества первым лицом. Ощутите разницу сами!
                                </div>
                                <div class="group-btn">
                                    <div class="btn-to-register d-flex justify-content-center">
                                        <router-link to="/passport" class="btn-anketa">Заполнить анкету</router-link>
                                    </div>
                                    <div class="btn-to-invest d-flex justify-content-center">
                                        <router-link to="#becomeInvestor" class="btn-investment">Начать инвестировать</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="card-image flex-shrink-0">
                                <img src="../../../assets/img/lendingPages/8.svg" alt="" class="img-fluid mw-100">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref="card9" class="wrapper-mobile" :class="{ 'slide-enter-top': animationPlayed.card9, 'isVisible': !animationPlayed.card9 }">
                <div class="row">
                    <div class="col-12" v-if="ActiveSlide === 1">
                        <div class="card-item d-flex flex-column h-100">
                            <img src="../../../assets/img/lendingPages/1-sell.svg" alt="" weight="70px" height="70px">
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
                            <img src="../../../assets/img/lendingPages/2.svg" alt="" weight="70px" height="70px">
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
                            <img src="../../../assets/img/lendingPages/3.svg" alt="" weight="70px" height="70px">
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
                            <img src="../../../assets/img/lendingPages/4.svg" alt="" weight="70px" height="70px">
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
                            <img src="../../../assets/img/lendingPages/5.svg" alt="" weight="70px" height="70px">
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
                            <img src="../../../assets/img/lendingPages/6.svg" alt="" weight="70px" height="70px">
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
                            <img src="../../../assets/img/lendingPages/7.svg" alt="" weight="70px" height="70px">
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
                                    <img src="../../../assets/img/lendingPages/8.svg" alt="" height="167px" width="205px">
                                </div>
                                <h3 class="title-card-register">
                                  Создайте свой проект
                                </h3>
                                <div class="des-card flex-grow-1">
                                  На этом этапе выполните все необходимые шаги для запуска своего проекта в действие.
                                </div>
                              <div class="group-btn">
                                <div class="btn-to-register d-flex justify-content-center">
                                  <router-link to="/passport" class="btn-anketa">Заполнить анкету</router-link>
                                </div>
                                <div class="btn-to-invest d-flex justify-content-center">
                                  <router-link to="#becomeInvestor" class="btn-investment">Начать инвестировать</router-link>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="paggination d-flex">
                    <div class="arrow" @click="LastSlide()">
                        <img src="../../../assets/img/lendingPages/Arrow_Left_LG.svg" alt="">
                    </div>
                    <div class="arrow" @click="NextSlide()">
                        <img src="../../../assets/img/lendingPages/Arrow_Right_LG.svg" alt="">
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
            isVisible: {
                card1: false,
                card2: false,
                card3: false,
                card4: false,
                card5: false,
                card6: false,
                card7: false,
                card8: false,
                card9: false,
                title: false,
            },
            animationPlayed: {
                card1: false,
                card2: false,
                card3: false,
                card4: false,
                card5: false,
                card6: false,
                card7: false,
                card8: false,
                card9: false,
                title: false,
            },
        }
    },
    mounted() {
        this.initIntersectionObserver();
    },
    methods: {
        initIntersectionObserver() {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            };

            this.observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === this.$refs.card1) {
                            this.isVisible.card1 = true;
                            this.animationPlayed.card1 = true;
                        } else if (entry.target === this.$refs.card2) {
                            this.isVisible.card2 = true;
                            this.animationPlayed.card2 = true;
                        } else if (entry.target === this.$refs.card3) {
                            this.isVisible.card3 = true;
                            this.animationPlayed.card3 = true;
                        } else if (entry.target === this.$refs.card4) {
                            this.isVisible.card4 = true;
                            this.animationPlayed.card4 = true;
                        }else if (entry.target === this.$refs.card5) {
                            this.isVisible.card5 = true;
                            this.animationPlayed.card5 = true;
                        }else if (entry.target === this.$refs.card6) {
                            this.isVisible.card6 = true;
                            this.animationPlayed.card6 = true;
                        }else if (entry.target === this.$refs.title) {
                            this.isVisible.title = true;
                            this.animationPlayed.title = true;
                        }else if (entry.target === this.$refs.card7) {
                            this.isVisible.card7 = true;
                            this.animationPlayed.card7 = true;
                        }else if (entry.target === this.$refs.card8) {
                            this.isVisible.card8 = true;
                            this.animationPlayed.card8 = true;
                        }else if (entry.target === this.$refs.card9) {
                            this.isVisible.card9 = true;
                            this.animationPlayed.card9 = true;
                        }
                    } else {
                        if (entry.target === this.$refs.card1) {
                            this.isVisible.card1 = false;
                        } else if (entry.target === this.$refs.card2) {
                            this.isVisible.card2 = false;
                        } else if (entry.target === this.$refs.card3) {
                            this.isVisible.card3 = false;
                        } else if (entry.target === this.$refs.card4) {
                            this.isVisible.card4 = false;
                        }else if (entry.target === this.$refs.card5) {
                            this.isVisible.card5 = false;
                        }else if (entry.target === this.$refs.card6) {
                            this.isVisible.card6 = false;
                        }else if (entry.target === this.$refs.card7) {
                            this.isVisible.card7 = false;
                        }else if (entry.target === this.$refs.card8) {
                            this.isVisible.card8 = false;
                        }else if (entry.target === this.$refs.card9) {
                            this.isVisible.card9 = false;
                        }else if (entry.target === this.$refs.title) {
                            this.isVisible.title = false;
                        }
                    }
                });
            }, options);

            this.observer.observe(this.$refs.card1);
            this.observer.observe(this.$refs.card2);
            this.observer.observe(this.$refs.card3);
            this.observer.observe(this.$refs.card4);
            this.observer.observe(this.$refs.card5);
            this.observer.observe(this.$refs.card6);
            this.observer.observe(this.$refs.card7);
            this.observer.observe(this.$refs.card8);
            this.observer.observe(this.$refs.card9);
            this.observer.observe(this.$refs.title);
        },
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
.isVisible{
    opacity: 0;
}
.slide-enter-left {
    animation: slide-enter-left 0.8s ease-out;
}
.slide-enter-top {
    animation: slide-enter-top 0.8s ease-out;
}
.slide-enter-right {
    animation: slide-enter-right 0.8s ease-out;
}

@keyframes slide-enter-left {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
@keyframes slide-enter-top {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes slide-enter-right {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
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