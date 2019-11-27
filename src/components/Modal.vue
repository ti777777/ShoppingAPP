<template>
    <div class="modal">
        <div class="title">
            {{this.title}}
        </div>
        <div class="content">
            {{this.content}}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:"123",
            content:"456"
        }
    }
}
</script>

<style scoped>
.modal{
    width: 100vw;
    height:100vh;
    position: fixed;
    z-index: 9999;
    display: block;
    background-color: #ffffff;

}
.modal div{
    position: relative;
    margin: 0 auto;
}
.modal .title{
    
}
</style>