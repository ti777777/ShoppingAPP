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
</style>