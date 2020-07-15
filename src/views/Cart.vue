<template>
    <div class="text-right">
        <div class="mt-5 h4 text-center"></div>
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
        
        <div class="h5">總計{{this.total}}</div>
        <button id="" @click="checkPayment()" class="rounded-pill px-3 mb-5">結帳</button>
        <button id="" @click="checkout()" class="rounded-pill px-3 mb-5">確認</button>
        <button id="" @click="sendOrder()" class="rounded-pill px-3 mb-5">送出訂單</button>
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
        cleanPage:function(){
            document.getElementById("step-cart").classList.remove("step-active");
            document.getElementById("step-payment").classList.remove("step-active");
            document.getElementById("step-checkout").classList.remove("step-active");
            document.getElementById("cartTable").classList.add("d-none");
        },
        checkPayment:function(){
            if(this.cartItems.length!=0&&this.total!=0){
                this.cleanPage();
                document.getElementById("step-payment").classList.toggle("step-active");

            }else{
                alert("無法進行下一步");
            }
            
        },
        checkout:function(){
                this.cleanPage();
                document.getElementById("step-checkout").classList.toggle("step-active");

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