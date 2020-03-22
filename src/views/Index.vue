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
                    title:"寶可夢tretta"
                },
                zhTwBook:{
                    title:"中文書"
                }
            }
        }
    }
}
</script>

<style scoped>
</style>