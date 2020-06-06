<template>
    <div>
        <div class="mt-5 h4">購物車</div>
        <CheckoutList/>
        <div class="h5 text-right">總計 $5000</div>
        <button class="rounded-pill float-right px-3 mb-5">結帳</button>
    </div>
</template>
<script>
import CheckoutList from '../components/Main/Checkout/CheckoutList.vue'
export default {
    components:{
        CheckoutList
    }
}
</script>
<style scoped>

</style>