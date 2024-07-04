<template>
    <div class="wrapper-faq">
      <div class="container">
        <h1 class="title" ref="card1" :class="{ 'slide-enter-top': animationPlayed.card1, 'isVisible': !animationPlayed.card1 }">
          вопрос/ответ
        </h1>
        <div class="accordions" ref="card2" :class="{ 'slide-enter-top': animationPlayed.card2, 'isVisible': !animationPlayed.card2 }">
          <div class="accordion-item" v-for="item in accordions" :key="item.id"
            @click="OpenAccordion(item.id)">
            <div class="accordions-title d-flex justify-content-between">
              <h3 class="accordions-text">
                {{ item.title }}
              </h3>
              <div class="accordions-arrow">
                <img v-if="ActiveAccordion != item.id" src="../../assets/img/arrowAccordionNotActive.svg"
                  alt="">
                <img v-if="ActiveAccordion === item.id" src="../../assets/img/arrowAccordionActive.svg" alt="">
              </div>
            </div>
            <div class="accordions-inner" v-if="ActiveAccordion === item.id"
              :class="{ 'accordion-enter': ActiveAccordion === item.id, 'accordion-leave': ActiveAccordion !== item.id }">
              {{ item.inner }}
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
            ActiveAccordion: 0,
            isVisible: {
                card1: false,
                card2: false,
            },
            animationPlayed: {
                card1: false,
                card2: false,
            },
            accordions:
                [
                    {
                        id: 1,
                        title: "Кто такой Рантье?",
                        inner: "Рантье – это человек, живущий на доходы с личного капитала, размещенного в прибыльных активах. До сих пор вход в этот элитный круг был доступен только обладателям крупного капитала.Благодаря платформе каждый пользователь получит возможность начать создавать бизнес-активы вне зависимости от стартовых возможностей, а также доступ к пошаговому алгоритму создания личного капитала.",
                    },
                    {
                        id: 2,
                        title: "Почему важно иметь личный капитал?",
                        inner: "Рантье – это человек, живущий на доходы с личного капитала, размещенного в прибыльных активах. До сих пор вход в этот элитный круг был доступен только обладателям крупного капитала.Благодаря платформе каждый пользователь получит возможность начать создавать бизнес-активы вне зависимости от стартовых возможностей, а также доступ к пошаговому алгоритму создания личного капитала.",
                    },
                    {
                        id: 3,
                        title: "Как приумножить свой капитал на Платформе?",
                        inner: "Рантье – это человек, живущий на доходы с личного капитала, размещенного в прибыльных активах. До сих пор вход в этот элитный круг был доступен только обладателям крупного капитала.Благодаря платформе каждый пользователь получит возможность начать создавать бизнес-активы вне зависимости от стартовых возможностей, а также доступ к пошаговому алгоритму создания личного капитала.",
                    },
                    {
                        id: 4,
                        title: "Могу ли я стать совладельцем Платформы?",
                        inner: "Рантье – это человек, живущий на доходы с личного капитала, размещенного в прибыльных активах. До сих пор вход в этот элитный круг был доступен только обладателям крупного капитала.Благодаря платформе каждый пользователь получит возможность начать создавать бизнес-активы вне зависимости от стартовых возможностей, а также доступ к пошаговому алгоритму создания личного капитала.",
                    },
                    {
                        id: 5,
                        title: "У меня есть идея/проект. Как Платформа может помочь в ее реализации?",
                        inner: "Рантье – это человек, живущий на доходы с личного капитала, размещенного в прибыльных активах. До сих пор вход в этот элитный круг был доступен только обладателям крупного капитала.Благодаря платформе каждый пользователь получит возможность начать создавать бизнес-активы вне зависимости от стартовых возможностей, а также доступ к пошаговому алгоритму создания личного капитала.",
                    }
                ]
        }
    },
    mounted(){
      this.initIntersectionObserver();
    },
    methods: {
        OpenAccordion(id) {
            if (this.ActiveAccordion === id) {
                this.ActiveAccordion = 0
            } else {
                this.ActiveAccordion = id
            }

        },
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
                        } 
                    } else {
                        if (entry.target === this.$refs.card1) {
                            this.isVisible.card1 = false;
                        } else if (entry.target === this.$refs.card2) {
                            this.isVisible.card2 = false;
                        } 
                    }
                });
            }, options);

            this.observer.observe(this.$refs.card1);
            this.observer.observe(this.$refs.card2);
        },
    }
}
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