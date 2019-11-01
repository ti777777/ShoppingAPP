<template>
  <div class="container-fluid">
    <div class="row">
    </div>
      <div class="row ">
        
        <div class="col-lg-9 p-3 col-md-9 p-0" >
          <Tile  height=300 color="red" />
          <div class="row m-0">
            <div class="col-6 p-3">

              <Tile height="200" color="green"/>
            </div>
            <div class="col-6 p-3">

              <Tile height="150" padding="30px"/>
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
