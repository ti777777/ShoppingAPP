<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-3" >
        123
      </div>
        
      
    </div>
  </div>
      
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    
  },
  data(){
    return{
      firstTileColor:{
        c:'red'
      },
      bp:{
      },
      content:""
    }
  },
  created(){
    window.addEventListener('resize',this.onResize);
  },
  methods:{
    onResize(){
      this.content=window.innerWidth;
    }
  }
}
</script>
<style scoped>
</style>
