<template>
    <div >
        <div class="p-2 text-left " >
            <div class=" p-3" style="display:inline-block; min-width:250px;">
                <img  v-bind:src="this.img">
            </div>
            <div class="p-3 pt-5" style="display:inline-block; vertical-align:middle;min-height:450px;">
                <p><pre>品名:    <span>{{this.name}}</span></pre></p>
                <p><pre>分類:    <span>{{this.catergory}}</span></pre></p>
                <p><pre>售價:    <span>{{this.price}}</span></pre></p>
                <p >
                    數量:
                    <select name="" v-model="this.amount">
                        <option v-for="n in 10" v-bind:key="n">{{n}}</option>
                    </select>
                    <button class="addtocartbtn ml-3" @click="addToCart()"><i class="fas fa-shopping-cart"  ></i>&nbsp;加入購物車</button>
                </p>
                <ShareNetwork
                    class="btn border mb-2 mr-2" 
                    style="color: #3b5998;"
                    network="facebook"
                    v-bind:url="this.currentUrl"
                    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                    quote="The hot reload is so fast it\'s near instant. - Evan You"
                    hashtags="vuejs,vite,javascript"
                    >
                    <i class="fab fah fa-lg fa-facebook"></i>
                    <span>分享到facebook</span>
                </ShareNetwork>
                <ShareNetwork
                    class="btn border mb-2 " 
                    style="color: #00acee;"
                    network="twitter"
                    v-bind:url="this.currentUrl"
                    v-bind:title="this.name+this.description"
                    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                    quote="The hot reload is so fast it\'s near instant. - Evan You"
                    hashtags="vuejs,vite,javascript"
                    >
                    <i class="fab fah fa-lg fa-twitter"></i>
                    <span>分享到twitter</span>
                </ShareNetwork>
                <p><pre>商品描述<p>{{description}}</p></pre></p>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name:'ProductDetail',
    props:[
        'id',
        'name',
        'img',
        'catergory',
        'price',
        'description'
    ],
    components:{
    },
    computed:{
        currentUrl:function(){
            return location.href;
        }
    },
    mounted(){
        this.amount=1;
    },
    methods:{
        addToCart(){
            this.$store.commit("addCartItem",{id:this.id,name:this.name,img:this.img,price:this.price,amount:this.amount});
        }
    }
}
</script>

<style scoped>
    .addtocartbtn{
        padding:10px;
        color:white;
        background-color: rgb(175, 6, 6);
        border:none;
        border-radius: 5px;
        outline: none;
    }
    img{
        max-width:220px;
        max-height:300px;
    }
</style>