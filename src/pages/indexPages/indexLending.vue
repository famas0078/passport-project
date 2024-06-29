<template>
    <div class="all-wrapper">
        <Header />
    <Recommendations />
    <Faq />
    <BecomeInvestor />
    <Advantages />
    <Footer />
    </div>
</template>

<script>
import Recommendations from "@/components/recommendationsLending/recommendations.vue"
import Header from "@/components/headerLending/header.vue"
import Footer from "@/components/footerLending/footer.vue"
import Faq from "@/components/faq/index.vue"
import Advantages from "@/components/advantagesLending/advantages.vue"
import BecomeInvestor from "@/components/becomeInvestor/becomeInvestor.vue"
export default {
    name: "indexLending",
    components:{
        Header,
        Footer,
        Recommendations,
        Faq,
        Advantages,
        BecomeInvestor,
    }
}
</script>

<style scoped>
.all-wrapper{
    background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFB 100%);
}
</style>