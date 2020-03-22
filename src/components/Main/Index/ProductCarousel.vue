<template>
    <div class="mt-2 p-2 box-shadow bg-light" style="position:relative;">
        <div class="carousel-title p-2 mb-2">
            {{carouselInfo.title}}
        </div>
        <carousel :nav="false" :dots="false" :responsive="this.responsive" >
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
            <!--<ProductItem v-for="item in items" :key="item" v-bind:item="item"  />-->
            <template v-slot:prev><span class="prev" style="position:absolute; bottom:calc(50% - 30px); left:0; z-index:2; background:white; border:1px solid;">prev</span></template>
            <template v-slot:next><span class="next" style="position:absolute; bottom:calc(50% - 30px); right:0; z-index:2; background:white; border:1px solid;">next</span></template>
        </carousel>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import ProductItem from './ProductCarouselItem'

export default {
    components: { carousel,ProductItem  },
    props:[
        "carouselInfo"
    ],
    data(){
        return{
            responsive:{
                0:{items:2},
                480:{items:3},
                880:{items:4},
                1024:{items:5}
            },
            items:[]
        }
    },
    created(){
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", ()=>{
            var res=JSON.parse(oReq.responseText);
            this.items=this.items.concat(...res.data);
        });
        oReq.open("GET", this.carouselInfo.requestUrl);
        //oReq.open("GET", "https://reqres.in/api/users?page=2");
        
        oReq.send();
    }

}
</script>

<style scoped>
    .carousel-title{
        background-color: #999;
    }
    .item{
        border:1px solid;
        height:250px;
    }
    .box-shadow{
        text-align: left;
        box-shadow: 0px 2px 5px #999;
    }
</style>