<template>
  <div id="app" >
    <div id="nav" class="px-3">
      <div class="center">
        <router-link to="/">天</router-link> 
      </div>
    </div>
    <div class="center">
      <div class="aside">
        <div class="p-1 border" v-if="this.$router.currentRoute.name=='test'">
          1
        </div>
        <div class="p-1 border" v-else >
          12
        </div>
      </div>
      <div class="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height:100vh;
  margin: 0 auto;
}

#nav{
  text-align: left;
  background-color:#222;
  height:40px;
  line-height: 40px;
}

a{
    text-decoration: none;
}

#nav a {
  font-weight: bold;
  color: #eee;
  
}

#nav a.router-link-exact-active {
    text-decoration: none;
}
.center{
  width:1300px;
  margin:0 auto;
}
.aside{
  width:180px;
  background-color: pink;
  float:left;
}
.main{
  width:1110px;
  background-color: lightblue;
  float:right;
}


@media (max-width:1339px) {
    .center{
        width:1230px;
    }
    .main{
      width:1040px;
    }
}
@media (max-width:1279px) {
    .center{
        width:1100px;
    }
    .main{
      width:910px;
    }
}
@media (max-width:1139px){
    .center{
        width:1000px;
    }
    .main{
      width:810px;
    }
}
@media (max-width:1023px){
    .center{
        width:860px;
    }
    .main{
      width:670px;
    }
}
@media (max-width:880px){
    .aside{
      display: block;
    }
    .center{
        width: 740px;
    }
    .main{
      width:550px;
    }
}
@media (max-width: 768px){
    .aside{
      display: none;
    }
    .center{
      width:calc(100% - 40px);
    }
    .main{
      width:100%;
    }
}
@media (max-width: 600px){
}
@media (max-width:480px){
}
</style>
