<template>
  <div class="">
    <h1 class="text-center font-bold text-4xl p-4">Mon blog Nuxt 3 + Content 2</h1>
    <div class="formation-cadre"> 
    <ProduitsCard  v-for="produit in produits" :key="produit.id" :produit="produit"/>
    </div>
  </div>
 
  </template>

<script setup>
const { data:produits} = await useFetch('https://fakestoreapi.com/products')
   console.log('rrr',produits);


</script>

<style  scoped >
.container{
  width: 100%;
  height: 100vh;

}
.formation-cadre {
  display: grid ;
  grid-template-columns: repeat(auto-fit, minmax(230px, auto));
  grid-gap: 35px;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100%;
}
</style>