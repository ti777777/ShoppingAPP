<template>
    <div class="">
        <SearchBar/>
        <Banner/>
        <ProductCarousel v-bind:carouselInfo="this.carousels.trettaCarousel"/>
        <ProductShowBox/>
        <Banner/>
        <ProductCarousel v-bind:carouselInfo="this.carousels.zhTwBook"/>
    </div>
</template>
<script>
import ProductShowBox from '../components/Main/Index/ProductShowBox.vue'
import Banner from '../components/Main/Index/Banner'
import ProductCarousel from '../components/Main/Index/ProductCarousel'
import SearchBar from '../components/Main/Utils/SearchBar.vue'

export default {
    components:{
        Banner,
        ProductCarousel,
        SearchBar,
        ProductShowBox
    },
    data(){
        return {
            carousels:{
                trettaCarousel:{
                    title:"新上架商品",
                    requestUrl:"/api/1/tretta?order=desc&max=10"
                },
                zhTwBook:{
                    title:"店長推薦",
                    requestUrl:"/api/1/zhTwBook?order=desc&max=10"
                }
            }
        }
    }
}
</script>

<style scoped>
</style>