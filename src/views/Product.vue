<template>
    <div >
        <SearchBar/>
        <ProductDetail v-bind:id="this.$route.params.id" name="通往夏天的出口" catergory="輕小說" price="200" description="第一個商品"/>
                
    </div>
</template>

<script>
import SearchBar from '../components/Main/Utils/SearchBar'
import ProductDetail from '../components/Main/Product/ProductDetail'
export default {
    components:{
        SearchBar,
        ProductDetail
    }
}
</script>

<style scoped>

</style>