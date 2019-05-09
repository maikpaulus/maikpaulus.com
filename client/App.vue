<template>
    <router-view></router-view>
</template>

<script>
    export default {
        mounted () {
            let [ body ] = document.getElementsByTagName('body');
            body.className += 'ready';
        }
    }
</script>

<style lang="scss">
    @import '/App';

    @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        src: local("Open Sans"), local("OpenSans"), url("https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3aCWcynf_cDxXwCLxiixG1c.ttf") format("truetype");
    }

    html, .root {
        width: 100%;
        height: 100%;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        width: 100%;
        height: 100%;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        scroll-behavior: smooth;
    }

    a, a:active, a:visited {
        text-decoration: none;
        color: #fff;
        transition: 500ms;
    }

    h1 {
        color: $primary-green;
        margin: 4rem 0 2rem 0;
        line-height: 1.2;
    }

    h2 {
        margin: 0 0 1.5rem 0;
        line-height: 1.2;
    }

    ul li {
        list-style-type: none;
    }

    p {
        margin: 1.5rem 0;
    }

    .max-width {
        max-width: $content-max-width;
        margin: 0 auto;
        padding: 0 $content-padding;
    }

    .text-center {
        text-align: center;
    }

    .pipe {
        position: relative;
        top: -2px;
        display: inline;
    }

    a.action-button, button {
        color: $white;
        background: $primary-green;
        padding: 0.5em 1em;
        border-radius: 5px;
        transition: color 1s, background-color 1s;
        cursor: pointer;

        i {
            padding-right: 0.5em;
            font-size: 1.25em;
        }

        &.alternate {
            color: $primary-green;
            background: $white;
        }

        &:hover {
            color: $white;
            background: $secondary-dark;
        }

        &.alternate:hover {
            color: $white;
            background: $secondary-dark;
        }
    }
</style>