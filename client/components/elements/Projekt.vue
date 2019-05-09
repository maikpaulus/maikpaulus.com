<template>
    <div class="cmp-projekt">
        <div v-if="projekt">
            <div class="cmp-projekt-uebersicht text-center">
                <div class="max-width">
                    <h2>Projekt: {{ projekt.titel }}</h2>
                    <p>
                        {{ projekt.meta.kurzbeschreibung || ''}}
                    </p>
                    <p>
                        Hier siehst du auf einen Blick die Eckdaten des Projekts.
                    </p>
                    <div class="grid-x box-layout">
                        <div class="box cell small-12 large-4">
                            <div class="inner">
                                <h3>Zeitlicher Rahmen</h3>
                                <p>
                                    <strong>Dauer:</strong><br>
                                    {{ projekt.meta.zeitrahmen.dauer }} Monat{{ projekt.meta.zeitrahmen.dauer === 1 ? '' : 'e'}}
                                </p>
                                <p>
                                    <strong>Art:</strong><br>
                                    {{ projekt.meta.zeitrahmen.art }}
                                </p>
                                <p>
                                    <strong>Jahr:</strong><br>
                                    {{ projekt.meta.zeitrahmen.jahr.join(' / ') }}
                                </p>
                            </div>
                        </div>
                        <div class="box cell small-12 large-4 auftraggeber">
                            <div class="inner">
                                <h3>Auftraggeber</h3>
                                <p>
                                    <strong>Name:</strong><br>
                                    {{ projekt.meta.auftraggeber.name }}
                                </p>
                                <p>
                                    <strong>Ort:</strong><br>
                                    {{ projekt.meta.auftraggeber.ort }}
                                </p>
                                <p>
                                    <strong>Branche:</strong><br>
                                    {{ projekt.meta.auftraggeber.branche }}
                                </p>
                            </div>
                        </div>
                        <div class="box cell small-12 large-4">
                            <div class="inner">
                                <h3>Im Projekt</h3>
                                <p>
                                    <strong>Projekttyp:</strong><br>
                                    {{ projekt.meta.sonstiges.typ }}
                                </p>
                                <p>
                                    <strong>Meine Rolle:</strong><br>
                                    {{ projekt.meta.sonstiges.rolle.join(', ') }}
                                </p>
                                <p>
                                    <strong>Agiles Team:</strong><br>
                                    {{ projekt.meta.sonstiges.team ? 'Ja': 'Nein' }}
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>     
            </div>  
            <div class="cmp-projekt-details">
                <div class="max-width">
                    <h2>Projektdetails</h2>
                    <p>
                        Natürlich kann man mit den Eckdaten eines Projektes noch nicht so viel anfangen. Daher gibt es hier zum Projekt noch einige Details zur Anforderung, den besonderen Herausforderungen und den konkreten Aufgabenstellungen. Wenn du etwas noch genauer wissen möchtest, frag einfach bei mir nach, ich gebe dir gerne Auskunft.
                    </p>
                    <div class="grid-x box-layout">
                        <div class="box cell small-12 large-6">
                            <div class="inner">
                                <h3>Anforderungen</h3>
                                <ul>
                                    <li v-bind:key="key" v-for="(item, key) in projekt.details.anforderungen">{{item}}</li>
                                </ul>
                            </div>
                        </div>
                        <!-- <div class="box cell small-12 large-4 auftraggeber">
                            <div class="inner">
                                <h3>Herausforderungen</h3>
                                <ul>
                                    <li v-bind:key="key" v-for="(item, key) in projekt.details.herausforderungen">{{item}}</li>
                                </ul>
                            </div>
                        </div> -->
                        <div class="box cell small-12 large-6">
                            <div class="inner">
                                <h3>Implementierung</h3>
                                <ul>
                                    <li v-bind:key="key" v-for="(item, key) in projekt.details.aufgaben">{{item}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cmp-projekt-tech-stack">
                <div class="max-width">
                    <h2>Technologischer und methoder Projektrahmen</h2>
                    <p>
                        Hier kannst du konkret einsehen, mit welchen Technologien und Rahmenbedingungen ich in diesem Projekt zu tun hatte.
                    </p>
                    <div class="grid-x box-layout">
                        <div class="box cell small-12 large-4">
                            <div class="inner">
                                <h3>Technologischer Kern</h3>
                                <p>
                                    Mit diesem technologischen Stack wurde die Anwendung implementiert und ausgeliefert:
                                </p>
                                <ul>
                                    <li v-bind:key="key" v-for="(item, key) in projekt.stack.anwendung">{{item}}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="box cell small-12 large-4 auftraggeber">
                            <div class="inner">
                                <h3>Build, Test & Deploy</h3>
                                <p>
                                    Zur Unterstützung, Qualitätssicherung und Automatisierung wurde folgendes genutzt:
                                </p>
                                <ul>
                                    <li v-bind:key="key" v-for="(item, key) in projekt.stack.btd">{{item}}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="box cell small-12 large-4">
                            <div class="inner">
                                <h3>Sonstiges & Methoden</h3>
                                <p>
                                    Weitere Aspekte des Projektes, wie z.B. Methoden, Konzepte, Protokolle oder Hilfstools:
                                </p>
                                <ul>
                                    <li v-bind:key="key" v-for="(item, key) in projekt.stack.sonstiges">{{item}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cmp-projekt-links">
                <div class="max-width">
                    <h2>Weiterführende Links</h2>
                    <p>
                        Hier findest du noch ein paar nützliche weiterführende Links zum Projekt.
                    </p>
                    <p>
                        <a class="action-button" target="_blank" v-if="projekt.links.code" v-bind:href="projekt.links.code">Zum Code des Projektes</a>
                        <a class="action-button" target="_blank" v-if="projekt.links.demo" v-bind:href="projekt.links.demo">Demo des Projekts</a>
                    </p>
                    <p>
                        <a class="action-button" href="/projekte">Zurück zur Projektübersicht</a>
                    </p>
                </div>
            </div>
        </div>
        <div v-else>
            <div v-if="loaded">
                <p>
                    Das Projekt konnte leider nicht gefunden werden.
                </p>
                <p>
                    <a class="action-button" href="/projekte">Zurück zur Projektübersicht</a>
                </p>
            </div>
            <div v-else>
                <p>
                    Projekt wird geladen...
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            alias: {
                type: String,
                defafult: 'alias'
            }
        },

        data() {
            return {
                projekt: null,
                loaded: false
            };
        },

        mounted() {
            this.$http.get('/api/projekt/' + this.$props.alias)
                .then((response) => {

                    console.log(response.data.response.projekt);
                    this.projekt = response.data.response.projekt;
                    this.loaded = true;
                })
                .catch((err) => {
                    this.loaded = true;
                })
        }
    }
