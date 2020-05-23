<template>
    <div class="menu  p-2 ">
        <div class="menu-title text-left p-2">
            {{this.title}}
        </div>
        <div class="menu-body">
            <ul class="menu-list p-2"> 
                <li class="menu-item p-1" v-for="item in menu" :key="item">
                    <a href="#">{{ item.title }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        "title",
        "menu"
    ]
}
</script>

<style scoped>
    .menu{
        background-color: #fafafa;
        border-radius:3px; 
    }
    .menu-title{
        line-height: 20px;
        border:1px solid #999;
        background-color: #aaa;
        color: white;
        text-shadow: -1px 0 #888, 0 1px #888,
      1px 0 #888, 0 -1px #888;
    }
    .menu-title::before{
        content:"\00a0";
        width: 10px;
        background-color: cornflowerblue;
    }
    .menu-list{
        list-style: none;
        
    }
    .menu-item{
        text-align: left;
    }
    .menu-item a{
        color:#444;
        text-shadow: -1px 0 #eee, 0 1px #eee,
      1px 0 #eee, 0 -1px #eee;
    }
    .box-shadow{
        box-shadow: 0px 2px 5px #999;
    }
</style>