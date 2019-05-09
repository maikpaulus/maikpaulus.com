<template>
    <div class="cmp-page-datenschutz cmp-subpage">
        <cmp-header />
        <main class="text-center">
            <h1>Datenschutz</h1>
            <div class="cmp-datenschutz">
                <div class="max-width">

                    <h3>Umgang mit Kontaktdaten</h3>
                    <p>
                        Nehmen Sie mit uns als Websitebetreiber durch die angebotenen Kontaktmöglichkeiten Verbindung auf, werden Ihre Angaben gespeichert, 
                        damit auf diese zur Bearbeitung und Beantwortung Ihrer Anfrage zurückgegriffen werden kann. 
                        Ohne Ihre Einwilligung werden diese Daten nicht an Dritte weitergegeben.
                    </p>

                    <h3>Zugriffsdaten</h3>
                    <p>
                        Der Websitebetreiber bzw. Seitenprovider erhebt Daten über Zugriffe auf die Seite und speichert diese als „Server-Logfiles“ ab. Folgende Daten werden so protokolliert:
                    </p>
                    <ul>
                        <li>Besuchte Website</li>
                        <li>Uhrzeit zum Zeitpunkt des Zugriffes</li>
                        <li>Menge der gesendeten Daten in Byte</li>
                        <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
                        <li>Verwendeter Browser</li>
                        <li>Verwendetes Betriebssystem</li>
                        <li>Verwendete IP-Adresse</li>
                    </ul>
                    <p>
                        Die erhobenen Daten dienen lediglich statistischen Auswertungen und zur Verbesserung der Website. Der Websitebetreiber behält sich allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
                    </p>

                    <h3>SSL-Verschlüsselung (HTTPS-Protokoll)</h3>
                    <p>
                        Um Ihre übermittelten Daten bestmöglich zu schützen nutzen die Websitebetreiber eine SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen an dem Präfix “https://“ im Seitenlink in der Adresszeile Ihres Browsers. Unverschlüsselte Seite sind durch „http://“ gekennzeichnet.
                    </p>
                    <p>
                        Sämtliche Daten, welche Sie an diese Website übermitteln – etwa bei Anfragen oder Logins – können dank SSL-Verschlüsselung nicht von Dritten gelesen werden.
                    </p>

                    <h3>Google Analytics</h3>
                    <p>
                        Diese Website nutzt den Dienst „Google Analytics“, welcher von der Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) angeboten wird, zur Analyse der Websitebenutzung durch Nutzer. Der Dienst verwendet „Cookies“ – Textdateien, welche auf Ihrem Endgerät gespeichert werden. Die durch die Cookies gesammelten Informationen werden im Regelfall an einen Google-Server in den USA gesandt und dort gespeichert.    
                    </p> 
                    <p>
                        Auf dieser Website greift die IP-Anonymisierung. Die IP-Adresse der Nutzer wird innerhalb der Mitgliedsstaaten der EU und des Europäischen Wirtschaftsraum gekürzt. Durch diese Kürzung entfällt der Personenbezug Ihrer IP-Adresse. Im Rahmen der Vereinbarung zur Auftragsdatenvereinbarung, welche die Websitebetreiber mit der Google Inc. geschlossen haben, erstellt diese mithilfe der gesammelten Informationen eine Auswertung der Websitenutzung und der Websiteaktivität und erbringt mit der Internetnutzung verbundene Dienstleistungen.
                    </p> 
                    <p>
                        Sie haben die Möglichkeit, die Speicherung des Cookies auf Ihrem Gerät zu verhindern, indem Sie in Ihrem Browser entsprechende Einstellungen vornehmen. Es ist nicht gewährleistet, dass Sie auf alle Funktionen dieser Website ohne Einschränkungen zugreifen können, wenn Ihr Browser keine Cookies zulässt.
                    </p>
                    <p>
                        Weiterhin können Sie durch ein Browser-Plugin verhindern, dass die durch Cookies gesammelten Informationen (inklusive Ihrer IP-Adresse) an die Google Inc. gesendet und von der Google Inc. genutzt werden.<br>
                        Folgender Link führt Sie zu dem entsprechenden Plugin: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank">https://tools.google.com/dlpage/gaoptout?hl=de</a></p> <p>
                        Hier finden Sie weitere Informationen zur Datennutzung durch die Google Inc.: <a target="_blank" href="https://support.google.com/analytics/answer/6004245?hl=de">https://support.google.com/analytics/answer/6004245?hl=de</a>
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

    .cmp-page-datenschutz {
        .cmp-datenschutz {
            padding: 0 0 4em 0;
            
            h3 {
                color: $primary-green;
                margin: 2rem 0 0;

                + p {
                    margin-top: 0.5em;
                }
            }

            ul {
                padding: 0;
                
                li {
                    text-align: center;
                    font-style: italic;
                }
            }

            p > a {
                color: $black;
                text-decoration: underline;
            }

            p:last-child {
                margin-bottom: 0;
            }
        }
    }
</style>