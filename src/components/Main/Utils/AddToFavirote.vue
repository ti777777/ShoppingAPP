<template>
    <div class="favorite ">
        <div  class=" display-inline fa fa-star text-light" v-on:click="toggleFavorite">
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        toggleFavorite:function(event){
            event.target.classList.toggle("text-light");
            event.target.classList.toggle("text-warning");
        }
    }
}
</script>
<style scoped>
    .favorite{
        text-shadow: 0 0 2px black;
    }
</style>