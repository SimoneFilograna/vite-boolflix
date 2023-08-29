<script>
    import { computed } from 'vue';     
    import LangFlag from "vue-lang-code-flags"
    export default{
        props:{
            objfilm: {
                type: Object,
                required: true
            }
        },
        components:{
            LangFlag,
        },

        computed: {
            voteConvert(){
                return Math.ceil(this.objfilm.vote_average / 2)
            }
        }
    }
</script>

<template>
    <div class="card h-100">
        <img :src="`https://image.tmdb.org/t/p/w342/${objfilm.poster_path}`" class="card-img-top" alt="">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">Title: {{objfilm.title ?? objfilm.name }}</h5>
            <p class="card-text">Original title: {{objfilm.original_title ?? objfilm.original_name}}</p>
            <lang-flag :iso="objfilm.original_language" class="mt-auto"/>
            <p class="card-text pt-2">Vote: {{ voteConvert }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>