<template>
    <footer class="cmp-footer text-center">
        <div class="max-width">
            <a v-on:click="$router.push('/')">
                <Logo></Logo>
            </a>
            <div class="subtext"><i class="fa fa-copyright"></i> 2019, München <span class="pipe">|</span> Alle Rechte vorbehalten.</div>
        </div>
        <nav class="footer max-width">
            <ul>
                <li><a href="/impressum"><i class="fa fa-balance-scale"></i>Impressum</a></li>
                <li class="social"><a target="_blank" href="https://www.xing.com/profile/Maik_Paulus"><i class="fa fa-xing"></i></a></li>
                <li class="social"><a href="mailto:work@maikpaulus.com"><i class="fa fa-envelope"></i></a></li>
                <li class="social"><a target="_blank" href="https://www.github.com/maikpaulus"><i class="fa fa-github"></i></a></li>
                <li><a href="/datenschutz"><i class="fa fa-lock"></i>Datenschutz</a></li>
            </ul>
        </nav>
    </footer>
</template>

<script>
    import Logo from './Logo.vue';

export default {
    components: {
        Logo
    }
}
</script>

<style lang="scss">
    @import '../../App';

    footer {
        padding: 4em 0 $content-padding 0;
        background: $primary-green;
        color: $white;

        svg {
            width: 3em;
        }

        .subtext {
            padding: 2.25em 0 3em;
            font-size: 0.8em;
        }

        .pipe {
            top: -1px;
        }

        nav.footer {
            ul {
                margin: 0 auto;
                padding: 0;
                display: inline-block;
            }

            li {
                float: left;
                cursor: pointer;
                border-radius: 5px;
                margin: 0 0.15em;
                line-height: 1.5em;
                padding: 0.25em 0;

                a {
                    font-size: 0.8em;

                    i {
                        font-size: 1em;
                        line-height: 1.125em;
                        color: $primary-green;
                        transition: color .5s;
                    }
                }
            }

            li:first-child, li:last-child {
                padding: 0.25em 0.5em;
                
                a {
                    font-size: 0.8em;
                    color: $white;

                    i {
                        color: $white;
                        padding-right: 0.25em;
                        line-height: 1em;
                    }

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            li.social {
                background-color: $white;
                width: 2em;
                transition: background-color .5s;

                &:hover {
                    background-color: $secondary-dark;

                    i {
                        color: $white;
                    }
                }
            }
        }
    }
</style>