<template>
  <div id="app" >
    <div id="nav" class="px-3 border-bottom">
      <div class="center">
        <span id="aside-menu" class="mr-3 fa fa-bars" @click="openAsideMenu"></span>
        <router-link to="/">123123商店</router-link> 
        <router-link class="float-right" to="/login"><i class="fa fa-user"></i>登入</router-link>
        <router-link class="float-right mr-3" to="/login"><i class="fas fa-shopping-cart"></i>購物車</router-link>
      </div>
    </div>
    <div class="center clearfix">
      <div class="aside mt-2">
        <div v-if="this.$router.currentRoute.name==''">
          1
        </div>
        <div v-else >
          <AsideMenu title="近期" v-bind:menu="recentMenu"/>
          <AsideMenu title="類別" v-bind:menu="categoryMenu"/>
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
    <div class="footer">
        <div class="container-fluid">
          <div class="row p-3 border-top text-left">
            <div class="col-sm-6 col-md-3">
              <span class="p-3 h5">聯絡資訊</span>
              <ul>
                <li>line ti777777</li>
                <li>fb edwfwefwe</li>
                <li>ig ewiorhweoir</li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3">
              <span class="p-3 h5">服務項目</span>
              <ul>
                <li>程式設計</li>
                <li>網站維護</li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3">
              
            </div>
            <div class="col-sm-6 col-md-3">
              
            </div>
          </div>
        </div>
    </div>
    <div id="aside-container" class="position-absolute clearfix p-5" >
      <span class="fa fa-times float-right" @click="closeAsideMenu"></span>
      <div>
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
  },
  methods:{
    openAsideMenu(){
      document.getElementById("aside-container").style.display="block";
      document.getElementsByTagName("body")[0].style.overflowY="hidden";
    },
    closeAsideMenu(){
      document.getElementById("aside-container").style.display="none";
      document.getElementsByTagName("body")[0].style.overflowY="auto";
    }
  },
  data(){
    return {
      recentMenu:[
        {
          title:'tretta'
        },
        {
          title:'二手書'
        }
      ],
      categoryMenu:[
        {
          title:'抱枕'
        },
        {
          title:'3C用品類'
        },
        {
          title:'DVD'
        },
        {
          title:'公仔類'
        },
        {
          title:'文具類'
        },
        {
          title:'包袋類'
        },
        {
          title:'卡夾類'
        },
        {
          title:'生活用品類'
        },
        {
          title:'服飾類'
        },
        {
          title:'杯類'
        },
        {
          title:'拼圖類'
        },
        {
          title:'家飾品類'
        },
        {
          title:'海報掛畫收藏'
        }
      ]
      

    }
  }
}

</script>

<style>

#app {
  font-family: 'Microsoft JhengHei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height:100vh;
  margin: 0 auto;
}

#nav{
  text-align: left;   
  font-weight: 1000;
  height:40px;
  line-height: 40px;
}

ul{
  list-style: none;  
}

a{
    text-decoration: none;
}

#nav a {
  font-weight: bold;
  color: black;
  
}
#nav div{
  white-space: nowrap;
}

#nav a.router-link-exact-active {
    text-decoration: none;
}
#aside-menu{
  display: none;
}
#aside-container{
  top:0;
  z-index:9999;
  height:100vh;
  width:100vw; 
  background:white;
  display:none;
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
    #aside-menu{
      display: inline;
    }
}
@media (max-width: 600px){
}
@media (max-width:480px){
}
</style>
