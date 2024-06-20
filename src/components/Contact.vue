<template >
    <div class="contact">

        <h2>Contact</h2>
        <br>
        <p>Don't hesitate to reach out! You can reach me on any of my socials or via mail.</p>
        <br>
        <br>
        <section>
            <div class="social-item">
                <img src="@/assets/instagram.png">
                <a href="https://www.instagram.com/jounuoj/">Instagram</a>
            </div>
            <div class="social-item">
                <img src="@/assets/github.png">
                <a href="https://github.com/Jefrey776">Github</a>
            </div>
            <div class="social-item">
                <img src="@/assets/mail.png">
                <div>
                    <a  href="jounesjedlaoui@aol.de">E-Mail</a>
                    <p>jounesjedlaoui@aol.de</p>
                </div>
            </div>
        </section>
</div>

</template>

<style lang="sass">
.contact
    color: white
    display: flex
    flex-direction: column
    align-items: center
    img
        height: 10vh
    .social-item
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
        width: 40vw
        padding: 3vh 10vh
        a
            float: right
            color: aquamarine
@media (orientation: portrait)
    .contact
        .social-item
            flex-direction: column
            align-items: center
            justify-content: space-between
            width: 70vw
            padding: 3vh 10vh
        div
            display: flex
            flex-direction: column
            a
                text-align: center
                float: unset
</style>