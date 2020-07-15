<template>
    <div>
        <div class="d-md-table d-block table  table-bordered">
            <div class="d-md-table-row  d-block">
                
                <div class="d-md-table-cell d-none p-2 border">
                    
                </div>
                <div class="d-md-table-cell d-none p-2 border">
                    
                </div>
                <div class="d-md-table-cell d-none p-2 border">
                    品名
                </div>
                <div class="d-md-table-cell d-none p-2 border">
                    單價
                </div>
                <div class="d-md-table-cell d-none p-2 border">
                    數量
                </div>
                <div class="d-md-table-cell d-none p-2 border">
                    小計
                </div>
            </div>
            <div class="d-md-table-row d-block border text-right" v-for="item in cartItems" v-bind:key="item.id"> 
                <div class="d-md-table-cell d-block ">
                    <span class="text-danger fa fa-times float-left p-3"></span>
                </div>
                <div class="d-md-table-cell d-block p-2">
                    <img src="https://placeimg.com/200/200/any?1" alt="">
                </div>
                <div class="d-md-table-cell d-block p-2">
                    <span class="d-inline d-md-none float-left">品名</span>{{item.title}}
                </div>
                <div class="d-md-table-cell d-block p-2">
                    <span class="d-inline d-md-none float-left">單價</span>{{item.price}}
                </div>
                <div class="d-md-table-cell d-block p-2">
                    <span class="d-inline d-md-none float-left">數量</span> 
                    <select name="" v-model="item.amount" >
                        <option v-for="n in 50" v-bind:key="n" v-bind:value="n">{{n}}</option>
                    </select>
                </div>
                <div class="d-md-table-cell d-block p-2">
                    <span class="d-inline d-md-none float-left">小計</span>{{item.price*item.amount}}
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
        }
    },
    methods:{
        deleteItem:function(id){
            this.$store.commit("deleteCartItem",id);
        }
    }
}
</script>
<style scoped>
    .table{
        table-layout: fixed;
    }
    img{
        width: 100%;
    }
    input{
        width: 60%;
    }
    .d-md-table-row:nth-child(2n){
        background-color: #ededed;
    }
</style>