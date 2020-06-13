<template>
    <div class="text-right">
        <div class="mt-5 h4 text-center">購物車</div>
        <CheckoutList/>
        <div class="h5">總計 $5000</div>
        <button class="rounded-pill px-3 mb-5">結帳</button>
        <div class="row">
            <PaymentInfo/>
            <LogisticInfo/>
        </div>
    </div>
</template>
<script>
import CheckoutList from '../components/Main/Checkout/CheckoutList.vue'
import PaymentInfo from '../components/Main/Checkout/PaymentInfoBox.vue'
import LogisticInfo from '../components/Main/Checkout/LogisticInfoBox.vue'
export default {
    components:{
        CheckoutList,
        PaymentInfo,
        LogisticInfo
    }
}
</script>
<style scoped>

</style>