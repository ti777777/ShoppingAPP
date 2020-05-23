<template>
    <div class="text-left mt-2 p-2 bg-light" style="position:relative; box-shadow:0px 0px 5px 0px rgba(0,0,0,0.75);border-radius:3px;">
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
        
        oReq.send();
    }

}
</script>

<style scoped>
    .carousel-title{
        line-height: 20px;
        border:1px solid #999;
        background-color: #aaa;
        color: white;
        text-shadow: -1px 0 #888, 0 1px #888,
      1px 0 #888, 0 -1px #888;
    }
    .carousel-title::before{
        content:"\00a0";
        width: 10px;
        background-color: cornflowerblue;
    }
    .item{
        border:1px solid;
        height:250px;
    }
</style>