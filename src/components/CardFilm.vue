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
        <div class="card-body text-center">
            <h5 class="card-title">{{objfilm.title}}</h5>
            <p class="card-text">{{objfilm.original_title}}</p>
            <p class="card-text">{{objfilm.original_language}}</p>
            <p class="card-text">{{objfilm.vote_average}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>