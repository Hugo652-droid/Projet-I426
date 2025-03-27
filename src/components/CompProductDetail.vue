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
    <div class="details_produit">
      <div class="detail1" style="font-weight: bold; font-size: 25px">
        {{ name }}
      </div>
      <div class="detail2">
        {{ price }} CHF/kg
      </div>
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

.detail1 {
  margin-left: 30px;
  font-family: "Amasis MT Pro";
}
.detail2 {
  margin-left: 30px;
  margin-top: 10px;
}
</style>