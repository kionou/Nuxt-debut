<template>
    <div>
        <ProduitsDetail :produit="produit"/>
       
    </div>
</template>

<script setup>
const {id} = useRoute().params
const url = 'https://fakestoreapi.com/products/'
const { data:produit} = await useFetch(url ,{key: id})
console.log("produit",produit);
if (!produit.value) {
    throw createError({statusCode:404 , statusMessage:'produit pas dispo' , fatal:true})
}


</script>

<style lang="css" scoped>

</style>