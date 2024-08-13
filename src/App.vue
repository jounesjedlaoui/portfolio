<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderItem from './components/HeaderItem.vue';
import StartPage from './components/StartPage.vue';
import AboutItem from './components/AboutItem.vue';
import SkillsItem from './components/SkillsItem.vue';
import PortfolioItem from './components/PortfolioItem.vue';
import Contact from './components/Contact.vue'
</script>
 
<template>
  <HeaderItem />
  <div class="main">

    <StartPage />
    <AboutItem />
    <SkillsItem />
    <PortfolioItem />
    <Contact />
  </div>  
  <!-- <RouterView /> -->
</template>


<script>
</script>
<style lang="sass" >
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Yeseva+One&display=swap')
.main
  display: flex
  flex-direction: column
  font-family: "Atkinson Hyperlegible"
  font-style: normal
  .yeseva-one-regular 
    font-family: "Yeseva One", serif
    font-weight: 400
    font-style: normal
  .atkinson-hyperlegible-regular 
    font-family: "Atkinson Hyperlegible", sans-serif
    font-weight: 400
    font-style: normal


  .atkinson-hyperlegible-bold 
    font-family: "Atkinson Hyperlegible", sans-serif
    font-weight: 700
    font-style: normal


  .atkinson-hyperlegible-regular-italic 
    font-family: "Atkinson Hyperlegible", sans-serif
    font-weight: 400
    font-style: italic


  .atkinson-hyperlegible-bold-italic 
    font-family: "Atkinson Hyperlegible", sans-serif
    font-weight: 700
    font-style: italic

  h1, h2
    font-family: "Yeseva One"
    
  h3
  
    font-size: 200%
    color: white
  p
    font-family: "Atkinson Hyperlegible"
    font-style: normal
    
</style>
