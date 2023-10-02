<script>
export default {
    name: "",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="row m-0 p-0">
        <div class="col-lg-2 asside">
            <div class="row m-0 p-0">
                <div class="col-2 m-0 p-0">

                </div>
                <div class="col-10 text-light">
                    <div class="b-bottom ps-2 py-3 ">
                        <h6>
                            <i class="fa-solid fa-caret-down"></i> personal-info
                        </h6>
                    </div>
                    <div class="info b-bottom py-2">
                        <h6 class="ps-2 py-2">
                            <i class="fa-solid fa-chevron-right pe-2"></i> 
                            <i class="fa-solid fa-folder pe-1" style="color: #E99287;"></i>
                            bio
                        </h6>
                        <h6 class="ps-2 py-2 text-light">
                            <i class="fa-solid fa-chevron-down pe-2"></i>
                            <i class="fa-solid fa-folder pe-1" style="color: #43D9AD;"></i>
                             skills
                        </h6>
                        <h6 class="ps-5 py-2">
                            <i class="fa-solid fa-file-code"></i>
                            front-end
                        </h6>
                        <h6 class="ps-5 py-2">
                            <i class="fa-solid fa-file-code"></i>
                            back-end
                        </h6>
                        <h6 class="ps-2 py-2 text-light">
                            <i class="fa-solid fa-chevron-down pe-2"></i>
                            <i class="fa-solid fa-folder pe-1" style="color: #4D5BCE;"></i>
                            work-experience
                        </h6>
                        <h6 class="ps-5 py-2">
                            <i class="fa-solid fa-file-code"></i>
                            boolean-trainee
                        </h6>
                        <h6 class="ps-5 py-2">
                            <i class="fa-solid fa-file-code"></i>
                            front-desk-manager
                        </h6>
                        <h6 class="ps-2 py-2 text-light">
                            <i class="fa-solid fa-chevron-down pe-2"></i>
                            <i class="fa-solid fa-folder pe-1" style="color: #FEA55F;"></i>
                            education
                        </h6>
                        <h6 class="ps-5 py-2">
                            <i class="fa-solid fa-file-code"></i>
                            full-stack-course
                        </h6>
                        <h6 class="ps-5 py-2">
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
        <div class="col-lg-4 border"></div>
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
</style>