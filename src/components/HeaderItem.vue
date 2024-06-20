<template>
        <b-navbar fixed-top centered>
            <!-- <template #brand>
                <h3>Jounes Jedlaoui</h3>
            </template> -->

            <template #end>
                <b-navbar-item href="#start">
                    Start
                </b-navbar-item>
                <b-navbar-item href="#about">
                    About
                </b-navbar-item>
                <b-navbar-item href="#skills">
                    Skills
                </b-navbar-item>
                <b-navbar-item href="#portfolio">
                    Portfolio
                </b-navbar-item>
            </template>
        </b-navbar>
</template>

<script setup>

</script>

<style lang="sass">
.navbar
    backdrop-filter: blur(22px)
    background-color: #00000096
    .navbar-item
        color: white
    .navbar-menu
        background-color: unset
</style>