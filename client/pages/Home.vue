<template>
    <div class="cmp-page-home">
        <cmp-header />
        <main>
            <ueber-mich /> 
            <angebot />
            <angebot-subtext />
            <referenzen />
            <anfrage />       
        </main>
        <cmp-footer />
    </div>
</template>

<script>
    import Header from '../components/elements/Header.vue';
    import Footer from '../components/elements/Footer.vue';
    import UeberMich from '../components/elements/UeberMich.vue';
    import Angebot from '../components/elements/Angebot.vue';
    import AngebotSubtext from '../components/elements/AngebotSubtext.vue';
    import Referenzen from '../components/elements/Referenzen.vue';
    import Anfrage from '../components/elements/Anfrage.vue';

    export default {
        components: {
            'cmp-header': Header,
            UeberMich,
            Angebot,
            AngebotSubtext,
            Referenzen,
            Anfrage,
            'cmp-footer': Footer
        }
    }
</script>

<style lang="scss">
    @import '../App';

    .cmp-page-home {
        height: 100%;
    }

    .box-layout {
        .box {
            padding: ($box-padding / 3) 0;
        }
        
        .box:first-child {
            padding: 0 0 (2*$box-padding / 3);
        }

        .box:last-child {
            padding: (2*$box-padding / 3) 0 0;
        }

        .box .inner {
            box-shadow: inset 0px 0px 1px 0px $secondary-dark;
            border-radius: 5px;
            padding: 1.5em 1em;
            background: $white;
            z-index: 101;
        }

        .inner-box {
            margin: $content-padding 0;
            
            &:last-child {
                margin: $content-padding 0 0;
            }

            &:first-child {
                margin: 0 0 $content-padding;
            }
        }
    }

    @media screen and (min-width: 40em) {
        .hide-for-medium-up {
            display: none !important;
        }
    }

    @media screen and (min-width: 64em) {
        .box-layout {
            .box {
                padding: 0 ($box-padding / 3);
            }   

            .inner-box {
                padding: 0 ($box-padding / 2);
            }

            .box:first-child {
                padding: 0 (2*$box-padding / 3) 0 0;
            }

            .box:last-child {
                padding: 0 0 0 (2*$box-padding / 3);
            }

            &.pinterest-style {
                .box {
                    padding: 0;

                    &:first-child {
                        .inner-box {
                            padding: 0 ($box-padding / 2) 0 0;
                        }
                    }

                    &:last-child {
                        .inner-box {
                            padding: 0 0 0 ($box-padding / 2);
                        }
                    }
                }
            }
        }
    }
</style>