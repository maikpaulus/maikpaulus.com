<template>
    <header>
        <div class="bg"></div>
        <div class="intro"></div>
        <nav class="header max-width">
            <ul>
                <li>
                    <a v-on:click="$router.push('/')">
                        <Logo></Logo>
                    </a>
                </li>
                <li class="kontakt">
                    <a class="action-button alternate" v-if="subpage" v-on:click="$router.push('/')"><i class="fa fa-arrow-left"></i>Zurück zur Übersicht</a>
                    <a class="action-button alternate" v-else v-on:click="$router.push('/kontakt')"><i class="fa fa-envelope"></i>Sag Hallo!</a>
                </li>
                <!--<li><a href=""><i class="fa fa-folder-open"></i></a></li>
                <li><a href=""><i class="fa fa-suitcase"></i></a></li>
                <li><a href=""><i class="fa fa-coffee"></i></a></li>-->
            </ul>
        </nav>
        <div class="hello">
            <div class="coin">
                <div class="side logo">
                    <Logo/>
                </div>
                <div class="side image">
                    <img src="/assets/img/maikpaulus.jpg">
                </div>
            </div>
            <div class="me">
                <span class="name">Maik Paulus</span>
                <span class="title">Software Engineer <span class="pipe">|</span> Dad <i class="fa fa-heart"></i></span>
            </div>
        </div>
    </header>
</template>

<script>
    import Logo from './Logo.vue';

    const PARALLAX_SPEED = 0.2;

    export default {
        props: {
            subpage: {
                type: Boolean,
                default: false
            }
        },

        mounted() {
            const bg = document.getElementsByClassName('bg')[0];
            const intro = document.getElementsByClassName('intro')[0];

            let headerHeightInPercent = Math.round(intro.offsetHeight / window.innerHeight * 100, 2);
            let shift;
            
            window.onscroll = (event) => {
                shift = PARALLAX_SPEED * window.scrollY;
                bg.style = `transform: translate(0, ${shift}px); height: calc(${headerHeightInPercent}% - ${shift}px);`;       
            };
            
            if (1024 < window.outerWidth) {
                window.onresize = (event) => {
                    headerHeightInPercent = Math.round(intro.offsetHeight / window.innerHeight * 100, 2); 
                    bg.style = `transform: translate(0, ${shift}px); height: calc(${headerHeightInPercent}% - ${shift}px);`;    
                };
            }
        },

        data() {
            return {
                subpage: this.subpage || this.$props.subpage
            }
        },

        components: {
            Logo
        }
    }
</script>

<style lang="scss">
    @import '../../App';

    header {
        height: 100%;
        width: 100%;
        overflow: hidden;
        overflow-y: hidden;
        .bg {
            height: 100%;
            width: 100%;
            background: url('/assets/img/lofoten.jpg') 35% 0% no-repeat;
            background-size: cover;
            position: absolute;
            z-index: -1;
        }

        .hello {
            position: relative;
            top: 37.5%;
            text-align: center;
        }

        .coin {
            margin: 0 auto;
            width: 10em;
            height: 10em;
            transition: -webkit-transform 1s ease-in;
            transform-style: preserve-3d;

            .side {
                position: absolute;
                top: -50%;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 100%;
                border: 6px solid $primary-green;
                text-align: center;
                backface-visibility: hidden;
            }

            .logo {
                background-color: $primary-green;
                transform: rotateY(180deg);

                svg {
                    width: 50%;
                    margin: 25% auto 0;
                    transition: 500ms ease-in-out;
                }
            }
        }

        .me {
            color: #fff;
            position: relative;
            top: -4em;

            span:not(.pipe) {
                display: block
            }

            .name {
                font-size: 2em;
                font-weight: bold;
                text-transform: uppercase;
            }
        }

        @keyframes flip {
            from {
                transform: rotateY(180deg); 
            }
            to {
                transform: rotateY(360deg); 
            }
        }

        .image img {
            border-radius: 100%;
        }

        @keyframes intro2 {
            from {
                opacity: 0; 
            }

            50% {
                opacity: 0;
            }

            to {
                opacity: 1; 
            }
        }

        nav.header {
            z-index: 200;
            width: 100%;
            opacity: 0;
        }

        nav.header ul {
            padding: $content-padding 0 0;
            margin: 0;
        }

        nav.header li {
            list-style-type: none;
            float: right;
            background: $primary-green;
            color: $white;
            padding: 0.5em;
            margin: 0 0.25em;
            border-radius: 5px;
            line-height: 0.75;
            transition: background-color 1s;
            cursor: pointer;
        }

        nav.header li:first-child { 
            margin: 0;
            padding: 0;
            float: left;
        }

        nav.header li:first-child svg { 
            width: 3em;
            padding: 0.5em;
        }

        nav.header li.kontakt {
            float: right;
            background: $white;
            color: $primary-green;
            padding: 0.5em 0;
            margin-right: 0;
            line-height: 2em;
            cursor: pointer;

            &:hover {
                background-color: $secondary-dark;

                a {
                    background-color: $secondary-dark;
                    color: $white;
                }
            }
        }

        nav.header li i {
            font-size: 1.25em;
            max-width: 32px;
        }

        nav.header li:not(.kontakt) i {
            padding: 0.3em;
        }

        .intro {
            background: $black;
            opacity: 0.9;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }

        @keyframes intro {
            from {
                opacity: 0.85; 
            }

            50% {
                opacity: 0.9;
            }

            to {
                opacity: 0.5;
            }
        }
    }

    .cmp-subpage {
        height: 50%;

        .bg {
            height: 50%;
        }

        .intro {
            height: 50%;
        }

        @media screen and (orientation: landscape) {
            height: 75%;

            .bg {
                height: 75%;
            }

            .intro {
                height: 75%;
            }
        }

        @media screen and (orientation: landscape) and (max-width: 47.975em) {
            height: 100%;

            .intro {
                height: 100%;
            }

            .bg {
                height: 100%;
            }

            .hello {
                font-size: 0.7em;
            }
        }

        @media screen and (max-width: 39.975em) {
            .hello {
                font-size: 0.7em;
                top: 45%;
            }
        }
    }

    body.ready {
        .coin {
            animation: flip 1.5s ease-in forwards;
        }

        .intro {
            animation: intro 1.5s ease-in forwards;
        }

        nav.header {
            animation: intro2 3s ease-in forwards;
        }
    }
</style>