<template>
    <nav class="shadow-sm bg-white container-fluid flex justify-between mx-auto p-4 items-center">
        <NuxtLink to="/">
            <h2 class="font-bold text-3xl ">Djassa</h2>
        </NuxtLink>
        <div class="bars">
          <i class="fa fa-bars"></i>
        </div>
        <ul class="flex item-center">
          <li class="my-2 mx-4 p-2 text-xl text-bold"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="my-2 mx-4 p-2 text-xl text-bold"><NuxtLink to="/about">About</NuxtLink></li>
      
        </ul>
      </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

.router-link-exact-active{
    color: rgb(134 239 172);
}

nav .bars {
  position: absolute;
  right: 1rem;
  font-size: xx-large;
  display: none;
}





</style>