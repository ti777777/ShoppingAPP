<template>
    <div class="product-show-box p-2">
        <p class="text-left p-2  pl-3 rounded-pill border">最新商品</p> 
        <FlexContainer>
            <FlexBox><product-box name="通往夏天的隧道，再見的出口" url="/product/1" img="https://shop.tsaitou.com/img/1.jpg" price="250" /></FlexBox>
            <FlexBox><product-box name="Java SE8 OCPJP 進階認證指南" url="/product/2" img="https://shop.tsaitou.com/img/2.jpg" price="500" /></FlexBox>
            <FlexBox><product-box name="Kubernetes建置與執行" url="/product/3" img="https://shop.tsaitou.com/img/3.jpg" price="400" /></FlexBox>
            <FlexBox><product-box name="Vue建置與執行" url="/product/4" img="https://shop.tsaitou.com/img/4.jpg" price="350" /></FlexBox>
            <FlexBox><product-box name="人月神話" url="/product/5" img="https://shop.tsaitou.com/img/5.jpg" price="300" /></FlexBox>
            <FlexBox><product-box name="夏日大作戰" url="/product/6" img="https://shop.tsaitou.com/img/6.jpg" price="200" /></FlexBox>
            <FlexBox><product-box name="OPERATING SYSTEM CONCEPTS" url="/product/7" img="https://shop.tsaitou.com/img/7.jpg" price="1200" /></FlexBox>
            <FlexBox><product-box name="Fundamentals of Database Systems" url="/product/8" img="https://shop.tsaitou.com/img/8.jpg" price="1000" /></FlexBox>
            <FlexBox><product-box name="基礎資料結構使用C" url="/product/9" img="https://shop.tsaitou.com/img/9.jpg" price="500" /></FlexBox>

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