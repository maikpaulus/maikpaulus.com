<template>
    <div class="cmp-page-kontakt cmp-subpage">
        <cmp-header :subpage="true"/>
        <main class="text-center">
            <h1>Schön, von dir zu hören.</h1>
            <Kontaktformular />
        </main>
        <cmp-footer />
    </div>
</template>

<script>
    import Header from '../components/elements/Header.vue';
    import Footer from '../components/elements/Footer.vue';
    import Kontaktformular from '../components/elements/Kontaktformular.vue';

    export default {
        components: {
            'cmp-header': Header,
            'cmp-footer': Footer,
            Kontaktformular
        }
    }
</script>

<style lang="scss">
    @import '../App';
</style>