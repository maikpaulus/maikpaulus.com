<template>
    <div class="cmp-page-projekte cmp-subpage">
        <cmp-header :subpage="true"/>
        <main class="text-center">
            <h1>Bisherige Projekte</h1>
            <div class="cmp-projekte max-width">
                <p>
                    Hier siehst du eine Auswahl meiner bisherigen Projekte, in denen ich tätig war. 
                    Hier sind Projekte dabei, die ich als Angestellter, Freiberufler oder im privaten Kontext umgesetzt habe.
                </p>
                <p>
                    Bitte beachte, dass ich bei manchen Projekten wegen Verschwiegenheitsklauseln nicht so sehr ins Detail gehen kann. 
                    Trotzdem hoffe ich, dass du dir so ein Bild meiner bisherigen Erfahrungen machen kannst.
                    Bei offenen Fragen kannst du mich natürlich jederzeit kontaktieren.
                </p>
                <p>
                    <a class="action-button" href="/dokumente/projekte" target="_blank"><i class="fa fa-file-pdf-o"></i>Projekte als PDF herunterladen</a>
                </p>
                <div v-if="projekte" class="grid-x box-layout pinterest-style">
                    <div class="box cell small-12 large-4" v-bind:key="rest" v-for="rest in [0, 1, 2]">
                        <div class="projekt inner-box" v-bind:key="key" v-for="(projekt, key) in getFilteredByModRest(rest)">
                            <div class="inner">
                                <h3>{{ projekt.titel }} ({{ projekt.meta.zeitrahmen.jahr.join(' / ')}})</h3>
                                <p>
                                {{ projekt.meta.teaser }}
                                </p>
                                <ul class="tech-stack">
                                    <li v-bind:key="key" v-for="(stack, key) in projekt.stack.anwendung.slice(0, 3)">{{ stack }}</li>
                                    <li v-bind:key="key" v-for="(stack, key) in projekt.stack.btd.slice(0, 3)">{{ stack }}</li>
                                    <li v-bind:key="key" v-for="(stack, key) in projekt.stack.sonstiges.slice(0, 3)">{{ stack }}</li>
                                </ul>
                                <p>
                                    <a class="action-button" v-bind:href="'/projekt/' + projekt.alias">Zum Projekt</a>
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
                <div v-else>
                    <p v-if="loaded">
                        Es konnten leider keine Projekte gefunden werden. Das sollte eigentlich nicht passieren. 
                        Schau einfach später nochmal vorbei!
                    </p>
                    <p v-else>
                        Projekte werden geladen...
                    </p>
                </div>
                <p>
                    <a class="action-button" href="/">Zurück zur Startseite</a>
                </p>
            </div>
            <anfrage v-if="projekte" />
        </main>
        <cmp-footer />
    </div>
</template>

<script>
    import Header from '../components/elements/Header.vue';
    import Footer from '../components/elements/Footer.vue';
    import Anfrage from '../components/elements/Anfrage.vue';

    export default {
        components: {
            'cmp-header': Header,
            'cmp-footer': Footer,
            Anfrage
        },

        mounted() {
            this.$http.get('/api/projekte')
                .then((response) => {
                    this.loaded = true;
                    this.projekte = response.data.response.projekte;
                })
                .catch((err) => {
                    this.loaded = true;
                })
        },

        data() {
            return {
                loaded: false,
                projekte: null
            }
        },

        methods: {
            getFilteredByModRest(rest) {
                return this.projekte.filter((item, key) => key%3 === rest)
            }
        }
    }
</script>

<style lang="scss">
    @import '../App';
    .cmp-page-projekte {
        .cmp-projekte {
            padding: 0 $content-padding 4em;

            h3 {
                margin-top: 0;
                color: $primary-green;
            }
            p {
              margin: 1.5em 0;
            }

            a {
                line-height: 2.5em;
            }

            p:last-child {
                margin-bottom: 0;
            }

            ul {
                display: flex;
                flex-wrap: wrap;
                margin: 0;
                padding: 0; 
                justify-content: center;

                li {
                    font-size: 0.8em;
                    border: 1px solid grey;
                    border-radius: 5px;
                    padding: 0.25em 0.5em;
                    margin: 0.25em;
                }
            }
        }
    
        .cmp-anfrage {
            background: $secondary-dark;
            color: $white;

            a:hover {
                color: $secondary-dark;
                background: $white;
            }
        }
    }
</style>