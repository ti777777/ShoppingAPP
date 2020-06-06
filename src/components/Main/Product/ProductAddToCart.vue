<template>
    <div class="">
        <button><i class="fas fa-shopping-cart"></i>&nbsp;加入購物車</button>
    </div>
</template>
<script>
export default {
    name:'ProductAddToCart'
}
</script>
<style scoped>
    button{
        padding:10px;
        color:white;
        background-color: rgb(175, 6, 6);
        border:none;
        border-radius: 5px;
        outline: none;
    }
    button:focus{
        outline:none;
    }
</style>