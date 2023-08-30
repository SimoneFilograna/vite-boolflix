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
        <div class="container-fluid p-4 d-flex align-items-center gap-4">
            <div>
                <img src="../assets/BOOFLIX-LOGO.png" alt="" class="">
            </div>           

            <div class="menu-list flex-grow-1">
                <ul class="d-flex gap-4 align-items-center">
                    <li>
                        <a href="#" class="text-white">Home</a>
                    </li>
                    <li>
                        <a href="#" class="text-white">Serie TV</a>
                    </li>
                    <li>
                        <a href="#" class="text-white">Film</a>
                    </li>
                    <li>
                        <a href="#" class="text-white">Original</a>
                    </li>
                    <li>
                        <a href="#" class="text-white">Aggiunti di recente</a>
                    </li>
                    <li>
                        <a href="#" class="text-white">La mia lista</a>
                    </li>
                    
                </ul>
            </div>

            <div class="input-group">
                <input class="p-2 form-control" type="search" placeholder="Search your film" v-model="store.inputText">
                <button class="btn btn-outline-light" type="submit" @click="searchMov()">Cerca</button>
            </div>   
            
            <div class="d-flex align-items-center gap-3 right-icon">
                <span class="text-white fs-5">
                    <a href="#">BAMBINI</a> 
                </span>

                <a href="">
                    <i class="fa-solid fa-bell text-white fs-4"></i>
                </a>

                <a href="#">
                    <img src="../assets/avatar.png" alt="" class="avatar-img">
                </a>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>

    ul{
        li{
            list-style: none;
            a {
                text-decoration: none;
            };            
        }
    }
    .input-group {
        width: 25%;

        .form-control:focus{
            border: transparent;
            box-shadow: 0 0 0 0rem rgba(255, 255, 255, 0.301);
        }
    }

    .right-icon{
        a{
            text-decoration: none;
            color: white;
        }
        .avatar-img{
            width: 40px;
        };

    }
</style>