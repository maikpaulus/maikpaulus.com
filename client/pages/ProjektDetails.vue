<template>
    <div class="cmp-page-projekte cmp-subpage">
        <cmp-header :subpage="true"/>
        <main class="text-center">
            <h1>Bisherige Projekte</h1>
            <Projekt v-bind:alias="alias"/>
        </main>
        <cmp-footer />
    </div>
</template>

<script>
    import Header from '../components/elements/Header.vue';
    import Footer from '../components/elements/Footer.vue';
    import Projekt from '../components/elements/Projekt.vue';

    export default {
        props: {
            alias: {
                type: String,
                default: 'alias'
            }
        },

        components: {
            'cmp-header': Header,
            'cmp-footer': Footer,
            Projekt
        }
    }
</script>

<style lang="scss">
    @import '../App';
</style>