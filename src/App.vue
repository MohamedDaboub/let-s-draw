<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
<header class=" sticky top-0 drop-shadow-lg z-10">
  <nav class="bg-bleufonce flex justify-between" >
    <RouterLink to="/" ><img src="../public/icon_svg/logo-site.svg" class="w-40 h-28 ml-6" alt=""></RouterLink>
    <ul class="flex gap-12 items-center text-white text-xl font-semibold mr-16">
      <li> <RouterLink class=" " to="/Tendances">Tendances</RouterLink></li>
      <li> <RouterLink class=" " to="/Glossaire">Glossaire</RouterLink></li>
      <li> <RouterLink class=" " to="/Contact">Nous contacter</RouterLink></li>
      <div class="flex gap-2 px-4 bg-white p-2 rounded-3xl text-black">
        <Donate class=""/>
        <li> <RouterLink class="" to="/Don">Faire un don</RouterLink></li>
      </div>
      <div class="flex gap-2 px-4 bg-white p-2 rounded-3xl text-black">
        <Inscription class="mt-1" />
        <li> <RouterLink class=" " to="/Inscrire">S’inscrire</RouterLink></li>
      </div>
      <!-- <li> <RouterLink class=" " to="/Profil">Profil</RouterLink></li> -->
    </ul>
  </nav>
</header>
<main class=" bg-bleu">
  <Router-View/>
</main>
  <!-- <footer class=" bg-bleufonce py-20"> 
    <div class="flex justify-between m-auto p-8 text-white">
      <div class="flex flex-col gap-6">
        <h3 class="border-b-2 border-rouge pb-4">Lien</h3>
        <div class="flex gap-2 px-4 bg-white p-2 rounded-3xl text-black">
          <Donate class=""/>
          <RouterLink class="" to="/Don">Faire un don</RouterLink>
        </div>
        <Routerlink class="text-gris" to="/Tendances">Tendances</Routerlink>
        <Routerlink class="text-gris" to="/Contact">Nous contacter</Routerlink>
        <Routerlink class="text-gris" to="/Glossaire">Glossaire</Routerlink>
      </div>
      <div class="flex flex-col gap-6">
        <h3 class="border-b-2 border-rouge pb-4">Obtenir de l'aide</h3>
        <a class="text-gris" href="mailto:Lets.Draw250@gmail.com">Lets.Draw250@gmail.com</a>
        <RouterLink class="text-gris" to="/Apropos">À propos</RouterLink>
      </div>
      <div class="flex flex-col gap-6">
        <h3 class="border-b-2 border-rouge pb-4">Information</h3>
        <RouterLink class="text-gris" to="/Mentionlegales">Mentions legales</RouterLink>
      </div>
      <div class="flex flex-col gap-6">
        <h3 class="border-b-2 border-rouge pb-4">Suivez-nous</h3>
            <div class="flex gap-2">
              <Facebook  class=""/>
              <Instagram class=""/>
              <Pinterest class=""/>
            </div>
      </div>
    </div>
    <div>
             Image Paiement
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
    </div>
  </footer> -->
<footer class="bg-bleufonce pt-10">
        <div class="max-w-6xl m-auto text-gray-900 flex flex-wrap justify-left">

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

                <div class="text-xs uppercase text-white font-bold mb-6 border-b-2 border-rouge pb-4 w-1/4">
                    Lien
                </div>


                <div class="relative  bg-white  rounded-3xl text-black   w-36 py-1   ">
                  <Donate class="absolute left-2 top-3  "/>
                  <RouterLink class="my-3 block text-black hover:text-gray-500 text-sm  font-normal duration-700   mx-8" to="/Don">Faire un don</RouterLink>
                </div>
                <a href="#" class="my-3 block text-gris hover:text-gray-100 text-sm  font-normal duration-700">
                    Tendances
                </a>
                <a href="#" class="my-3 block text-gris hover:text-gray-100 text-sm  font-normal duration-700">
                    Nous contacter
                </a>
                <a href="#" class="my-3 block text-gris hover:text-gray-100 text-sm  font-normal duration-700">
                    Glossaire
                </a>
            </div>


            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

                <div class="text-xs uppercase text-white font-bold mb-6 border-b-2 border-rouge pb-4 w-1/2">
                    Obtenir de l'aide
                </div>
                <a class="text-gris my-3 block hover:text-gray-100 text-sm  font-normal duration-700" href="mailto:Lets.Draw250@gmail.com">Lets.Draw250@gmail.com</a>  
            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                <div class="text-xs uppercase text-white font-bold mb-6 border-b-2 border-rouge pb-4 w-1/2">
                    Information
                </div>
                <RouterLink class="text-gris my-3 block  hover:text-gray-100 text-sm  font-normal duration-700" to="/Mentionlegales">Mentions legales</RouterLink>
                <RouterLink class="text-gris my-3 block  hover:text-gray-100 text-sm  font-normal duration-700" to="/Apropos">À propos</RouterLink>
            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12 ">
                <div class="text-xs uppercase text-white font-bold mb-6 border-b-2 border-rouge pb-4 w-1/2">
                    Suivez-nous
                </div>
                <div class="flex gap-2">
                  <Facebook  class=" hover:text-gray-100"/>
                  <Instagram class=" hover:"/>
                  <Pinterest class=" "/>
                </div>
            </div>           
        </div>
        <div>
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
        </div>
</footer>
</template>

<script>
import { MenuIcon } from "@heroicons/vue/solid";
import Donate from "./components/icons/DonateView.vue"
import Inscription from "./components/icons/sincrireView.vue"
import Facebook from "./components/icons/FacebookView.vue"
import Instagram from "./components/icons/InstagramView.vue"
import Pinterest from "./components/icons/PinterestView.vue"


export default {
  name: "App",
  components: { MenuIcon,Donate, Inscription, Facebook, Instagram, Pinterest },
};
</script>
