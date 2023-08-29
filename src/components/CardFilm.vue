<script>
    import CountryFlag from 'vue-country-flag-next'
    export default{
        props:{
            objfilm: {
                type: Object,
                required: true
            }
        },
        components:{
            CountryFlag
        }
    }
</script>

<template>
    <div class="card h-100">
        <img :src="`https://image.tmdb.org/t/p/w342/${objfilm.poster_path}`" class="card-img-top" alt="">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">Title: {{objfilm.title}}</h5>
            <p class="card-text">Original title: {{objfilm.original_title}}</p>
            <country-flag :country='objfilm.original_language' size='normal' class="mt-auto"/>
            <p class="card-text pt-2">Vote: {{objfilm.vote_average}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>