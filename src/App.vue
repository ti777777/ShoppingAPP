<template>
  <div id="app" >
    <div id="nav" class="px-3">
      <router-link to="/">天</router-link> 
    </div>
    <div class="outer">
      <div class="inner">
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
  max-height:100vh;
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

.outer{
  background: lightcyan;
}
.inner{
    width: 1280px;
    height:100vh;
    margin:0 auto;
    background: lightskyblue;
}
@media (max-width:1280px) {
    .inner{
        width:1100px;
    }
}
@media (max-width:1140px){
    .inner{
        width:984px;
    }
}
@media (max-width:1024px){
    .inner{
        width:840px;
    }
}
@media (max-width:880px){
    .inner{
        width: 728px;
    }
}
@media (max-width: 768px){
    .inner{
      width:560px;
    }
}
@media (max-width: 600px){
  .inner{
    width:440px;
  }
}
@media (max-width:480px){
  .inner{
    width: 100vw;
  }
}
</style>
