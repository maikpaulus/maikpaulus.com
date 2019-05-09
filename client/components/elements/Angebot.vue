<template>
    <div class="cmp-angebot text-center">
        <div class="max-width">
            <h2>Das habe ich zu bieten.</h2>
            <div class="grid-x box-layout">
                <div class="box cell small-12 large-4">
                    <div class="inner">
                        <h3>Projektarbeit</h3>
                        <p>
                            Bei Verfügbarkeit steige ich temporär in Projekte ein, um dort zu unterstützen.
                            Ob im Team, alleine oder nur für einen kleinen Projektabschnitt: grundsätzlich bin ich für
                            alles offen.
                        </p>
                        <p>
                            <strong>Tech-Stack:</strong><br>
                            JavaScript (Node.js, Typescript), Vue.js, React, HTML, CSS, PHP, Symfony,
                            Docker, Elasticsearch, RabbitMQ, Logstash, Kibana, GraphQL ...
                        </p>
                        <p>
                            <a class="action-button" v-on:click="$router.push('/kontakt')">
                                <i class="fa fa-handshake-o"></i>Stell dein Projekt vor!
                            </a>
                        </p>
                    </div>
                </div>
                <div class="box cell small-12 large-4">
                    <div class="inner">
                        <h3>Webentwicklung / -design</h3>
                        <p>
                            Seit vielen Jahren betreue ich Webprojekte von der Idee bis zur Umsetzung und technischen Administration.
                            Ich unterstütze gerne auf dem Weg zum professionellen Webauftritt.
                        </p>
                        <p>
                            <strong>Mögliche Bausteine:</strong><br>
                            Statische Webseiten, CMS, Intranet, Webanwendungen, Zielgruppenanalyse, SEO, Onlineshop, Buchungssysteme, ...
                        </p>
                        <p>
                            <a class="action-button" v-on:click="$router.push('/kontakt')">
                                <i class="fa fa-hand-o-right"></i>Gehe den ersten Schritt!
                            </a>
                        </p>
                    </div>
                </div>
                <div class="box cell small-12 large-4">
                    <div class="inner">
                        <h3>Architekturmodernisierung</h3>
                        <p>
                            In den letzten Jahren habe ich mich viel mit der Migration zu modernen Architekturen befasst. Diese Erfahrung möchte ich gerne weitergeben: gerne in Beratung oder Implementierung.
                        </p>
                        <p>
                            <strong>Angewandte Konzepte:</strong><br>
                            Microservices, Unit Testing, CI / CD, Clean Code, Domain-Driven Design, Design Patterns, 
                            Event Sourcing, Micro Frontend, API Design, ...
                        </p>
                        <p>
                            <a class="action-button" v-on:click="$router.push('/kontakt')">
                                <i class="fa fa-rocket"></i>Starte den Wandel!
                            </a>
                        </p>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<style lang="scss">
    @import '../../App';

    .cmp-angebot {
        padding: 4em 0 1em;

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

        p:last-child {
            margin-bottom: 0;
        }
    }
</style>