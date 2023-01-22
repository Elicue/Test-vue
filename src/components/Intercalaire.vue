<script setup>
defineProps(['text','url'])
</script>

<template>
  <div>
    <div class="w-1/3 h-[5vh] mx-auto rounded-t-full bg-white -mt-[30vh]">
      <!-- <p class="w-max mx-auto pt-4 flex font-voyage text-4xl">Projects</p> -->
    </div>
    <div class="w-full h-[150vh] bg-white">
      <div class="w-max flex flex-col mx-auto relative h-full">
        <div class="mx-auto w-max">
          <div id="cardFC" class=" w-[45vh] h-80 bg-cover bg-center rounded-xl mt-52">
            <div class="absolute border-2 border-black w-[110%] h-[120%] -left-[5%] -top-[10%] relative">
              <div class="absolute w-3 h-3 border-2 border-black bg-white -top-[2%] -left-[2%]"></div>
              <div class="absolute w-3 h-3 border-2 border-black bg-white -top-[2%] -right-[2%]"></div>
              <div class="absolute w-3 h-3 border-2 border-black bg-white -bottom-[2%] -right-[2%]"></div>
              <div class="absolute w-3 h-3 border-2 border-black bg-white -bottom-[2%] -left-[2%]"></div>
              <div class="absolute w-3 h-3 border-2 border-black bg-white bottom-[45%] -right-[2%]"></div>
              <div class="absolute w-3 h-3 border-2 border-black bg-white bottom-[45%] -left-[2%]"></div>
              <div class="absolute w-3 h-3 border-2 border-black bg-white -bottom-[2%] right-[48%]"></div>
              <div class="absolute w-3 h-3 border-2 border-black bg-white -top-[2%] right-[48%]"></div>
            </div>
          </div>
          <div id="cardBG" class=" w-[45vh] h-80 bg-cover bg-center rounded-xl absolute -mt-80">
            <div class="absolute border-2 border-black w-[110%] h-[120%] -left-[5%] -top-[10%] relative">
              <div class="absolute w-3 h-3 border-2 border-black bg-white -top-[2%] -left-[2%]"></div>
              <div class="absolute w-3 h-3 border-2 border-black bg-white -top-[2%] -right-[2%]"></div>
              <div class="absolute w-3 h-3 border-2 border-black bg-white -bottom-[2%] -right-[2%]"></div>
              <div class="absolute w-3 h-3 border-2 border-black bg-white -bottom-[2%] -left-[2%]"></div>
              <div class="absolute w-3 h-3 border-2 border-black bg-white bottom-[45%] -right-[2%]"></div>
              <div class="absolute w-3 h-3 border-2 border-black bg-white bottom-[45%] -left-[2%]"></div>
              <div class="absolute w-3 h-3 border-2 border-black bg-white -bottom-[2%] right-[48%]"></div>
              <div class="absolute w-3 h-3 border-2 border-black bg-white -top-[2%] right-[48%]"></div>
            </div>
          </div>
        </div>
        <div class="w-max mx-auto pt-28">
          <h3 class="font-voyage w-max mx-auto text-6xl hover:text-[5rem] transition-all">Projet de fin d'année</h3>
          <h3 class="text-sm font-light mx-auto text-center mt-8">School project on an asian food website</h3>
          <a class="w-max mx-auto flex mt-8 bg-black text-[#E8C9C4] py-2 px-4" href="maquettes/site_axe_maquette.xd" download><button class="font-staff uppercase w-max mx-auto ">Télécharger la maquette</button></a>
        </div>
      </div> 
    </div>
  </div>
</template>
<script>
export default {
    name: 'Intercalaire',
}
</script>