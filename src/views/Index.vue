<template>
    <div class="">
        <Banner/>
        <ProductCarousel v-bind:carouselInfo="this.carousels.trettaCarousel"/>
        <Banner/>
        <ProductCarousel v-bind:carouselInfo="this.carousels.zhTwBook"/>
    </div>
</template>
<script>

import Banner from '../components/Main/Index/Banner'
import ProductCarousel from '../components/Main/Index/ProductCarousel'

export default {
    components:{
        Banner,
        ProductCarousel
    },
    data(){
        return {
            carousels:{
                trettaCarousel:{
                    title:"寶可夢tretta",
                    requestUrl:"/api/1/tretta?order=desc&max=10"
                },
                zhTwBook:{
                    title:"中文書",
                    requestUrl:"/api/1/zhTwBook?order=desc&max=10"
                }
            }
        }
    }
}
</script>

<style scoped>
</style>