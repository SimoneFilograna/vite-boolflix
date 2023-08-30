<script>    
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
    <div class="card h-100 position-relavite">
        <img :src="`https://image.tmdb.org/t/p/w342/${objfilm.poster_path}`" class="card-img-top" alt="">
        <div class="card-body d-flex flex-column p-lg-5">
            <h5 class="card-title">{{objfilm.title ?? objfilm.name }}</h5>
            <p class="card-text">Original Title: {{objfilm.original_title ?? objfilm.original_name}}</p>
            <div class="mt-auto d-flex align-items-center justify-content-center gap-2">
                <span>Language: </span>
                <lang-flag :squared="false" :iso="objfilm.original_language"/>
            </div>
            <p class="card-text pt-2">Vote: {{ voteConvert }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card-body{
        text-align: center;
        opacity: 0;
        color: rgb(255, 255, 255);
        position: absolute;
        inset: 0;
    &:hover{
        background-color: rgba(0, 0, 0, .2);
        backdrop-filter: blur(6px);
        opacity: 1;
    }
    }
</style>