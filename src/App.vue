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

.main
  display: flex
  flex-direction: column
  @font-face 
    
    h3
      font-size: 200%
      color: white
</style>
