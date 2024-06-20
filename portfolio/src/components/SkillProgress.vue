<template >
    <h3>{{ title }}</h3>
    <!-- <b-progress  :value="value" :type="type"></b-progress> -->
    <div>

        <div class="j-progress" :style="{display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'}">
            <div class="j-progress-bar" :style="{width: value-10+'%',
                    height: '1rem',
                    borderRadius: '20px',
                    background: 'rgb(2,0,36)',
                    background:' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 19%, rgba(0,255,237,1) 100%)'}"  ></div>
        <p>{{ value + '%' }}</p>
    </div>

</div>
</template>

<script>
export default {
    props: {
        title: String,
        value: Number,
        type: String
    },
    
}
</script>

<style lang="sass" scoped>
.skill-progress
    // margin-bottom: .7rem
    .j-progress
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
        height: 1rem
        background-color: white
        border-radius: 20px
        .j-progress-bar
@media (orientation: portrait) 
    .skills
        section
            width: 95vw
            // animation: slidein 2s easeout
</style>