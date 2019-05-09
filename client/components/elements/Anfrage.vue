<template>
    <div class="cmp-anfrage text-center">
        <div class="max-width">
            <h2>Interesse geweckt?</h2>
            <p>
                Du möchtest ein neues Projekt starten? Gerne können wir bei einem Kaffee über deine Vision und deine Wünsche sprechen.
                Ein erstes Beratungsgespräch sollte immer darin bestehen, sich gegenseitig kennenzulernen und zu prüfen, ob eine Zusammenarbeit möglich ist.
                Das ist natürlich kostenlos, der erste Kaffee geht auf mich!
            </p>
            <p>
                <a class="action-button" v-on:click="$router.push('/kontakt')"><i class="fa fa-coffee"></i>Kaffee abstauben!</a>
            </p>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../../App';

    .cmp-anfrage {
        padding: 4em 0;
        text-align: center;

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