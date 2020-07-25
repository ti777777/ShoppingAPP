<template>
    <div class="product-box text-center ">
            <div class="img-box overflow-hidden position-relative">
                <router-link :to=this.url >
                        <img :src=this.img >
                </router-link>
                <Favorite class="favorite"/>
            </div>
        <router-link :to=this.url >
            <p>{{this.name}}</p>
            <p><b class="text-danger"><i>${{this.price}}</i></b></p>
        </router-link>
    </div>
</template>
<script>
import Favorite from './AddToFavirote'
export default {
    components:{
        Favorite
    },
    props:[
        'img',
        'url',
        'name',
        'price'
    ]
}
</script>
<style scoped>
    img{
        width: 200px;
        height:200px;
    }
    .img-box {
        border-radius:5px 5px ;
        width: 200px;
        height:200px;
    }
    img:hover{
        transform: scale(1.2);
        transition-duration: 1s;
    }
    .favorite{
        
        position: absolute;
        right:10px;
        bottom: 10px;
        z-index: 1;
    }
    @media screen and (max-width : 600px) {
        
        .img-box{
            width: 150px;
        }
    }
</style>