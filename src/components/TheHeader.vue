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
        <div class="container-fluid p-4 d-flex align-items-center justify-content-between">
            <div>
                <h1>BOOLFLIX</h1>
            </div>
            
            <div class="input-group">
                <input type="search" placeholder="Search your film" v-model="store.inputText">
                <button class="btn btn-outline-secondary" type="submit" @click="searchMov()">Cerca</button>
            </div>           
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .input-group {
        width: 30%;
    }
</style>