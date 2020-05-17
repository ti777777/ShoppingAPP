<template>
    <div class="ProductItem">
        <img src="https://placeimg.com/200/200/any?1" alt="">
        <!--
        <a href="#">
            <img :src=this.item.img alt="">
            {{this.item.title}}<br>
            {{this.item.price}}
        </a>
        -->
    </div>
</template>

<script>
export default {
    props:[
        //"item"
    ],
    created(){
    }
}
</script>

<style scoped>
img{
    object-fit: scale-down;
    height:200px;
}
</style>