<template>
    <div class="text-left mt-2 p-2 " style="position:relative;">
        <div class="carousel-title p-2  pl-3 rounded-pill border mb-2">
            {{carouselInfo.title}}
        </div>
        <carousel :nav="false" :dots="false" :responsive="this.responsive" >
            <FlexBox><product-box class="p-1" name="通往夏天的隧道，再見的出口" url="/product/1" img="https://shop.tsaitou.com/img/1.jpg" price="250" /></FlexBox>
            <FlexBox><product-box class="p-1" name="Java SE8 OCPJP 進階認證指南" url="/product/2" img="https://shop.tsaitou.com/img/2.jpg" price="500" /></FlexBox>
            <FlexBox><product-box class="p-1" name="Kubernetes建置與執行" url="/product/3" img="https://shop.tsaitou.com/img/3.jpg" price="400" /></FlexBox>
            <FlexBox><product-box class="p-1" name="Vue建置與執行" url="/product/4" img="https://shop.tsaitou.com/img/4.jpg" price="350" /></FlexBox>
            <FlexBox><product-box class="p-1" name="人月神話" url="/product/5" img="https://shop.tsaitou.com/img/5.jpg" price="300" /></FlexBox>
            <FlexBox><product-box class="p-1" name="夏日大作戰" url="/product/6" img="https://shop.tsaitou.com/img/6.jpg" price="200" /></FlexBox>
            <FlexBox><product-box class="p-1" name="OPERATING SYSTEM CONCEPTS" url="/product/7" img="https://shop.tsaitou.com/img/7.jpg" price="1200" /></FlexBox>
            <FlexBox><product-box class="p-1" name="Fundamentals of Database Systems" url="/product/8" img="https://shop.tsaitou.com/img/8.jpg" price="1000" /></FlexBox>
            <FlexBox><product-box class="p-1" name="基礎資料結構使用C" url="/product/9" img="https://shop.tsaitou.com/img/9.jpg" price="500" /></FlexBox>
            <!--<ProductItem v-for="item in items" :key="item" v-bind:item="item"  />-->
            <template v-slot:prev><span class="prev" style="padding:5px;position:absolute; bottom:calc(50% - 30px); left:0; z-index:2; background:white; border:1px solid;"><i class="fas fa-angle-double-left"></i></span></template>
            <template v-slot:next><span class="next" style="padding:5px;position:absolute; bottom:calc(50% - 30px); right:0; z-index:2; background:white; border:1px solid;"><i class="fas fa-angle-double-right"></i></span></template>
        </carousel>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import ProductBox from '../Utils/ProductBox'

export default {
    components: { carousel,ProductBox  },
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
    .item{
        border:1px solid;
        height:250px;
    }
</style>