<template>
    <div class="ProductItem">
        <router-link to="/product">
            <slot>
                <img src="https://placeimg.com/200/200/any?1" alt="">
                
            </slot>
        </router-link>
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