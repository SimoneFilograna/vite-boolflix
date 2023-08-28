<script>
    export default{
        props:{
            objfilm: {
                type: Object,
                required: true
            }
        }
    }
</script>

<template>
    <div class="card h-100">
        <img src="" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">Title: {{objfilm.title}}</h5>
            <p class="card-text">Original title: {{objfilm.original_title}}</p>
            <p class="card-text">Original language: {{objfilm.original_language}}</p>
            <p class="card-text">Vote: {{objfilm.vote_average}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>