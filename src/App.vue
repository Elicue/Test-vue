<template>
  <header class="fixed w-screen top-0 left-0 flex bg-[#F2EEE9] bg-opacity-50 backdrop-blur-md z-50">
    <div class="content flex flex-row justify-between items-center w-11/12 mx-auto border-b-[1px] border-black ">
      <div class="logo w-1/3">
        <router-link to="/"><img class="w-16" src="/favicon.svg" alt="logo"></router-link>
      </div>
      <div class="page flex flex-row items-center justify-around w-1/6 uppercase text-lg font-semibold">
        <span class="w-6 h-[1px] bg-black flex"></span>
        <p class="font-voyage text-3xl">about me</p>
        <span class="w-6 h-[1px] bg-black flex"></span>
      </div>
      <div class="menu flex flex-row w-1/3 justify-end">
      <nav>
        <router-link to="/"><ion-icon class=" mr-8 w-8 h-8 fill-black" name="person-outline"></ion-icon></router-link>
        <router-link to="/Projects"><ion-icon class=" mr-8 w-8 h-8 fill-black" name="desktop-outline"></ion-icon></router-link>
        <router-link to="/Contact"><ion-icon class="w-8 h-8 fill-black" name="call-outline"></ion-icon></router-link>
      </nav>
      </div>
    </div>
  </header>
  <router-view/>
</template>

<style>
</style>