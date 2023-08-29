<script>
    import { store, searchMov } from "../store"

    export default {    
        data(){
            return{
                store,
            }
        },
        methods:{
            searchMov
        }
    }
</script>

<template>
    <header>
        <div class="container-fluid p-4 d-flex align-items-center">
            <div class="flex-grow-1">
                <img src="../assets/BOOFLIX-LOGO.png" alt="" class="">
            </div>
            
            <div class="input-group">
                <input class="p-2 form-control" type="search" placeholder="Search your film" v-model="store.inputText">
                <button class="btn btn-outline-light" type="submit" @click="searchMov()">Cerca</button>
            </div>           
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .input-group {
        width: 25%;

        .form-control:focus{
            border: transparent;
            box-shadow: 0 0 0 0rem rgba(255, 255, 255, 0.301);
        }
    }
</style>