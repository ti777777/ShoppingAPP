<template>
    <div class="tile" :style="styling">
        <div class="tile-body" v-if="this.content.type==1">
            
        </div>
        <div style="background:pink;" v-else-if="this.content.type==2">
            123
        </div>
        <div v-else-if="this.content.type==3">

        </div>
        <div v-else>

        </div>
    </div>
</template>

<script>
export default {
    props:{
        type:String,
        //容器設定
        boxSetting:{
            type:Object,
            padding:String,
            height:String,
            color:{
                type:Object
            },
            breakpoints:{
                type:Object
            },
            flex:Number,
            content:String,
            square:Boolean
        },
        //
        content:{
            type:Object,
            contentType:Number
        }

    },
    created(){
        window.addEventListener('resize',this.onResize)
        document.getElementById("b").innerHTML=this.breakpoints||"";
    },
    computed:{
        styling(){
            return {
                flex:this.flex==null?1:this.flex
            }
        }
    },
    methods:{
        onResize(){
            this.d=window.innerWidth;
        }
    },
    data(){
        return {
            d:window.innerWidth
        }
    }
}
</script>

<style scoped>
.tile{
    width:100%;
    position:relative;
    background-color: #fff;
    box-sizing:border-box;
    word-break: break-all;
    padding: 1em;
}
.tile-header{
    width: 100%;
    background-color: #eee;
    border: 1px solid #bbb;
}
.tile-body{
    width: 100%;
    box-shadow:0 2px 7px #ddd;
}
.tile-footer{
    width: 100%;
    background-color: #eee;
    border: 1px solid #bbb;
}

</style>