<template>
    <div class="">
        <SearchBar/>
        <AlertBox type="alert-info" text="這個網站純屬demo用，所有商品皆無法真實進行購買。"/>
        <AlertBox type="alert-danger" text="網頁關閉後，購物車資料將不會儲存。"/>
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
import AlertBox from '../components/Main/Index/AlertBox.vue'

export default {
    components:{
        Banner,
        ProductCarousel,
        SearchBar,
        ProductShowBox,
        AlertBox
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