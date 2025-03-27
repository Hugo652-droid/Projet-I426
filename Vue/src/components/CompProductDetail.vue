<script>
export default {
  name: 'CompProductDetail',
  props: {
    name: String,
    price: Number
  }
}
</script>

<template>
  <div class="produit">
      <div class="name">
        {{ name }}
      </div>
      <div class="price">
        {{ price }} CHF/kg
      </div>
  </div>
</template>

<style scoped>
.produit{
  width: 550px;
  height: 100px;
  background-color: white;
  font-size: 20px;
  margin: 30px 85px 20px;
  border-radius: 15px;
  box-shadow: 2px 2px 2px black;
  display: flex;
}

.name {
  margin-left: 30px;
  font-weight: bold; 
  font-size: 25px;
}
.price {
  margin-left: 30px;
  margin-top: 10px;
}
</style>