<template>
    <div class="all-wrapper">
        <Header />
        <OneSection />
        <Recommendations />
        <Faq />
        <HoWeSelect />
        <BecomeInvestor />
        <Advantages />
        <Partner />
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
import OneSection from "@/components/descriprionOneSection/index.vue"
import HoWeSelect from "@/components/hoWeSelect/hoWeSelect.vue"
import Partner from "@/components/partner/index.vue"
export default {
    name: "indexLending",
    components: {
        Header,
        Footer,
        Recommendations,
        Faq,
        Advantages,
        BecomeInvestor,
        OneSection,
        HoWeSelect,
        Partner,
    }
}
</script>

<style scoped>
.all-wrapper {
    background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFB 100%);
}
</style>