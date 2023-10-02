<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>

    <section class="app-body">
       
        <HeaderComponent />

        <MainComponent/>

        <FooterComponent />

    </section>

</template>

<style lang="scss">
@use "assets/scss/partials/variables.scss";
@use "assets/scss/main";

</style>
