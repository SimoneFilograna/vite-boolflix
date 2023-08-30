<script >
  import TheHeader from "../src/components/TheHeader.vue";
  import TheFooter from "./components/TheFooter.vue";
  import FilmContainer from "./components/FilmContainer.vue";

  export default{
    components:{
      TheHeader,
      TheFooter,
      FilmContainer
    },
  }
</script>

<template>

  <TheHeader></TheHeader>

  <main class="pb-5">
    <div class="container">
      <FilmContainer></FilmContainer>
    </div>
  </main>

  <TheFooter></TheFooter>
</template>

<style lang="scss">
</style>
