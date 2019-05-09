<template>
    <div class="cmp-referenzen text-center">
        <div class="max-width">
            <h2>Ein Blick zurück.</h2>
            <p>
                Hier findest du eine Auswahl meiner kürzlich abgeschlossenen Webseitenprojekte. Wenn du noch mehr meiner Arbeiten sehen willst, schaue doch einfach <a v-on:click="$router.push('/projekte')">hier</a> rein oder schreib mir eine <a v-on:click="$router.push('/kontakt')">E-Mail</a>.
            </p>
            <div class="grid-x box-layout">
                <div class="box cell small-12 large-4">
                    <div class="inner fewo">
                        <img src="/assets/img/fewo-judith.jpg">
                        <div class="img-cover"></div>
                        <a href="https://www.fewo-judith.de" target="_blank" class="img-description">
                            <h4>Ferienwohnung Judith</h4>
                            <p>
                                Eine kleine Webseite für eine Ferienwohnung. Schlicht, aber modern.
                                Der Fokus liegt auf der schnellen Information und dem Kontaktformular.
                            </p>
                        </a>
                    </div>
                </div>
                <div class="box cell small-12 large-4">
                    <div class="inner">
                        <img src="/assets/img/gesundessen.jpg">
                        <div class="img-cover"></div>
                        <a href="http://www.gesundessen-kinzigtal.de" target="_blank" class="img-description">
                            <h4>gesund essen</h4>
                            <p>
                                Moderne Webseite inklusive Redaktionssystem zum Thema Ernährungsberatung.
                                Ebenfalls schlicht gehalten mit kleiner Unternavigation.
                            </p>
                        </a>
                    </div>
                </div>
                <div class="box cell small-12 large-4">
                    <div class="inner maraundmaik">
                        <img src="/assets/img/maraundmaik.jpg">
                        <div class="img-cover"></div>
                        <a href="http://www.maraundmaik.de" target="_blank" class="img-description">
                            <h4>Hochzeit Mara & Maik</h4>
                            <p>
                                An Kreativität mangelt es nicht: für unsere Hochzeitswebseite haben wir mit viel Aufwand eine einzigartige Story erstellt. Inklusive Gästeverwaltung.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../../App';

    .cmp-referenzen {
        padding: 4em 0;
        background: $secondary-dark;
        color: $white;

        h4 {
            color: $white;
            margin-top: 0;
        }

        p {
            margin: 1.5em 0;

            a {
                text-decoration: underline;
            }
        }

        .box-layout {
            margin-top: 1.5rem;
        }

        .box-layout .box .inner {
            box-shadow: inset 0px 0px 1px 0px $white; 
            padding: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            max-width: 30em;
            margin: auto;

            img {
                width: 100%;
                height: auto;
                transition: transform .5s;

            }

            .img-cover {
                background: $secondary-dark;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
                transition: opacity 0.5s            }

            .img-description {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;   
                transition: opacity 0.5s;
                color: $white;
                padding: 1em;
            }

            &:hover img {
                transform: scale(1.05);
            }

            &:hover .img-cover {
                opacity: 0.8;
            }

            &:hover .img-description {
                opacity: 1;
            }

            &.fewo { background-image: url('/assets/img/fewo-judith.jpg') }
            &.gesundessen { background-image: url('/assets/img/gesundessen.jpg') }
            &.maraundmaik { background-image: url('/assets/img/maraundmaik.jpg') }
        }

        @media screen and (min-width: 64em) {
            .cmp-referenzen {
                .inner {
                    max-width: 0;
                }
            }
        }
    }
</style>