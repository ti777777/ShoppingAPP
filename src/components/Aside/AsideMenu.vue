<template>
    <div class="menu  p-2 mb-2">
        <div class="menu-title p-2 rounded-pill border text-center">
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
        border-radius: 3px;
    }
    .menu-title{
        line-height: 20px;
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
</style>