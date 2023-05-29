<template>
    <div>
        NuxtAbout'
        <div>{{ data }}</div>
    </div>
    
</template>

<script setup>
 const {data} = await useFetch('/api/nindja')
 console.log('eeeee',data);

</script>

<style lang="css" scoped>

</style>