<template>
    <div class="cmp-page-download cmp-subpage">
        <cmp-header :subpage="true"/>
        <main class="text-center">
            <h1>Downloads</h1>
            <div class="cmp-dokumente">
                <div class="max-width">
                    <p>
                        Damit du dir nicht über den komplizierten Weg alle nötigen Informationen über mich zusammentragen musst, habe ich einen kleinen Downloadbereich zur Verfügung gestellt.
                        Wenn dir hier noch etwas fehlt, schreib mir einfach eine kurze <a href="mailto:work@maikpaulus.com">E-Mail</a>. Ich werde dir zeitnah antworten und die Informationen zur 
                        Verfügung stellen.
                    </p>
                    <div class="grid-x box-layout">
                        <div class="box cell small-12 large-4">
                            <div class="inner">
                                <h3>Lebenslauf</h3>
                                <p>
                                    Schau dir detailliert an, was ich bisher beruflich gemacht habe. Du bekommst einen guten Eindruck davon, in welchen Bereichen ich bisher gearbeitet habe.
                                </p>
                                <p>
                                    <a class="action-button" href="/assets/download/lebenslauf.pdf" target="_blank">
                                        <i class="fa fa-vcard-o"></i>Lebenslauf ansehen!
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div class="box cell small-12 large-4">
                            <div class="inner">
                                <h3>Arbeitszeugnisse</h3>
                                <p>
                                    Erfahre, wie meine ehemaligen Arbeitgeber mich gesehen haben. Mit Feedback von Anderen kannst du dir hoffentlich ein etwas genaueres Bild von mir machen.
                                </p>
                                <p>
                                    <a class="action-button" href="/assets/download/zeugnisse.pdf" target="_blank">
                                        <i class="fa fa-hand-o-right"></i>Zeugnisse öffnen!
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div class="box cell small-12 large-4">
                            <div class="inner">
                                <h3>Zertifikate</h3>
                                <p>
                                    In den letzten Jahren habe ich einige Zertifikate erworben. Dadurch versuche ich, mich immer breiter aufzustellen und mir neue Kompetenzen anzueignen.
                                </p>
                                <p>
                                    <a class="action-button" href="/assets/download/zertifikate.pdf" target="_blank">
                                        <i class="fa fa-rocket"></i>Jetzt anschauen!
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cmp-fortbildungen">
                <div class="max-width">
                    <h3>Weitere Fortbildungen</h3>
                    <p>
                        Im Rahmen meiner Arbeit habe ich in den vergangenen Jahren einige weitere Fortbildungen besucht, für die es keine Teilnehmerzertifikate gab. Die Fortbildungen zeigen dir, welche Interessen und Schwerpunkte ich bisher gesetzt habe.
                    </p>
                    <p>
                        Wenn du Fragen zu einzelnen Veranstaltungen hast oder Details wissen möchest, kannst du mich einfach fragen.
                    </p>
                    <div class="grid-x box-layout">
                        <div class="box cell small-6 medium-4 large-3">
                            <div class="inner fewo">
                                <img src="/assets/img/fewo-judith.jpg">
                                <div class="img-cover"></div>
                                <div class="img-description">
                                    <h4>Ferienwohnung Judith</h4>
                                    <p>
                                        Eine kleine Webseite für eine Ferienwohnung. Schlicht, aber modern.
                                        Der Fokus liegt auf der schnellen Information und dem Kontaktformular.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="box cell small-6 medium-4 large-3">
                            <div class="inner">
                                <img src="/assets/img/gesundessen.jpg">
                                <div class="img-cover"></div>
                                    <div class="img-description">
                                        <h4>gesund essen</h4>
                                        <p>
                                            Moderne Webseite inklusive Redaktionssystem zum Thema Ernährungsberatung.
                                            Ebenfalls schlicht gehalten mit kleiner Unternavigation.
                                        </p>
                                    </div>
                            </div>
                        </div>
                        <div class="box cell small-6 medium-4 large-3">
                            <div class="inner maraundmaik">
                                <img src="/assets/img/maraundmaik.jpg">
                                <div class="img-cover"></div>
                                <div class="img-description">
                                    <h4>Hochzeit Mara & Maik</h4>
                                    <p>
                                        An Kreativität mangelt es nicht: für unsere Hochzeitswebseite haben wir mit viel Aufwand eine einzigartige Story erstellt. Inklusive Gästeverwaltung.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
            'cmp-footer': Footer
        }
    }
</script>

<style lang="scss">
    @import '../App';

    .cmp-dokumente {
        padding: 0 0 4em;
        
        h3 {
            color: $primary-green;
            margin-top: 0;
        }

        p:last-child {
            margin-bottom: 0;
        }

        a {
            color: $black;
            text-decoration: underline;
        }

        .inner {
            a {
                text-decoration: none;
                color: $white;
                line-height: 2.4em;
            }
        }
    }

    .cmp-fortbildungen {
            padding: 4em 0;
            background: $secondary-dark;
            color: $white;

            h3 {
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