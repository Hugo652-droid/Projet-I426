<template>
  <NavBar></NavBar>
  <div class="page">
    <div class="zoneProduits">
      <CompProductDetail :name="carrote" :price="1"></CompProductDetail>
      <CompProductDetail :name="pomme" :price="2"></CompProductDetail>
      <CompProductDetail :name="carrote" :price="1"></CompProductDetail>
      <CompProductDetail :name="carrote" :price="1"></CompProductDetail>
    </div>

    <div class="boutonsModifierProduits">
      <button class="boutonModifierProduits">modifier produit</button>
      <button class="boutonModifierProduits">ajouter produit</button>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CompProductDetail from "@/components/CompProductDetail.vue";

export default {
  name: 'HomeView',
  components: {
    NavBar,
    CompProductDetail,
  }
}
</script>

<style scoped>
.page {
  width: 1500px;
  margin: 0 auto;

}
.zoneProduits {
  width: 1500px;
  height:600px;
  background-color: #8c8b8c;
  border-radius: 3px;
  border: black 1px solid;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  color: black;
}
.boutonsModifierProduits {
  display: flex;
  margin-left: 190px;

}
.boutonModifierProduits {
  width: 500px;
  height: 50px;
  font-size: 20px;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;
  border-color: lightgrey;
  background-color: #800080;
  font-family: "Amasis MT Pro";
  color: white;
}
.infomagasin{
  font-weight: bold;
  font-size: 40px;
  display: flex;
  align-items: center;
  font-family: "Amasis MT Pro";

}
</style>
