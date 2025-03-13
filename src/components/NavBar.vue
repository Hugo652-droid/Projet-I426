<template>
  <div class="container-header">
    <div class="container-left">
      <h1 class="poppins-semibold">Stockage</h1>
    </div>
    <div class="container-right poppins-regular">
      <h3>Items</h3>
      <h3>Entrepot</h3>
      <h3>Magasin</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container-header {
  position: absolute;
  top:0;
  left: 0;
  background: #800080;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-content: center;
  color:#FFF;
}
.container-header .container-left {
  margin-left: 10px;
}
.container-header .container-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin-right: 10px;

}

</style>
