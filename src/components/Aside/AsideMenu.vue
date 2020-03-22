<template>
    <div class="menu mt-2 p-1 ">
        <div class="menu-title">
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
        background-color:#888; 
        border-radius: 3px;
    }
    .menu-list{
        list-style: none;
        
    }
    .menu-item{
        text-align: left;
    }
    .menu-item a{
        text-decoration: underline;
        color:black;
    }
    .box-shadow{
        box-shadow: 0px 2px 5px #999;
    }
</style>