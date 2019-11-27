<template>
    <div>
        <slot/>
        <slot/>
        {{this.a}}
    </div>    
</template>
<script>
export default {
    components:{
    },
    data(){
        return {
            a:""
        }
    },
    mounted(){
        this.a=this.$el.innerText;
    }
}
</script>
<style scoped>

</style>