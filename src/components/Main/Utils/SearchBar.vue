<template>
    <div>
        <div class="p-2 text-left">
            <input id="search-input" type="text" name="" >
            <button id="search-button" class="t-button"><i class="fa fa-search"></i>搜尋</button>
        </div>
        <div class="">
            <ul>
                <li><a href="#">123</a></li>
                <li><a href="#">123</a></li>
                <li><a href="#">123</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
input{
    padding:2px;
}
ul{
    display: inline;
    list-style-type: none;
}
li{
    float: left;
}

@media (max-width: 768px){
    #search-input{
      width:calc(100% - 100px);
    }
    #search-button{
      width:100px;
    }
}
</style>