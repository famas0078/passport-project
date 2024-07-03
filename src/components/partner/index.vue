<template>
    <div class="wrapper-partner">
        <div class="container">
            <div class="title mt-5" ref="title" :class="{ 'slide-enter-top': animationPlayed.title, 'isVisible': !animationPlayed.title }">
                Как присоединиться к партнерской программе и зарабатывать на активности своих рефералов?
            </div>
            <div class="row mt-5">
                <div class="col-xl-6 mt-4 col-lg-6 col-md-12 col-12">
                    <div class="card-item d-flex" ref="card1" :class="{ 'slide-enter-left': animationPlayed.card1, 'isVisible': !animationPlayed.card1 }">
                        <div class="card-text">
                            <h3 class="title-card-register">
                                1. Зарегистрируйтесь на платформе
                            </h3>
                            <div class="des-card flex-grow-1">
                                Просто заполните необходимую информацию, создайте учетную запись и подтвердите свою почту.
                            </div>
                            <div class="time">
                                <div class="time_inner">
                                    3 минуты
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 mt-4 col-lg-6 col-md-12 col-12">
                    <div class="card-item d-flex" ref="card2" :class="{ 'slide-enter-right': animationPlayed.card2, 'isVisible': !animationPlayed.card2 }">
                        <div class="card-text">
                            <h3 class="title-card-register">
                                2. Возьмите в личном кабинете реферальную ссылку
                            </h3>
                            <div class="des-card flex-grow-1">
                                Найдите свою реферальную ссылку в личном кабинете
                            </div>
                            <div class="time">
                                <div class="time_inner">
                                    10 секунд
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="mt-4 col-xl-6 col-lg-6 col-md-12 col-12">
                    <div class="card-item d-flex flex-column h-100" ref="card3"
                        :class="{ 'slide-enter-left': animationPlayed.card3, 'isVisible': !animationPlayed.card3 }">
                        <div class="card-text flex-grow-1">
                            <h3 class="title-card-register">
                                3. Делитесь своей реферальной ссылкой со своими друзьями и подписчикамиу
                            </h3>
                            <div class="des-card flex-grow-1">
                                Поделитесь ссылкой с друзьями и подписчиками через соцсети
                            </div>
                        </div>
                        <div class="time">
                            <div class="time_inner">
                                5 минут
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 mt-4 col-lg-6 col-md-12 col-12">
                    <div class="card-item d-flex flex-column h-100" ref="card4"
                        :class="{ 'slide-enter-right': animationPlayed.card4, 'isVisible': !animationPlayed.card4 }">
                        <div class="card-text flex-grow-1">
                            <h3 class="title-card-register">
                                4. Получайте вознаграждение
                            </h3>
                            <div class="des-card flex-grow-1">
                                После регистрации рефералов и их активности, вы начнете получать вознаграждение
                            </div>
                        </div>
                        <div class="time">
                            <div class="time_inner">
                                24 часа
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group-btn">
                <div class="btn-to-register d-flex justify-content-center" ref="btnRegister"
                    :class="{ 'slide-enter-top': animationPlayed.btnRegister,
                              'isVisible': !animationPlayed.btnRegister
                }">
                    <router-link to="" class="btn-a">Зарегистрироваться</router-link>
                </div>
                <div class="btn-to-invest d-flex justify-content-center" ref="btnInvest"
                    :class="{ 'slide-enter-top': animationPlayed.btnInvest,'isVisible': !animationPlayed.btnInvest }">
                    <router-link to="" class="btn-a">Начать зарабатывать</router-link>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return {
            isVisible: {
                card1: false,
                card2: false,
                card3: false,
                card4: false,
                btnRegister: false,
                btnInvest: false,
                title: false,
            },
            animationPlayed: {
                card1: false,
                card2: false,
                card3: false,
                card4: false,
                btnRegister: false,
                btnInvest: false,
                title: false,
            },
        };
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
                        }else if (entry.target === this.$refs.btnInvest) {
                            this.isVisible.btnInvest = true;
                            this.animationPlayed.btnInvest = true;
                        }else if (entry.target === this.$refs.btnRegister) {
                            this.isVisible.btnRegister = true;
                            this.animationPlayed.btnRegister = true;
                        }else if (entry.target === this.$refs.title) {
                            this.isVisible.title = true;
                            this.animationPlayed.title = true;
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
                        }else if (entry.target === this.$refs.btnRegister) {
                            this.isVisible.btnRegister = false;
                        }else if (entry.target === this.$refs.btnInvest) {
                            this.isVisible.btnInvest = false;
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
            this.observer.observe(this.$refs.btnRegister);
            this.observer.observe(this.$refs.btnInvest);
            this.observer.observe(this.$refs.title);
        },
    },
};
</script>

<style>
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
</style>