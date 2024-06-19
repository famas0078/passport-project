<template>

  <Header />

</template>

<script>
// import OneSection from "./pages/OneSection/OneSectionProjectPass.vue"
import Header from "./components/header/header.vue"
export default {

  name: 'App',
  components: {
    // OneSection,
    Header,
  }
}
</script>

<style>
@import "assets/style/global.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
