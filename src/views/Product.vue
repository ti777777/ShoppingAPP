<template>
    <div >
        <SearchBar/>
        <ProductDetail v-bind:id="this.$route.params.id" :img="this.product.img" :name="this.product.name" :catergory="this.product.catergory" :price="this.product.price" :description="this.product.description"/>
        {{product.id}}
    </div>
</template>

<script>
import SearchBar from '../components/Main/Utils/SearchBar'
import ProductDetail from '../components/Main/Product/ProductDetail'
export default {
    components:{
        SearchBar,
        ProductDetail
    },
    computed:{
        product:function(){
            
            var id =this.$route.params.id;
            return this.fakeProducts.filter(function(i){return i.id==id})[0];
            
        }
    },
    methods:{
    },
    mounted:function(){
    },
    data:function(){
        return{
            fakeProducts:[
                {
                    id:"1",
                    img:"https://shop.tsaitou.com/img/1.jpg",
                    name:"通往夏天的隧道，再見的出口",
                    catergory:"",
                    price:250,
                    amount:3,
                    option:""
                },
                {
                    id:"2",
                    img:"https://shop.tsaitou.com/img/2.jpg",
                    name:"Java SE8 OCPJP 進階認證指南",
                    catergory:"",
                    price:500,
                    amount:3,
                    option:""
                },
                {
                    id:"3",
                    img:"https://shop.tsaitou.com/img/3.jpg",
                    name:"Kubernetes建置與執行",
                    catergory:"",
                    price:400,
                    amount:3,
                    option:""
                },
                {
                    id:"4",
                    img:"https://shop.tsaitou.com/img/4.jpg",
                    name:"Vue建置與執行",
                    catergory:"",
                    price:350,
                    amount:3,
                    option:""
                },
                {
                    id:"5",
                    img:"https://shop.tsaitou.com/img/5.jpg",
                    name:"人月神話",
                    catergory:"",
                    price:300,
                    amount:3,
                    option:""
                },
                {
                    id:"6",
                    img:"https://shop.tsaitou.com/img/6.jpg",
                    name:"夏日大作戰",
                    catergory:"",
                    price:200,
                    amount:3,
                    option:""
                },
                {
                    id:"7",
                    img:"https://shop.tsaitou.com/img/7.jpg",
                    name:"OPERATING SYSTEM CONCEPTS",
                    catergory:"",
                    price:1200,
                    amount:3,
                    option:""
                },
                {
                    id:"8",
                    img:"https://shop.tsaitou.com/img/8.jpg",
                    name:"Fundamentals of Database Systems",
                    catergory:"",
                    price:1000,
                    amount:3,
                    option:""
                },
                {
                    id:"9",
                    img:"https://shop.tsaitou.com/img/9.jpg",
                    name:"基礎資料結構使用C",
                    catergory:"",
                    price:500,
                    amount:3,
                    option:""
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>