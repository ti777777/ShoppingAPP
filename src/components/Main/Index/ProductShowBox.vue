<template>
    <div class="product-show-box p-2">
        <p class="text-left p-2  pl-3 rounded-pill border">最新商品</p> 
        <FlexContainer>
            <FlexBox><product-box name="第一個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box name="第二個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box name="第三個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box name="第四個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box name="第一個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box name="第二個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box name="第三個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box name="第四個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box name="第一個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box name="第二個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box name="第三個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box name="第四個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>

        </FlexContainer>
    </div>
</template>
<script>
import FlexContainer from '../Utils/FlexContainer.vue'
import FlexBox from '../Utils/FlexBox.vue'
import ProductBox from '../Utils/ProductBox.vue'
export default {
    components:{
        FlexContainer,
        FlexBox,
        ProductBox
    }
}
</script>
<style scoped>
    .product-show-box{
    }
</style>