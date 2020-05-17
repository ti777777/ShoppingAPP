<template>
  <div id="app" >
    <div id="nav" class="px-3">
      <div class="center">
        <router-link to="/">就是愛動漫</router-link> 
      </div>
    </div>
    <div class="center">
      <div class="aside bg-light">
        <div v-if="this.$router.currentRoute.name=='test'">
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
        <div>
          <router-link to="/about">關於</router-link> 
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
        },
        {
          title:'配件飾品類'
        },
        {
          title:'絨毛類'
        },
        {
          title:'絕版品'
        },
        {
          title:'資料夾類'
        },
        {
          title:'電影展覽票券'
        },
        {
          title:'電器類'
        },
        {
          title:'電影展覽票券'
        },
        {
          title:'福袋禮包類'
        },
        {
          title:'廚房用品類'
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
  color: #2c3e50;
  min-height:100vh;
  margin: 0 auto;
}

#nav{
  text-align: left;
  background-color:rgb(235, 191, 72);
  height:40px;
  line-height: 40px;
}

a{
    text-decoration: none;
}

#nav a {
  font-weight: bold;
  color: #222;
  
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
}
@media (max-width: 600px){
}
@media (max-width:480px){
}
</style>
