<template>
    <div class="app-navbar">
        <router-link to="/">Inicio</router-link>
        <router-link to="/about">Acerca de</router-link>
        <router-link to="/services">Servicios</router-link>
    </div>
</template>

<script>
    export default {
        name: "AppNavbar"
    }
</script>

<style lang="scss">
    .app-navbar {
        display: flex;
        align-items: center;
        padding: 10px;
        margin: 10px;
        background-color: #222;

        border-radius: 10px;

        a {
            font-size: 20px;
            text-decoration: none;
            color: #fff;
            margin: 0px 10px;
            transition: all 0.2s;

            &:hover {
                color: #bebebe;
            }
        }
    }
</style>