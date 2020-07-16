<template>
    <div class="my-5 text-right clearfix">
        <div class="container-fluid">
            <div class="row text-center">
                <div class="col-4">
                    <div id="step-cart" style="width:50px; height:50px; margin:0 auto;" class="p-3 bg-light step-active rounded-circle">1</div>
                    購物車
                </div>
                <div class="col-4">
                    <div id="step-payment" style="width:50px; height:50px; margin:0 auto;" class="p-3 bg-light border rounded-circle step">2</div>
                    付款寄送資料
                </div>
                <div class="col-4">
                    <div id="step-checkout" style="width:50px; height:50px; margin:0 auto;" class="p-3 bg-light border rounded-circle">3</div>
                    確認訂單
                </div>
            </div>
        </div>
        <CartTable id="cartTable"/>
        <PaymentTable id="paymentTable"/>
        <CheckoutTable id="checkoutTable"/>
        <button id="undo-btn" class="mb-5 rounded-pill float-left">上一步</button>
        <button id="cart-btn" @click="checkPayment()" class="mb-5 rounded-pill px-3 mb-5 float-right">結帳</button>
        <button id="payment-btn" @click="checkout()" class="mb-5 rounded-pill px-3 mb-5 float-right">確認</button>
        <button id="checkout-btn" @click="sendOrder()" class="mb-5 rounded-pill px-3 mb-5 float-right">送出訂單</button>
    </div>
</template>
<script>
import CartTable from '../components/Main/Cart/CartTable.vue'
import PaymentTable from '../components/Main/Cart/PaymentTable'
import CheckoutTable from '../components/Main/Cart/Checkout'
export default {
    computed:{
        cartItems:function(){
            return this.$store.state.cartItems;
        },
        currentOrder:function(){
            return this.$store.state.currentOrder;
        }
    },
    components:{
        CartTable,
        PaymentTable,
        CheckoutTable

    },
    mounted(){
        this.checkCart();
    },
    methods:{
        cleanPage:function(){
            document.getElementById("step-cart").classList.remove("step-active");
            document.getElementById("step-payment").classList.remove("step-active");
            document.getElementById("step-checkout").classList.remove("step-active");
            document.getElementById("cartTable").classList.add("d-none");
            document.getElementById("paymentTable").classList.add("d-none");
            document.getElementById("checkoutTable").classList.add("d-none");
            document.getElementById("undo-btn").classList.add("d-none");
            document.getElementById("cart-btn").classList.add("d-none");
            document.getElementById("payment-btn").classList.add("d-none");
            document.getElementById("checkout-btn").classList.add("d-none");
            
        },
        checkCart:function(){
                
            this.cleanPage();
            document.getElementById("step-cart").classList.toggle("step-active");
            document.getElementById("cart-btn").classList.toggle("d-none");
            document.getElementById("cartTable").classList.toggle("d-none");
        },
        checkPayment:function(){
            if(this.cartItems.length!=0&&this.total!=0){
                this.cleanPage();
                document.getElementById("step-payment").classList.toggle("step-active");
                document.getElementById("undo-btn").classList.toggle("d-none");
                document.getElementById("payment-btn").classList.toggle("d-none");
                document.getElementById("undo-btn").onclick=this.checkCart;
                document.getElementById("paymentTable").classList.remove("d-none");


            }else{
                alert("無法進行下一步");
            }
            
        },
        checkout:function(){
            if(this.currentOrder.payment!=""&&this.currentOrder.logistic!=""&&this.currentOrder.consignee!=""&&this.currentOrder.phone!=""&&this.currentOrder.address!=""){
                this.cleanPage();
                document.getElementById("step-checkout").classList.toggle("step-active");
                document.getElementById("undo-btn").classList.toggle("d-none");
                document.getElementById("checkout-btn").classList.toggle("d-none");
                document.getElementById("undo-btn").onclick=this.checkPayment;
                document.getElementById("checkoutTable").classList.remove("d-none");
            }else{
                alert("請輸入完全");
            }

        },
        sendOrder:function(){

        }
    }
}
</script>
<style scoped>
    .step-active{
        background: #333!important;
        color:white;
    }
    .step::before{
        content:" ";
        position: absolute;
        width: 200%;
        height: 1px;
        background-color: #ddd;
        top: 25px;
        left: -50%;
        z-index : -1;
    }
</style>