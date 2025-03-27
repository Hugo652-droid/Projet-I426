<script>
import NavBar from "@/components/NavBar.vue";
import CompMagasin from "@/components/CompMagasin.vue";
export default {
  components: {
    CompMagasin,
    NavBar,
  },
};
</script>

<template>
  <NavBar></NavBar>
  <div class="container">
    <CompMagasin :name="1" :stock="1"></CompMagasin>
  </div>
</template>

<style scoped>

.container {
  position: absolute;
  top: 10vh;
  left: 0;
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
}
</style>