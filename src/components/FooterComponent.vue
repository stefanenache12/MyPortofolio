<script>
export default {
    name: "FooterComponent",
    data() {
        return {
            links: [
                {
                    name: 'Linkedin',
                    url: 'https://www.linkedin.com'
                },
                {
                    name: 'Github',
                    url: 'https://www.linkedin.com'
                }
            ]
        }
    },
    methods: {

    }
}
</script>

<template>
    <footer>
        <div class="container-fluid footer-div">
            <div class="row">
                <div class="footer-link  col-sm-4 col-md-3 col-lg-2 py-3 text-center">
                    <span style="color: #43D9AD;">const</span> findMeIn =
                </div>
                <div v-for="link in links" class="footer-link col-sm-4 col-md-4 col-lg-2 py-3 px-2 text-center">
                    <a :href="link.url" target="_blank">"{{ link.name }}"</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>

    @use "../assets/scss/partials/variables.scss" as *;
    @use "../assets/scss/partials/mixins.scss" as *;
    .footer-div {
        border-top: 1px solid $secondary_color;
        border-bottom: 1px solid $secondary_color;
        color:  $secondary-color;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .footer-link {
        border-right: 1px solid $secondary-color;
        margin-left: 1px;
    }

    a {
        color: $secondary_color;
        text-decoration: none;
        transition: all ease;
        &:hover {
            color: white;
        }
    }

    @media (max-width: 995px) {
    .footer-div {
       position:unset;
    }

    @media (max-width: 574px) {
        .footer-link {
            border-bottom: 1px solid $secondary_color;
        }
    }
}
  
</style>