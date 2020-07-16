<template>
    <div class="container-fluid">
        <div class="row justify-content-center text-left my-5">
            <div class="col-md-6 col-lg-4">
                <div class=" p-3 shadow rounded" style="height:100%;">
                    <h3>付款</h3> 
                    <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="currentOrder.payment" name="payment"  id="exampleRadios1" value="線上刷卡" checked>
                    <label class="form-check-label" for="exampleRadios1">
                        線上刷卡
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="currentOrder.payment" name="payment" id="exampleRadios2" value="超商條碼">
                    <label class="form-check-label" for="exampleRadios2">
                        超商條碼
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="currentOrder.payment" name="payment" id="exampleRadios3" value="超商貨到付款" >
                    <label class="form-check-label" for="exampleRadios3">
                        超商貨到付款
                    </label>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class=" p-3 shadow rounded" style="height:100%;">
                    <h3>配送</h3> 
                    <div v-if="currentOrder.payment=='超商貨到付款'" >
                        <div class="form-check">
                            <input  class="form-check-input" type="radio" v-model="currentOrder.logistic"  name="logisticRadios" id="exampleRadios4" value="超商" checked  disabled>
                            <label class="form-check-label" for="exampleRadios4">
                                超商
                            </label>
                        </div>
                        <div class="form-check">
                            <input  class="form-check-input" type="radio" v-model="currentOrder.logistic" name="logisticRadios" id="exampleRadios5" value="宅配">
                            <label class="form-check-label" for="exampleRadios5">
                                宅配
                            </label>
                        </div>
                    </div>
                    <div v-else>
                        <div class="form-check">
                            <input  class="form-check-input" type="radio" v-model="currentOrder.logistic" name="logisticRadios" id="exampleRadios4" value="超商" checked>
                            <label class="form-check-label" for="exampleRadios4">
                                超商
                            </label>
                        </div>
                        <div class="form-check">
                            <input  class="form-check-input" type="radio" v-model="currentOrder.logistic" name="logisticRadios" id="exampleRadios5" value="宅配">
                            <label class="form-check-label" for="exampleRadios5">
                                宅配
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class=" p-3 shadow rounded">
                    <h3>收件人資料</h3> 
                    <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="name">姓名</label>
                        <input type="text" class="form-control" id="name" v-model="currentOrder.consignee">
                        </div>
                        <div class="form-group col-md-6">
                        <label for="tel">電話</label>
                        <input type="tel" class="form-control" id="tel" v-model="currentOrder.phone">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="address">地址</label>
                        <input type="text" class="form-control" id="address" v-model="currentOrder.address">
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        currentOrder:function(){
            return this.$store.state.currentOrder;
        }
    }
}
</script>
<style scoped>

</style>