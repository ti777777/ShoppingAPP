<template>
    <div class="text-left">
        <div class="container-fluid">
            <div class="row my-5">
                <div class="col-md-8">
                    <div class="p-3 rounded shadow clearfix">
                        <div class="d-md-table"  style="width:100%;">
                            <div class="d-md-table-row " style="width:100%;" v-for="item in this.cartItems" v-bind:key="item.id">
                                <div class="d-md-table-cell"><span>{{item.name}}</span></div>
                                <div class="d-md-table-cell"><img width="50" height="50" v-bind:src=item.img alt=""></div>
                                <div class="d-md-table-cell"><span>售價{{item.price}}</span></div>
                                <div class="d-md-table-cell"><span>x{{item.amount}}件</span></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 rounded shadow">
                    <h3>訂單細節</h3>
                    <pre>
姓名 :     {{currentOrder.consignee}}
電話 :     {{currentOrder.phone}}
地址 :     {{currentOrder.address}}
付款方式 : {{currentOrder.payment}}
配送方式 : {{currentOrder.logistic}}
                    </pre>
                    <hr>
                    <span>應付總<span class="text-danger"><b><i>{{this.total+60}}</i></b></span>元</span>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    computed:{
        cartItems:function(){
            return this.$store.state.cartItems;
        },
        currentOrder:function(){
            return this.$store.state.currentOrder;
        },
        total:function(){
            var t=0;
            this.cartItems.forEach(element => {
                t+=element.price*element.amount;
            });
            return t;
        }
    }
}
</script>
<style scoped>

</style>