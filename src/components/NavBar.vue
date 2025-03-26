<template>
  <div class="container-header">
    <div class="container-left">
      <h1 class="poppins-semibold">Stockage</h1>
    </div>
    <div class="container-right poppins-regular">
      <RouterLink to="/">Items</RouterLink>
      <RouterLink to="/Historique">Historique</RouterLink>
      <RouterLink to="/ListMagasin">Magasin</RouterLink>
    </div>
  </div>
  <div id="space"></div>
</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>

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

#space {
  height: 100px;
}

.container-header {
  position: fixed;
  top:0;
  left: 0;
  background: #800080;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-content: center;
  color:#FFF;
  margin-bottom: 50px;
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
a {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
}


div {
  font-weight: bold;
  color: #FFF; /* Change the color to white */
}

div.router-link-exact-active {
  color: #42b983;
}

</style>
