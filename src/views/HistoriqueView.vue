<script >
import NavBar from "@/components/NavBar.vue";
  export default {
    components: {
      NavBar,
    },
  };
</script>

<template>
  <NavBar></NavBar>
  <div class="p-6">
    <h1 class="text-2xl font-bold bg-purple-700 texlt-white p-4">Stockage</h1>

    <table class="w-full border-collapse border mt-6">
      <thead>
      <tr class="headerTab">
        <th class="border p-2">Date</th>
        <th class="border p-2">Magasin</th>
        <th class="border p-2">Produit</th>
        <th class="border p-2">Quantité</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in stockData" :key="index" class="border">
        <td class="border p-2">{{ item.date }}</td>
        <td class="border p-2">{{ item.magasin }}</td>
        <td class="border p-2">{{ item.produit }}</td>
        <td class="border p-2">{{ item.quantite }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const stockData = ref([
  { date: "13.01.2025", magasin: "Coop du centre", produit: "Carotte Bio", quantite: 35 },
  { date: "13.02.2025", magasin: "Migros", produit: "Croissant au chocolat", quantite: 5 },
]);
</script>

<style scoped>
table {
  width: 50%;
  margin: auto;

}
thead{
  color: white;
  background-color: purple;

}
th{
  border: 2px white solid;
}
td{
  border: 1px white solid;
}
</style>

