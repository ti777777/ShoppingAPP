<template>
    <div class="text-right">
        <div class="mt-5 h4 text-center">購物車</div>
        <CartTable/>
        <div class="h5">總計{{this.total}}</div>
        <button @click="checkPayment()" class="rounded-pill px-3 mb-5">結帳</button>
        <div class="row">
        </div>
    </div>
</template>
<script>
import CartTable from '../components/Main/Cart/CartTable.vue'
export default {
    computed:{
        cartItems:function(){
            return this.$store.state.cartItems;
        },
        total:function(){
            var t=0;
            this.cartItems.forEach(element => {
                t+=element.price*element.amount;
            });
            return t;
        }
    },
    components:{
        CartTable
    },
    methods:{
        checkPayment:function(){
        },
        checkout:function(){

        }
    }
}
</script>
<style scoped>

</style>