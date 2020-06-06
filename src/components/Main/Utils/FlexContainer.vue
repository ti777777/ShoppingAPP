<template>
    <div class="flex-container">
        <slot/>
        <FlexBox/>
        <FlexBox/>
        <FlexBox/>
        <FlexBox/>
        <FlexBox/>
    </div>
</template>
<script>
import FlexBox from '../Utils/FlexBox.vue'
export default {
    components:{
        FlexBox
    }
}
</script>
<style scoped>
    .flex-container{
        display: flex;
        flex-wrap:wrap;
    }
</style>