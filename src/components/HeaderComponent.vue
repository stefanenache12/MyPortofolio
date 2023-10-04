<script>
    export default {

        name: "HeaderComponent",

        data() {
            return {
                links :[
                    'hello',
                    'about-me',
                    'projects',
                ],
                isSmallWindow: false, 
                isBigWindow:false,
                activeItem: 'hello' ,
        };
    },
    computed: {
    isRouteActive() {
      return this.links.includes(this.$route.name);
    },
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
        this.isSmallWindow = window.innerWidth < 576;
        this.isBigWindow = window.innerWidth > 575;
        },

        setActiveItem(item) {
            this.activeItem = item;
        }
    },
    }
</script>

<template>
   <header>

        <!--MENU FOR WINDOW BIGGER THAN 500PX-->
        <div :class="{ 'd-none': isSmallWindow }">
            <ul class="nav">
                <li class="nav-item col-md-0 col-lg-2" style="border-left: none;"></li>
                <li class="nav-item" v-for="link in links">
                    <router-link :to="{ name: link }" class="nav-link" @click="setActiveItem(link)" :class="{ 'text-light': activeItem === link }">_{{ link }}</router-link>
                </li>
            </ul>
        </div>

        <!--MENU FOR WINDOW SMALLER THAN 500PX-->
        <div class="dropdown" :class="{ 'd-none': isBigWindow}">
            <button class="btn col-12  dropdown-toggle py-3" type="button" data-bs-toggle="dropdown" aria-expanded="false" :class="{ 'text-light': isRouteActive }">
                <i class="fa-solid fa-folder px-1" style="color: #E99287;"></i>{{ this.$route.name }}
            </button>
            <ul class="dropdown-menu p-0 w-100 text-center">
                <li class="nav-item w-100 m-auto" v-for="link in links" :class="{' border-start-0 border-end-0 border-bottom-active': isSmallWindow,isRouteActive}">
                    <router-link :to="{ name: link }" class="nav-link">_{{ link }}</router-link>
                </li>
            </ul>
        </div>
   </header>
</template>

<style lang="scss" scoped>
    @use "../assets/scss/partials/variables.scss" as *;
    @use "../assets/scss/partials/mixins.scss" as *;

    ul {

        border-top: 1px solid $secondary_color;
        border-bottom: 1px solid $secondary_color;

        & li:last-child {
            border-right: 1px solid $secondary_color;
        }

        & > li {
            border-left: 1px solid $secondary_color;
        }
    }

    a {
        color: $secondary_color;
        padding: 12px 25px;
        transition: all ease;
        &:hover {
            color: white;
        }
    }

    .btn {
        border-radius: 0;
        background-color: #3C9D93;

        &:hover {
            @include primary-border;
            background-color: #3C9D93;
        }
    }
    .btn:first-child:active {
        background-color: #3C9D93;
    }
    

    .btn.show {
        background-color: #3C9D93;
    }

    .nav {
        --bs-nav-link-color: white;
        --bs-nav-link-hover-color: white;
    }

    .router-link-active {
        border-bottom: 2px solid #FEA55F;
    }

    .dropdown-menu {
        --bs-dropdown-border-radius: 0;
        --bs-dropdown-bg: #011627;
    }

    
</style>