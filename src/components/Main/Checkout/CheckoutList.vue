<template>
    <div class="d-md-table d-block table  table-bordered">
        <div class="d-md-table-row  d-block">
            
            <div class="d-md-table-cell d-none p-2 border">
                刪除
            </div>
            <div class="d-md-table-cell d-none p-2 border">
                縮圖
            </div>
            <div class="d-md-table-cell d-none p-2 border">
                品名
            </div>
            <div class="d-md-table-cell d-none p-2 border">
                單價
            </div>
            <div class="d-md-table-cell d-none p-2 border">
                數量
            </div>
            <div class="d-md-table-cell d-none p-2 border">
                小計
            </div>
        </div>
        <div class="d-md-table-row d-block border text-left">
            <div class="d-md-table-cell d-block ">
                <span class="text-danger fa fa-times float-left p-3"></span>
            </div>
            <div class="d-md-table-cell d-block p-2">
                <img src="https://placeimg.com/200/200/any?1" alt="">
            </div>
            <div class="d-md-table-cell d-block p-2">
                <span class="d-inline d-md-none">品名</span> 123
            </div>
            <div class="d-md-table-cell d-block p-2">
                <span class="d-inline d-md-none">單價</span> 123
            </div>
            <div class="d-md-table-cell d-block p-2">
                <span class="d-inline d-md-none">數量</span> <input type="number" value="42">
            </div>
            <div class="d-md-table-cell d-block p-2">
                <span class="d-inline d-md-none">小計</span> 123
            </div>
        </div>
        
        <div class="d-md-table-row d-block border text-left">
            <div class="d-md-table-cell d-block ">
                <span class="text-danger fa fa-times float-left p-3"></span>
            </div>
            <div class="d-md-table-cell d-block p-2">
                <img src="https://placeimg.com/200/200/any?1" alt="">
            </div>
            <div class="d-md-table-cell d-block p-2">
                <span class="d-inline d-md-none">品名</span> 123
            </div>
            <div class="d-md-table-cell d-block p-2">
                <span class="d-inline d-md-none">單價</span> 123
            </div>
            <div class="d-md-table-cell d-block p-2">
                <span class="d-inline d-md-none">數量</span> <input type="number" value="42">
            </div>
            <div class="d-md-table-cell d-block p-2">
                <span class="d-inline d-md-none">小計</span> 123
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .table{
        table-layout: fixed;
    }
    img{
        width: 100%;
    }
    input{
        width: 60%;
    }
</style>