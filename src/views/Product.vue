<template>
    <div >
        <SearchBar/>
        <ProductDetail/>
                
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