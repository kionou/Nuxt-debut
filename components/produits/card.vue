<template>
    <div>
        <div class="cadre" >
        <div class="image">
            <img :src="produit.image" alt="logo">
        </div>
        <p class=" font-bold text-gray-500 text-center my-4 overflow-hidden ...">{{ produit.title}}</p>

        <nuxt-link :to="`/${produit.id}`">
            <div class="btn">Detail</div>
        </nuxt-link>
       </div>
    </div>
</template>

<script setup >
const {produit}  = defineProps(['produit'])


</script>

<style lang="css" scoped >
    .cadre{
    width: 230px;
    /* height: 190px;
    /* border: 1px solid red; */
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; 
    background-color: var(--blanc);
    box-shadow: var(--shadow-medium);
    border-radius: var(--raduis);

}

.image{
    width: 150px;
    height: 150px;
   
}

.image img{
    width: 100%;
    height: 100%;

}

.btn{

    padding: 0.5rem 2rem;
    border-radius: 6px;
    background-color: rgb(134 239 172);
    color: white;
}
</style>