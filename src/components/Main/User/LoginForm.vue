<template>
    <div class=" text-left row">
        <div class="col-lg-5 col-md-8 my-5">
            <div class="box-shadow p-3">
                <b-tabs content-class="mt-3">
                    <b-tab title="登入" active>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">帳號</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                <small id="emailHelp" class="form-text text-muted"></small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">密碼</label>
                                <input type="password" class="form-control" id="exampleInputPassword1">
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">記住我</label>
                            </div>
                            <button type="submit" class="btn btn-primary">送出</button>
                        </form>
                
                    </b-tab>
                    <b-tab title="註冊">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">帳號</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                <small id="emailHelp" class="form-text text-muted"></small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">密碼</label>
                                <input type="password" class="form-control" id="exampleInputPassword1">
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">記住我</label>
                            </div>
                            <button type="submit" class="btn btn-primary">送出</button>
                        </form>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .box-shadow{
        box-shadow: 0px 5px 8px #888;
    }
</style>