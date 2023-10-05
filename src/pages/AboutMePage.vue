<script>
    export default {
        name: "AboutMepage",
        data() {
            return {
                isSmallWindow: false, 
                isBigWindow:false,
                activeItem: 'personal-info',
                frontEndIcons: [
                    '<i class="fa-brands fa-html5 fa-2xl"></i>'
                ]
            }
        },
        mounted() {
            window.addEventListener('resize', this.checkWindowWidth);
            this.checkWindowWidth();
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.checkWindowWidth);
        },
        methods: {
            checkWindowWidth() {
            this.isSmallWindow = window.innerWidth < 769;
            this.isBigWindow = window.innerWidth > 769;
            },

            setActiveItem(item) {
                this.activeItem = item;
            }
        },
    }
</script>

<template>
    <div class="row m-0 p-0">
        <div class="col-md-6 col-lg-2 asside">
            <div class="row m-0 p-0">
                <div class="col-2 m-0 p-0">

                </div>
                <!--ASSIDE WIDTH > 768PX-->
                <div v-if="isBigWindow" class="col-10 info">
                    <div class="b-bottom ps-2 py-3 ">
                        <h6 @click="setActiveItem('personal-info')" :class="{ 'text-light': activeItem === 'personal-info' || activeItem === 'bio'}">
                            <i class="fa-solid fa-caret-down"></i> personal-info
                        </h6>
                    </div>
                    <div class="info b-bottom py-2">
                        <h6 class="ps-2 py-2" @click="setActiveItem('bio')" :class="{ 'text-light': activeItem === 'bio' || activeItem === 'personal-info' }">
                            <i class="fa-solid fa-chevron-right pe-2"></i> 
                            <i class="fa-solid fa-folder pe-1" style="color: #E99287;"></i>
                            bio
                        </h6>
                        <h6 class="ps-2 py-2" @click="setActiveItem('skills')"  :class="{ 'text-light': activeItem === 'front-end' || activeItem === 'back-end' || activeItem === 'skills' }">
                            <i class="fa-solid fa-chevron-down pe-2"></i>
                            <i class="fa-solid fa-folder pe-1" style="color: #43D9AD;"></i>
                             skills
                        </h6>
                        <h6 class="ps-5 py-2" @click="setActiveItem('front-end')" :class="{ 'text-light': activeItem === 'front-end' || activeItem === 'skills' }">
                            <i class="fa-solid fa-file-code"></i>
                            front-end
                        </h6>
                        <h6 class="ps-5 py-2" @click="setActiveItem('back-end')" :class="{ 'text-light': activeItem === 'back-end' }">
                            <i class="fa-solid fa-file-code"></i>
                            back-end
                        </h6>
                        <h6 class="ps-2 py-2" :class="{ 'text-light': activeItem === 'boolean-trainee' || activeItem === 'front-desk-manager' }">
                            <i class="fa-solid fa-chevron-down pe-2"></i>
                            <i class="fa-solid fa-folder pe-1" style="color: #4D5BCE;"></i>
                            work-experience
                        </h6>
                        <h6 class="ps-5 py-2" @click="setActiveItem('boolean-trainee')" :class="{ 'text-light': activeItem === 'boolean-trainee' }">
                            <i class="fa-solid fa-file-code"></i>
                            boolean-trainee
                        </h6>
                        <h6 class="ps-5 py-2" @click="setActiveItem('front-desk-manager')" :class="{ 'text-light': activeItem === 'front-desk-manager' }">
                            <i class="fa-solid fa-file-code"></i>
                            front-desk-manager
                        </h6>
                        <h6 class="ps-2 py-2" :class="{ 'text-light': activeItem === 'full-stack-course' || activeItem === 'salvemini' }">
                            <i class="fa-solid fa-chevron-down pe-2"></i>
                            <i class="fa-solid fa-folder pe-1" style="color: #FEA55F;"></i>
                            education
                        </h6>
                        <h6 class="ps-5 py-2" @click="setActiveItem('full-stack-course')" :class="{ 'text-light': activeItem === 'full-stack-course' }">
                            <i class="fa-solid fa-file-code"></i>
                            full-stack-course
                        </h6>
                        <h6 class="ps-5 py-2" @click="setActiveItem('salvemini')" :class="{ 'text-light': activeItem === 'salvemini' }">
                            <i class="fa-solid fa-file-code"></i>
                            salvemini
                        </h6>
                    </div>
                    <div class="b-bottom ps-2 py-3 ">
                        <h6>
                            <i class="fa-solid fa-caret-down"></i> contacts
                        </h6>
                    </div>
                    <div class="contacts py-2">
                        <h6 class="ps-1 py-2">
                            <i class="fa-solid fa-envelope pe-1"></i>
                            <span style="font-size: small;">stefanenache12@gmail.com</span>
                        </h6>
                        <h6 class="ps-1 py-2">
                            <i class="fa-solid fa-phone pe-1"></i>
                            <span style="font-size: small;">+39 324 865 9794</span>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5 col-lg-4 text-light">
            <div class="container b-bottom m-0 p-0">
                <div class="py-3">
                    <h6 class="ps-3 info">
                       C:stefan/enache/personal-info/<span v-if="activeItem === 'bio' || activeItem === 'personal-info'">bio</span><span v-if="activeItem === 'front-end' || activeItem === 'skills'">skills/front-end</span><span v-if="activeItem === 'back-end'">skills/back-end</span><span v-if="activeItem === 'boolean-trainee'">work-experiece/boolean</span><span v-if="activeItem === 'front-desk-manager'">work-experiece/front-desk-manager</span><span v-if="activeItem === 'full-stack-course'">education/full-stack-course</span>
                    </h6>
                </div>
            </div>
            <div class="container py-3 px-3">
                <!-- <div v-if="activeItem === 'personal-info'">
                    <p class="info">
                        
                    </p>
                </div> -->
                <div v-if="activeItem === 'bio' || activeItem === 'personal-info'">
                    <p class="info p-2">
                        Junior full-stack web developer with more than 20 personal and group projects. Excellent knowledge of the main front-end and back-end frameworks, acquired after a 6-month full-time bootcamp. <br><br>
                        I like working in teams and am able to collaborate with people from different backgrounds, respecting their opinions and learning from them. I am convinced that continuous training is essential to always keep up with market needs and to offer a high quality service.
                    </p>
                </div>
                <div v-if="activeItem === 'front-end' || activeItem === 'skills'">
                    <div class="icons row h-auto p-5">
                        <div class="text-center col-3">
                            <i class="fa-brands fa-html5 fa-2xl w-100" style="color:#E99287;"></i>
                            <h6 class="pt-3">HTML</h6>
                        </div>
                        <div class="text-center col-3">
                            <i class="fa-brands fa-css3 fa-2xl" style="color: #4D5BCE;"></i>
                            <h6 class="pt-3">CSS</h6>
                        </div>
                        <div class="text-center col-3">
                            <i class="fa-brands fa-sass fa-2xl" style="color: red;"></i>
                            <h6 class="pt-3">SASS</h6>
                        </div>
                        <div class="text-center col-3">
                            <i class="fa-brands fa-js fa-2xl" style="color:#FEA55F;"></i>
                            <h6 class="pt-3">JavaScript</h6>
                        </div>
                        
                        <div class="text-center col-3">
                            <i class="fa-brands fa-bootstrap fa-2xl" style="color: violet;"></i>
                            <h6 class="pt-3">Bootstrap</h6>
                        </div>
                        <div class="text-center col-3">
                            <i class="fa-brands fa-vuejs fa-2xl" style="color: green;"></i>
                            <h6 class="pt-3">Vue.JS</h6>
                        </div>
                        <div class="text-center col-3">
                            <i class="fa-solid fa-code fa-2xl"></i>
                            <h6 class="pt-3">REST API</h6>
                        </div>
                        <div class="text-center col-3">
                            <i class="fa-brands fa-square-github fa-2xl"></i>
                            <h6 class="pt-3">GitHub</h6>
                        </div>
                    </div>
                </div>
                <div v-if="activeItem === 'back-end'">
                    <div class="icons row h-auto p-5">
                        <div class="text-center col-3">
                            <i class="fa-brands fa-php fa-2xl" style="color: gray;"></i>
                            <h6 class="pt-3">PHP</h6>
                        </div>
                        <div class="text-center col-3">
                            <i class="fa-brands fa-laravel fa-2xl" style="color: red;"></i>
                            <h6 class="pt-3">Laravel</h6>
                        </div>
                        <div class="text-center col-3">
                            <i class="fa-brands fa-node fa-2xl" style="color: green;"></i>
                            <h6 class="pt-3">Node.JS</h6>
                        </div>
                        <div class="text-center col-3">
                            <i class="fa-solid fa-database fa-2xl"></i>
                            <h6 class="pt-3">MySQL</h6>
                        </div>
                    </div>
                </div>
                <div v-if="activeItem === 'boolean-trainee'">
                    boolean-trainee
                </div>
                <div v-if="activeItem === 'front-desk-manager'">
                    front-desk-manager
                </div>
                <div v-if="activeItem === 'full-stack-course'">
                    full-stack-course
                </div>
                <div v-if="activeItem === 'salvemini'">
                    salvemini
                </div>
            </div>
        </div>
        <div v-if="isBigWindow" class="col-md-0 col-lg-5">

        </div> 
    </div>
</template>

<style lang="scss" scoped>
    .row {
        height: calc(100vh - 6.8rem);
        --bs-gutter-x: 0;
        .asside {
            margin-left: 1px;
            border-right: 1px solid #607B96;
        }

        .col-2 {
            border-right: 1px solid #607B96;
        }

        .b-bottom {
            border-bottom: 1px solid #607B96;
        }
        .col-lg-4 {
            border-right: 1px solid #607B96;
            margin-left: 2px;
        }

        h6 {
            font-size: small;
            margin: 0;
            transition: all ease;
            &:hover {
                color: white;
                cursor: pointer;
            }
        }

        .info {
            color: #607B96;
        }
    
    }


    .icons {
        display: flex;
        
        & > * {
            padding: 20px 20px;
        }
    }
    
</style>