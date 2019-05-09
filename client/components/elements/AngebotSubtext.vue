<template>
    <div class="cmp-angebot-subtext text-center">
        <div class="max-width">
            <p>
                Damit du einen besseren Überblick bekommst, was ich bisher gemacht habe, kannst du hier meine bisherigen Projekte und meinen Lebenslauf einsehen. Alle Projekte, die ich in Festanstellung gemacht habe, 
                findest du aktuell noch im Lebenslauf. Wenn du ein Dokument mit meinen bisherigen Projekten haben möchtest, schreib mir einfach.
            </p>
            <p class="detailed-information">
                <a class="action-button alternate" href="/projekte"><i class="fa fa-gift"></i>Bisherige Projekte ansehen!</a>
                <span class="divider hide-for-medium-up"></span>
                <a class="action-button alternate" target="_blank" href="/assets/downloads/lebenslauf.pdf"><i class="fa fa-user-circle-o"></i>Lebenslauf anschauen!</a>
            </p>
            <p>
                Du findest nicht das was du suchst? Schreib mir doch einfach. 
                In einem persönlichen Gespräch lässt sich besser rausfinden, ob ich dir weiterhelfen kann. Ich freue mich auf deine Nachricht!
            </p>
            <p>
                <a class="action-button alternate" v-on:click="$router.push('/kontakt')"><i class="fa fa-handshake-o"></i>Kontaktiere mich!</a>
            </p>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../../App';

    .cmp-angebot-subtext {
        padding: 4em 0;
        color: $white;
        background: $primary-green;
        margin: -5em 0 0;
        z-index: 100;

        p {
            margin: 1.5em 0;
        }


        a {
            line-height: 2.5em;
        }

        p:last-child {
            margin-bottom: 0;
        }

        .detailed-information {
            .divider {
                display: block;
                padding: 0.25em 0;
            }

            a {
                margin: 0.25em;

                @media screen and (min-width: 40em) {
                    margin: 0 0.25em;
                }
            }
        }
    }
</style>