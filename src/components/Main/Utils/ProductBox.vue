<template>
    <div class="product-box text-center">
        <router-link :to=this.url >
            <img :src=this.img >
            <p>{{this.name}}</p>
            <p><b class="text-danger"><i>${{this.price}}</i></b></p>
        </router-link>
    </div>
</template>
<script>
export default {
    props:[
        'img',
        'url',
        'name',
        'price'
    ]
}
</script>
<style scoped>
    .product-box{
    }
</style>