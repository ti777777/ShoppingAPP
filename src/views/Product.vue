<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 text-left" >
                <SearchBar/>
                <ProductDetail/>
            </div>
        </div>
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