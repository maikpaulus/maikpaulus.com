<template>
    <div class="cmp-ueber-mich text-center">
        <div class="max-width">
            <h1>Hi, ich bin Maik. Schön, dass du da bist.</h1>
            <p>
                Seit 2010 arbeite ich als Softwareentwickler im Bereich Web, seit 2014 im schönen München. Dabei habe ich viele Jahre Projekte in einer Agentur für
                Kunden umgesetzt, interne Produkte in einem Team entwickelt und durfte sogar als Team Lead ein Team mit 5 Entwicklern führen.
            </p>
            <p>
                Durch diese vielfältigen Erfahrungen bringe ich ein breites Spektrum an Wissen mit, von dem du profitieren kannst und 
                welches ich gerne weitergeben möchte.
            </p>
            <p>
                Mein Antrieb ist seit jeher der Gleiche: Menschen mit digitalen Produkten glücklich und das Leben einfacher machen.<br>
                <strong>Das liegt mir am Herzen.</strong>
            </p>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../../App';

    .cmp-ueber-mich {
        background: $primary-green;
        padding: 4em 0;

        h1 {
            margin-top: 0;
            color: $white;
        }

        p {
            color: $white;
        }

        p:last-child {
            margin-bottom: 0;
        }
    }
</style>