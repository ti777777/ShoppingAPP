<template>
    <div class="text-left mt-2 p-2 " style="position:relative;">
        <div class="carousel-title p-2  pl-3 rounded-pill border mb-2">
            {{carouselInfo.title}}
        </div>
        <carousel :nav="false" :dots="false" :responsive="this.responsive" >
            <FlexBox><product-box class="p-1" name="第一個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box class="p-1"  name="第二個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box class="p-1"  name="第三個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box class="p-1"  name="第四個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box class="p-1"  name="第一個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box class="p-1"  name="第二個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box class="p-1"  name="第三個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box class="p-1"  name="第四個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
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