<template>
    <div  class="card m-3 bg-white">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="produit.image" alt="img produit" class="mx-auto my-7 ">

            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ produit.title }}</h2>
                <p class="text-xl my-7"> prix - $ {{produit.price}}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Description du produit :</h3>

                <p class="mb-7">{{ produit.description }}</p>
            </div>

        </div>

    </div>
</template>

<script setup>
defineProps(['produit'])
  
</script>

<style lang="css" scoped>
img{

    max-width: 400px;
}

</style>