<template>
    <div id="start" class="start sheet">
        <video autoplay muted loop>
            <source src="@/assets/video/Dammtest.mp4" type="video/mp4"/>
        </video> 
        <div class="start_main" >
            <h1>Jounes Jedlaoui</h1>
            <section class="typed">

            </section>
            
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>
@import '../assets/scss/typed.scss'

.start
    color: white

    .start_main
        position: relative
        height: 50vh
        display: flex
        align-items: center
        flex-direction: column
        justify-content: center
    h1
        font-size: 5vh
        color: white
        text-align: center
    ul
        display: flex
        flex-direction: row
        justify-content: space-around
    video
        position: absolute
        width: 100vw
        top: -65vh
        left: 0
        z-index: 0
    .typed
        @include typed("Web", "Native", "GFX", "Audio", 2, (caret: true))

@media (orientation: portrait)
    .start
        video
            top: 0
</style>