<template>
    <div id="portfolio" class="portfolio sheet">
        <div>
            <h2>Portfolio</h2>
            <br>
        </div>
        <b-carousel
            :repeat="true"
            :animated="true"
            :autoplay="true"
            interval="20000"
            :pause-hover="true"
            :pause-info="false">
            
            <b-carousel-item>
                <div class="c-item">
                    <h3>BeHome Portal</h3>
                    <i>Vue.js / Capacitor / Ruby on Rails</i>
                    <br />

                    <div class="content">
                        
                        <section class="description" >
                            <p>
                                An app-launcher optimized for elderly people, that controls and displays personal alarms of a smart home system, and provides an interface to access system-functions and apps.
                            </p>
                        </section>
                        <section class="img">
                            <img src="@/assets/img/portal.png">
                        </section>
                    </div>
                </div>
            </b-carousel-item>

            <b-carousel-item>
                <div class="c-item">
                    <h3>BeHome Pflegeapp</h3>
                    <i>Vue.js / Capacitor / Ruby on Rails</i>
                    <br>
                    <div class="content">
                        
                        <section class="description" >
                            <p>
                                An app used by nurses and caretakers in assisted living facilities all over Germany to monitor patient status and communicate with colleagues.
                            </p>
                        </section>
                        <section class="img">
                      
                                    <img src="@/assets/img/pflege1.jpg" >
                             
                                
                        </section>
                    </div>
                </div>
            </b-carousel-item>

            <b-carousel-item>
                <div class="c-item">
                    <h3>BeHome Admin</h3>
                    <i>Vue.js / Nuxt.js / Ruby on Rails</i>
                    <br>

                    <div class="content">
                        
                        <section class="description" >
                            <p>
                                An internal admin website for configuration and customer management.
                            </p>
                        </section>
                        <section class="img">
                            <img src="@/assets/img/beHomeAdmin.png">
                        </section>
                    </div>
                </div>
            </b-carousel-item>

            <b-carousel-item>
                <div class="c-item">
                    <h3>Realtime Fluidsimulation</h3>
                    <i>Swift / Metal/GLSL</i>
                    <br>
                    <div class="content">
                        
                        <section class="description" >
                            <p>
                                My Bachelor thesis. A realtime audiovisualizer that leverages the computing power of the GPU to render a fluid simulation, that reacts to live guitar input.
                            </p>
                            <a href="@/../public/pdf/Erstellung_einer_Software_zur_Audiovisualisierung_mittels_Echtzeit_Fl_ssigkeitssimulation.pdf">Thesis</a>
                        </section>
                        <section class="img">
                            <img src="@/assets/img/audioflux.png">
                        </section>
                    </div>
                </div>
            </b-carousel-item>

            <b-carousel-item>
                <div class="c-item">
                    <h3><a href="https://jounesjedlaoui.github.io/rythmvibes/">Rhythmvibe</a ></h3>
                    <i>React / React Native / THREE.js</i>
                    <br>
                    <div class="content">
                        
                        <section class="description" >
                            <p>
                                A Uni project. An audiovisualizer that runs in the browser as well as on mobile devices. 
                            </p>
                        </section>
                        <section class="img">
                            <img src="@/assets/img/rythmvibes.png" >
                        </section>
                    </div>
                </div>
            </b-carousel-item>


        </b-carousel>
    </div>
</template>

<script setup>

</script>

<style lang="sass">
.carousel
    width: 70vw
    color: white
    i
        color: gray
    .c-item
        width: 80%
        margin: 5vw
        min-height: 50vh
        a
            color: white
        img
            padding: 3vmin
</style>