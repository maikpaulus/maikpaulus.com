<template>
    <div class="cmp-page-impressum cmp-subpage">
        <cmp-header />
        <main class="text-center">
            <h1>Impressum</h1>
            <div class="cmp-impressum">
                <div class="max-width">
                    <h3>Inhaber gemäß § 5 TMG</h3>
                    <p>
                        Maik Paulus<br>
                        Hofmannstraße 18<br>
                        82061 Neuried
                    </p>
                    <p>
                        E-Mail: <a href="mailto:work@maikpaulus.com" class="e-mail">work[at]maikpaulus.com</a><br>
                        Telefon: <a href="tel:+491742558229">+49 174 255 82 29 </a>
                    </p>
            
                    <h3>Haftung für Inhalte</h3>
                    <p>
                        Die Inhalte meiner Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                        der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene
                        Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als
                        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
                        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
                        Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
                        Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
                        von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
                    </p>

                    <h3>Haftung für Links</h3>
                    <p>
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann
                        ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                        jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
                        auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
                        permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                        nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
                    </p>

                    <h3>Urheberrecht</h3>
                    <p>
                        Die durch die Seitenbetreiber erstellten bzw. verwendeten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                        Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                        Urheberrechtes bedürfen der Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                        nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                        erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                        Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                        Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
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

    export default {
        components: {
            'cmp-header': Header,
            'cmp-footer': Footer
        }
    }
</script>

<style lang="scss">
    @import '../App';

    .cmp-page-impressum {
        .cmp-impressum {
            padding: 0 0 4em 0;

            p:last-child {
                margin-bottom: 0;
            }

            .box:first-child {
                padding: 0;
            }

            @media screen and (min-width: 64em) {
                .box:last-child {
                    padding: 0;
                }
            }
        }

        .cmp-haftungsausschuss {
            background: $white;
            padding: 8em 0 4em;
            margin: -10em 0 0;
        }

        p > a {
            color: $black;
            text-decoration: underline;
        }

        p:last-child {
            margin-bottom: 0;
        }

        h3 {
            color: $primary-green;
            margin: 2rem 0 0;

            + p {
                margin-top: 0.5em;
            }
        }
    }
</style>