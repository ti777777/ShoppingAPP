<template>
    <div >
        <div class="p-2 text-left bg-light border border-success" >
            <div class=" p-3" style="display:inline-block;">
                <img src="https://via.placeholder.com/220x300.png">
            </div>
            <div class="p-3" style="display:inline-block; vertical-align:middle;min-height:450px;">
                <p>123</p>
                <p>123</p>
                <p>123</p>
                <p>123</p>
                <p>123</p>
                <p>$12315</p>
                <ProductAddToCart/>
            </div>
        </div>
    </div>    
</template>

<script>
import ProductAddToCart from '../Product/ProductAddToCart'
export default {
    name:'ProductDetail',
    components:{
        ProductAddToCart
    }
}
</script>

<style scoped>

</style>