</script>

<style lang="scss">
    @import '../../App';

    .cmp-projekt {
        h2 {
            margin: 0 0 1.5rem 0;
            line-height: 1.2;
        }

        h3 {
            color: $primary-green;
            margin-top: 0;
        }

        p {
            margin: 1.5rem 0;
        }

        a {
            line-height: 2.5em;
        }


    }

    .cmp-projekt-uebersicht {
        padding: 0 0 4em;

        p:last-child {
            margin-bottom: 0;
        }

        .auftraggeber {
            background-repeat: no-repeat;
            background-position: center;
            background-size: auto 50%;
        }

        .box-layout .box .inner {
            background: rgba(255, 255, 255, 0.9);
        }
    }

    .cmp-projekt-details {
        padding: 4em 0;
        color: $white;
        background: $primary-green;
        z-index: 100;

        h2 {
            color: $white;
        }

        p:last-child {
            margin-bottom: 0;
        }

        .inner {
            color: $black;

            ul {
                margin: 0;
                padding: 0;

                li {
                    &:not(:last-child)::after {
                        content: '';
                        display: block;
                        border-top: 1px solid $primary-green;
                        margin: 0.5em 0;
                    }
                }
            }
        }
    }   

    .cmp-projekt-tech-stack {
        padding: 4em 0;
        background: $white;
        color: $black;

        ul {
            display: flex;
            flex-wrap: wrap;
            margin: 0;
            padding: 0; 
            justify-content: center;

            li {
                font-size: 0.9em;
                border: 1px solid grey;
                border-radius: 5px;
                padding: 0.25em 0.5em;
                margin: 0.25em;
            }
        }
    }

    .cmp-projekt-links {
        padding: 0 0 4em;
    }
</style>