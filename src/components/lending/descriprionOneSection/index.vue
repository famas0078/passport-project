<template>
    <div class="wrapper-one-section">
        <div class="container">
            <div class="row">
                <div class="image mobile-image col-xl-6 mt-4 col-lg-6 col-md-12 col-12" ref="card1" :class="{ 'slide-enter-top': animationPlayed.card1, 'isVisible': !animationPlayed.card1 }">
                    <img src="../../../assets/img/lendingPages/OneSection.svg" alt="" width="280px" height="173px">
                </div>
                <div class="title col-xl-6 col-lg-12 col-md-12 col-12">
                    <div class="big-title">
                        <div class="big-title-inner" ref="card2" :class="{ 'slide-enter-left': animationPlayed.card2, 'isVisible': !animationPlayed.card2 }">
                            Инвестируйте<br>
                        </div> 
                        <div ref="card3" :class="{ 'slide-enter-right': animationPlayed.card3, 'isVisible': !animationPlayed.card3 }">
                            в свой город
                        </div>
                        
                    </div>
                    <div class="small-title" ref="card4" :class="{ 'slide-enter-top': animationPlayed.card4, 'isVisible': !animationPlayed.card4 }">
                        Начните вести финансово здоровый образ жизни, помогая городам стать комфортными, креативными и
                        процветающими.
                    </div>
                  <div class="group-btn">
                    <div class="btn-to-register d-flex justify-content-center" ref="card5" :class="{ 'slide-enter-left': animationPlayed.card5, 'isVisible': !animationPlayed.card5 }">
                      <router-link to="/passport" class="btn-a">Создать свой проект</router-link>
                    </div>
                  </div>
                </div>
                <div class="image dekstop-image col-xl-6 mt-4 col-lg-6 col-md-12 col-12" ref="card7" :class="{ 'slide-enter-top': animationPlayed.card7, 'isVisible': !animationPlayed.card7 }">
                    <img src="../../../assets/img/lendingPages/OneSection.svg" alt="">
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
                card5: false,
                card6: false,
                card7: false,
            },
            animationPlayed: {
                card1: false,
                card2: false,
                card3: false,
                card4: false,
                card5: false,
                card6: false,
                card7: false,
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
                        }else if (entry.target === this.$refs.card5) {
                            this.isVisible.card5 = true;
                            this.animationPlayed.card5 = true;
                        }else if (entry.target === this.$refs.card7) {
                            this.isVisible.card7 = true;
                            this.animationPlayed.card7 = true;
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
                        }else if (entry.target === this.$refs.card7) {
                            this.isVisible.card7 = false;
                        }
                    }
                });
            }, options);

            this.observer.observe(this.$refs.card1);
            this.observer.observe(this.$refs.card2);
            this.observer.observe(this.$refs.card3);
            this.observer.observe(this.$refs.card4);
            this.observer.observe(this.$refs.card5);
            this.observer.observe(this.$refs.card7);
        },
    },
};
</script>

<style scoped>
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