<template>
    <div class="">
        <Banner/>
        <ProductCarousel/>
        <Banner/>
        <ProductCarousel/>
    </div>
</template>
<script>

import Banner from '../components/Main/Index/Banner'
import ProductCarousel from '../components/Main/Index/ProductCarousel'

export default {
    components:{
        Banner,
        ProductCarousel
    }
}
</script>

<style scoped>
</style>