<template>
    <div class="category">
        <SearchBar/>
        <FlexContainer>
            <FlexBox><product-box name="第一個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box name="第二個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box name="第三個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>
            <FlexBox><product-box name="第四個商品" url="/product/213124124" img="https://placeimg.com/200/200/any?1" price="124421" /></FlexBox>

        </FlexContainer>
    </div>
</template>
<script>
import SearchBar from '../components/Main/Utils/SearchBar.vue'
import FlexContainer from '../components/Main/Utils/FlexContainer.vue'
import FlexBox from '../components/Main/Utils/FlexBox.vue'
import ProductBox from '../components/Main/Utils/ProductBox.vue'
export default {
    components:{
        SearchBar,
        FlexContainer,
        FlexBox,
        ProductBox
    }
}
</script>
<style scoped>
</style>