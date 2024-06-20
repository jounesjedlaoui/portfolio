<template>
    <div id="skills" class="skills sheet">

        <div>
            <h2>Skills</h2>
        </div>
        <br>
        <i>A general overview of my professional experience</i>
        <section>
                <section class="tab">
                    <p :class="[{'active' : selected==='proglang'}]" @click="selected = 'proglang'">Programming Languages</p>
                    <p :class="[{'active' : selected==='frameworks'}]" @click="selected = 'frameworks'">Frameworks</p>
                    <p :class="[{'active' : selected==='tools'}]" @click="selected = 'tools'">Tools</p>
                    <p :class="[{'active' : selected==='fun'}]" @click="selected = 'fun'">Other fun stuff</p>
                    <p :class="[{'active' : selected==='lang'}]" @click="selected = 'lang'">Languages</p>

                </section>

                <div v-if="selected==='proglang'" class="tab-content ">
                    <SkillProgress class="sp" title="Javascript" :value="95" type="is-info"/>
                    <SkillProgress class="sp" title="CSS/SASS" :value="95" type="is-info"/>
                    <SkillProgress class="sp" title="GLSL/Metal" :value="75" type="is-info"/>
                    <SkillProgress class="sp" title="Java + Kotlin" :value="80" type="is-info"/>
                    <SkillProgress class="sp" title="Python" :value="70" type="is-info"/>
                    <SkillProgress class="sp" title="C#" :value="65" type="is-info"/>
                    <SkillProgress class="sp" title="Swift" :value="65" type="is-info"/>
                    <SkillProgress class="sp" title="SQL" :value="69" type="is-info"/>

                    
                </div>

                <div v-if="selected==='frameworks'" class="tab-content">
                    <SkillProgress class="sp" title="Vue.js" :value="95" type="is-info"/>
                    <SkillProgress class="sp" title="Capacitor.js" :value="95" type="is-info"/>
                    <SkillProgress class="sp" title="React/Native" :value="80" type="is-info"/>
                    <SkillProgress class="sp" title="Node.js" :value="90" type="is-info"/>
                    <SkillProgress class="sp" title="Nuxt.js" :value="72" type="is-info"/>
                    <SkillProgress class="sp" title="THREE.js" :value="78" type="is-info"/>
                </div>

                <div v-if="selected==='tools'" class="tab-content">
                    <SkillProgress class="sp" title="VSCode" :value="95" type="is-info"/>
                    <SkillProgress class="sp" title="Android Studio" :value="75" type="is-info"/>
                    <SkillProgress class="sp" title="XCode" :value="65" type="is-info"/>
                    <SkillProgress class="sp" title="Blender" :value="72" type="is-info"/>
                </div>

                <div v-if="selected==='fun'" class="tab-content" >

                    <SkillProgress class="sp" title="Guitar" :value="95" type="is-info"/>
                    <SkillProgress class="sp" title="Bass" :value="75" type="is-info"/>
                    <SkillProgress class="sp" title="Piano" :value="55" type="is-info"/>
                    <SkillProgress class="sp" title="Cello" :value="35" type="is-info"/>
                    <SkillProgress class="sp" title="Violin" :value="30" type="is-info"/>
                    <SkillProgress class="sp" title="Drums" :value="15" type="is-info"/>

                </div>

                <div v-if="selected==='lang'" class="tab-content">
                    <SkillProgress class="sp" title="English" :value="100" />
                    <SkillProgress class="sp" title="German" :value="100" />
                    <SkillProgress class="sp" title="French" :value="90" />
                    <SkillProgress class="sp" title="Swedish" :value="40" />

                </div>
        </section>
    </div>
</template>

<script >
import SkillProgress from './SkillProgress.vue'

export default {
    components: {SkillProgress},
    data() {
        return {
            selected: "proglang"
        }
    }
}
</script>

<style lang="sass">
.sp
    margin-bottom: 1rem
.skills
    color: white
    section
        width: 60vw
.tab
    display: flex
    align-items: center
    justify-content: space-around
    flex-direction: row
    margin: 2vmin
    p
        cursor: pointer
    .active
        // animation: fadeInUp 1s
        border-bottom: 2px solid aquamarine
.tab-content
    animation: fadeInUp 1s

h2
    font-size: 2.3rem


</style>