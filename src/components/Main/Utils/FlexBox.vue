<template>
    <div class="flex-box">
        <slot/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .flex-box{
        flex:1;
        min-width: 200px;
        max-width: 300px;
    }
    @media screen and (max-width : 600px) {
        .flex-box{
            flex:1;
            min-width: 150px;
            max-width: 300px;
        }
    }
</style>