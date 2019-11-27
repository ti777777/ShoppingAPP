<template>
  <div id="app" >
    <div id="nav" class="px-3">
      <div class="center">
        <router-link to="/">天</router-link> 
      </div>
    </div>
    <div class="center">
      <div class="aside bg-light">
        <div v-if="this.$router.currentRoute.name=='test'">
          1
        </div>
        <div v-else >
          <AsideMenu title="123"/>
          <AsideMenu title="123"/>
          <AsideMenu title="123"/>
          
            <AsideBanner/>
            <AsideBanner/>
            <AsideBanner/>
            <AsideBanner/>
        </div>
      </div>
      <div class="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import AsideMenu from './components/Aside/AsideMenu'
import AsideBanner from './components/Aside/AsideBanner'
export default {
  components:{
    AsideMenu,
    AsideBanner
  }
}

</script>

<style>

#app {
  font-family: 'Microsoft JhengHei','Avenir', Helvetica, Arial, sans-serif;
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
  float:left;
}
.main{
  width:1110px;
  float:right;
}
.t-button {
	background:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
	background-color:#ededed;
	border-radius:15px;
	border:1px solid #d6bcd6;
	display:inline-block;
	cursor:pointer;
	color:#1f3785;
	font-size:17px;
	padding:3px 20px;
	text-decoration:none;
	text-shadow:0px 1px 0px #e1e2ed;
}
.t-button:hover {
	background:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
	background-color:#bab1ba;
}
.t-button:active {
	position:relative;
	top:1px;
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
      width:calc(100% - 20px);
    }
    .main{
      width:100%;
    }
    #search-input{
      width:calc(100% - 80px);
    }
    #search-button{
      width:80px;
    }
}
@media (max-width: 600px){
}
@media (max-width:480px){
}
</style>
