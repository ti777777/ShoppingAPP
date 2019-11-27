<template>
    <div class="ProductItem">
        
        <div>
            <img :src=this.img alt="">
        </div>
        <div style="height:50px;">
            <a :href=this.url >{{this.title}}</a>
            <span>{{this.price}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        "title",
        "price",
        "url",
        "img"
    ]
}
</script>

<style scoped>
.ProductItem div{
    margin:0 auto;
}
img{
    object-fit: scale-down;
    height:200px;
}
</style>