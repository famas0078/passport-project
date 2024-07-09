<template>
    <div class="wrapper-recommendations" id="platform">
        <div class="container">
            <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 item-wrapper" ref="card1" :class="{ 'slide-enter-left': animationPlayed.card1, 'isVisible': !animationPlayed.card1 }">
                    <div class="item d-flex justify-content-between item-left p-3">
                        <div class="mobile_img">
                            <img src="../../assets/img/Cloud.svg" alt="">
                        </div>
                        <div class="left-container">
                            <div class="title">
                                <div class="big-title">
                                    Создавайте личный (семейный) капитал
                                </div>
                                <div class="small-title">
                                    Научитесь им управлять и приумножать. Достигайте свои финансовые цели
                                </div>
                            </div>
                            <div class="arrow">
                                <img src="../../assets/img/ArrowRightRecommendations.svg" alt="Стрелка">
                            </div>
                        </div>
                        <div class="dekstop_img">
                            <img src="../../assets/img/Cloud.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 item-wrapper" ref="card2" :class="{ 'slide-enter-right': animationPlayed.card2, 'isVisible': !animationPlayed.card2 }">
                    <div class="item d-flex justify-content-between item-left p-3">
                        <div class="mobile_img">
                            <img src="../../assets/img/Cloud.svg" alt="">
                        </div>
                        <div class="left-container">
                            <div class="title">
                                <div class="big-title">
                                    Создавайте личный (семейный) капитал
                                </div>
                                <div class="small-title">
                                    Научитесь им управлять и приумножать. Достигайте свои финансовые цели
                                </div>
                            </div>
                            <div class="arrow">
                                <img src="../../assets/img/ArrowRightRecommendations.svg" alt="Стрелка">
                            </div>
                        </div>
                        <div class="dekstop_img">
                            <img src="../../assets/img/Cloud.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 item-wrapper" ref="card3" :class="{ 'slide-enter-left': animationPlayed.card3, 'isVisible': !animationPlayed.card3 }">
                    <div class="item d-flex justify-content-between item-left p-3">
                        <div class="mobile_img">
                            <img src="../../assets/img/Cloud.svg" alt="">
                        </div>
                        <div class="left-container">
                            <div class="title">
                                <div class="big-title">
                                    Создавайте личный (семейный) капитал
                                </div>
                                <div class="small-title">
                                    Научитесь им управлять и приумножать. Достигайте свои финансовые цели
                                </div>
                            </div>
                            <div class="arrow">
                                <img src="../../assets/img/ArrowRightRecommendations.svg" alt="Стрелка">
                            </div>
                        </div>
                        <div class="dekstop_img">
                            <img src="../../assets/img/Cloud.svg" alt="">
                        </div>
                    </div>
                </div> 
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 item-wrapper" ref="card4" :class="{ 'slide-enter-right': animationPlayed.card4, 'isVisible': !animationPlayed.card4 }">
                    <div class="item d-flex justify-content-between item-left p-3">
                        <div class="mobile_img">
                            <img src="../../assets/img/Cloud.svg" alt="">
                        </div>
                        <div class="left-container">
                            <div class="title">
                                <div class="big-title">
                                    Создавайте личный (семейный) капитал
                                </div>
                                <div class="small-title">
                                    Научитесь им управлять и приумножать. Достигайте свои финансовые цели
                                </div>
                            </div>
                            <div class="arrow">
                                <img src="../../assets/img/ArrowRightRecommendations.svg" alt="Стрелка">
                            </div>
                        </div>
                        <div class="dekstop_img">
                            <img src="../../assets/img/Cloud.svg" alt="">
                        </div>
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
            isVisible: {
                card1: false,
                card2: false,
                card3: false,
                card4: false,
            },
            animationPlayed: {
                card1: false,
                card2: false,
                card3: false,
                card4: false,
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
                        }
                    }
                });
            }, options);

            this.observer.observe(this.$refs.card1);
            this.observer.observe(this.$refs.card2);
            this.observer.observe(this.$refs.card3);
            this.observer.observe(this.$refs.card4);
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