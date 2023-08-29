<script>
    import CardFilm from './CardFilm.vue';
    import {store, startFill} from '../store';

    export default{ 
        components: {
            CardFilm
        },
        data(){
            return{
                store
            }
        },
        mounted(){
            startFill()
        }
    }
</script>

<template>
    <div class="container pt-4">
        <div class="row row-cols-5 g-3">
            <div class="col" v-for="singleCard in store.movResult">
                <CardFilm :objfilm="singleCard"></CardFilm>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>