<template>
    <div class="all-wrapper">
        <Header />
        <OneSection />
        <Recommendations />
        <Faq />
        <HoWeSelect />
        <GoalsPlatform />
        <SubmitApplication />
        <BecomeInvestor />
        <Advantages />
        <HowCreateProject />
        <Partner />
        <Footer />
    </div>
</template>

<script>
import Recommendations from "@/components/lending/recommendationsLending/recommendations.vue"
import Header from "@/components/lending/headerLending/header.vue"
import Footer from "@/components/lending/footerLending/footer.vue"
import Faq from "@/components/lending/faq/index.vue"
import Advantages from "@/components/lending/advantagesLending/advantages.vue"
import BecomeInvestor from "@/components/lending/becomeInvestor/becomeInvestor.vue"
import OneSection from "@/components/lending/descriprionOneSection/index.vue"
import HoWeSelect from "@/components/lending/hoWeSelect/hoWeSelect.vue"
import Partner from "@/components/lending/partner/index.vue"
import HowCreateProject from "@/components/lending/howCreateProject/HowCreateProject.vue";
import GoalsPlatform from "@/components/lending/GoalsPlatform/GoalsPlatform.vue"
import SubmitApplication from "@/components/lending/submitApplication/index.vue";
export default {
    name: "indexLending",
    components: {
        SubmitApplication,
        Header,
        Footer,
        Recommendations,
        Faq,
        Advantages,
        BecomeInvestor,
        OneSection,
        HoWeSelect,
        Partner,
        HowCreateProject,
        GoalsPlatform,
    }
}
</script>

<style scoped>
.all-wrapper {
    background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFB 100%);
}
</style>