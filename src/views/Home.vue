<template>
  <div class="container-fluid">
      <div class="row ">
        
        <div class="col-lg-9 p-3 col-md-9 p-0" >
          <Tile/>
          <div class="row m-0">
            <div class="col-6 p-3">

              <Tile/>
            </div>
            <div class="col-6 p-3">

              <Tile/>
            </div>
          </div>
        </div>
      </div>
      
  </div>
</template>

<script>
import Tile from '../components/Tile'
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    Tile
  }
}
</script>
<style scoped>
</style>
