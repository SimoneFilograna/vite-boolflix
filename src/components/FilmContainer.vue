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
    <h2 class="text-white display-5">Film and Series</h2>
    <div class="container pt-4">        
        <div class="row row-cols-5 g-3">
            <div class="col" v-for="singleCard in store.movResult">
                <CardFilm :objfilm="singleCard"></CardFilm>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>