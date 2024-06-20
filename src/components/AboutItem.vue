<template>
    <div id="about" class="about sheet">
        <h2>About</h2>
        <div class="about-main">

            <article class="profile-pic">
                <img src="@/assets/img/jpic.png">
                <h3>Who am I?</h3>
            </article>
            <article class="gap">

            </article>
            <article class="description">
                <br>
                <p>Hej! I'm a software engineer based in Stockholm and currently the Lead Frontend Engineer for Better@Home Service GmbH in Berlin.
                    My passions lie with interactive software solutions such as PWAs, cross-plattform apps and all kinds of multimedia applications.
                    Accessibility and ease of use are my main concerns when designing and implementing a project from top to bottom.
                </p>
                <br>
                <p>
                    Apart from my technical expertise I am also a musician and visual artist.
                </p>
                <br>
                <p>
                    Let's create something together!
                </p>
            </article>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="sass">
.about
    backdrop-filter: blur(10px)
    background-color: #18181891
    border-radius: 9px
    padding: 5vw
.profile-pic
    text-align: center
img
    border-radius: 98%
    max-width: 80%
.gap
    width: 20vw
.about-main
    color: white
    display: flex
    flex-direction: row
    align-items: center
    width: 60vw
    h3
        font-size: 200%
@media (orientation: portrait)
    .about-main
        flex-direction: column
        padding-top: 5vh
</style>