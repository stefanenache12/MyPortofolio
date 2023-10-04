<script>
import GameComponent from '../components/GameComponent.vue';
    export default {
        name: "HomePage",
        data() {
            return {
         
            }
        },
        mounted() {
        },
        methods: {
           
        },
        created(){
        },
  
        components: {
            GameComponent,
        }
    }
</script>

<template>
        <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center position-relative">
                    <div class="presentation">
                        <h5 class="text-light">
                            Hi all. I am
                        </h5>
                        <h1 class="text-light">
                            Stefan Enache
                        </h1>
                        <h3>
                            > Full Stack Developer
                        </h3>
                    </div>
                </div>
                <div class="my-card col-sm-12 col-md-6 col-lg-6">
                    <GameComponent/> 
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
    h1 {
        font-size: 3.5rem;
    }
    h3 {
        color: #4D5BCE;
    }
    .presentation {
        padding-left: 55px;
    }

    @media (max-width:768px) {
        h1 {
            font-size: 2.5rem;
        }
        .presentation {
            margin-top: 50px;
            margin-bottom: 50px;
            text-align: center;
            padding-left: 0;
        }

        .my-card {
            margin-bottom: 50px;
        }
    }
</style>