<template>
    <div class="mt-7 mx-w-sm mx-auto text-center card bg-white py-3">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl ">Ooops.</p>
        <p class="mt-7 ">{{ error.message }}</p>
        <button class=" btn" @click="handleClearError">Go Home</button>


    </div>
</template>

<script setup>

defineProps(['error'])

const handleClearError = () => clearError({redirect: '/'})

</script>

<style lang="css" scoped>
.btn{

padding: 0.5rem 2rem;
border-radius: 6px;
background-color: rgb(134 239 172);
color: white;
}

</style>