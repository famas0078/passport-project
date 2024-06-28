<template>
    <Header />
    <Recommendations />
    <Faq />
    <Footer />
</template>

<script>
import Recommendations from "@/components/recommendationsLending/recommendations.vue"
import Header from "@/components/headerLending/header.vue"
import Footer from "@/components/footerLending/footer.vue"
import Faq from "@/components/faq/index.vue"
export default {
    name: "indexLending",
    components:{
        Header,
        Footer,
        Recommendations,
        Faq,
    }
}
</script>