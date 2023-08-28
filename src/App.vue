<script >
  import TheHeader from "../src/components/TheHeader.vue";
  import TheMain from "../src/components/TheMain.vue";
  import TheFooter from "./components/TheFooter.vue";

  export default{
    components:{
      TheHeader,
      TheMain,
      TheFooter
    },
  }
</script>

<template>

  <TheHeader></TheHeader>

  <main></main>

  <TheFooter></TheFooter>
</template>

<style lang="scss">
</style>
