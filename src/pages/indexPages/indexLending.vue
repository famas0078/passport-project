<template>
    <Header />
    <Recommendations />
    <Footer />
</template>

<script>
import Recommendations from "@/components/recommendationsLending/recommendations.vue"
import Header from "@/components/headerLending/header.vue"
import Footer from "@/components/footerLending/footer.vue"
export default {
    name: "indexLending",
    components:{
        Header,
        Footer,
        Recommendations,
    }
}
</script>