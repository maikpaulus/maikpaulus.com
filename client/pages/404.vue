<template>
    <div class="cmp-page-kontakt cmp-subpage">
        <cmp-header />
        <main class="text-center">
            <h1>Verlaufen?</h1>
            <div class="cmp-not-found">
                <div class="max-width">
                    <p>
                        Hier geht es leider auch nicht weiter. Damit du schnell den Weg wieder zurück findest, kannst du hier unten einfach zurück zur Startseite gelangen.
                    </p>
                    <p>
                        <a class="action-button" v-on:click="$router.push('/')">
                            <i class="fa fa-undo"></i>Hier geht es weiter!
                        </a>
                    </p>
                </div>
            </div>
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

    .cmp-not-found {
        padding: 0 0 4em;

        p:last-child {
            margin-bottom: 0;
        }

        a {
            line-height: 2.5em;
        }
    }
</style>