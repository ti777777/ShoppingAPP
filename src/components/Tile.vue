<template>
    <div class="tile" :style="styling">
        123
    </div>
</template>

<script>
export default {
    props:[
        "padding",
        "margin",
        "height",
        "color"
    ],
    computed:{
        styling(){
            return {
                height:this.height+"px",
                backgroundColor:this.color,
                padding:this.padding
            }
        }
    }
}
</script>

<style scoped>
.tile{
    width:100%;
    position:relative;
    background-color: #fff;
    border:1px solid;
    box-sizing: border-box;
}
.tile-header{
    width: 100%;
    background-color: #eee;
    border: 1px solid #bbb;
}
.tile-body{
    width: 100%;
}
.tile-footer{
    width: 100%;
    background-color: #eee;
    border: 1px solid #bbb;
}

</style>