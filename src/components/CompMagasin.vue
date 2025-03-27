<script>
export default {
  name: 'CompMagasin',
  props: {
    name: String,
    stock: Number
  }
}
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <h2>Stock : {{ stock }}</h2>
    <button><RouterLink to="/DetailMagasin">Acces > </RouterLink></button>
  </div>
</template>

<style scoped>

div {
  background: #800080;
  min-width: 15vw;
  min-height: 30vh;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  color: #FFF;
}

h1 {
  font-family: "Poppins", serif;
  font-weight: 600;
  font-size: 2rem;
  color: #FFF;
  margin-top: 10px;
}

h2 {
  font-family: "Poppins", serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #FFF;
  position: absolute;
  bottom: 10px;
  left: 10px;
  margin: 0;
}

button {
  background: #FFF;
  color: #800080;
  border: none;
  border-radius: 15px;
  padding: 5px 15px;
  font-size: 1.2rem;
  font-family: "Poppins", serif;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
  margin: 0;
  text-decoration: none;
}
</style>