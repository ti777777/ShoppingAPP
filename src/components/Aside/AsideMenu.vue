<template>
    <div class="menu mt-2 p-1 ">
        <div class="menu-title">
            {{this.title}}
        </div>
        <div class="menu-body">
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        "title"
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
    .box-shadow{
        box-shadow: 0px 2px 5px #999;
    }
</style>