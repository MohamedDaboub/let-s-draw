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
      <li> <RouterLink class=" " to="/Profil">Profil</RouterLink></li>
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
<footer class="bg-bleufonce pt-10 ">
        <div class="max-w-6xl m-auto text-gray-900 flex flex-wrap justify-left text-lg">

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

                <div class="text-xs uppercase text-white font-bold mb-6 border-b-2 border-rouge pb-4 w-1/4">
                    Lien
                </div>
                <div class="flex gap-2 px-4 bg-white p-2 rounded-3xl text-black w-44">
                  <Donate class="" />
                  <RouterLink class="hover:text-gray-500 font-semibold duration-500" to="/Don">Faire un don</RouterLink>
                  </div>
                  <RouterLink class="text-gris my-3 block  hover:text-gray-100  font-semibold duration-700" to="/">Accueil</RouterLink>
                  <RouterLink class="text-gris my-3 block  hover:text-gray-100   font-semibold duration-700" to="/Contact">Nous contacter</RouterLink>
                  <RouterLink class="text-gris my-3 block  hover:text-gray-100  font-semibold duration-700" to="/Glossaire">Glossaire</RouterLink>
            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

                <div class="text-xs uppercase text-white font-bold mb-6 border-b-2 border-rouge pb-4 w-1/2">
                    Obtenir de l'aide
                </div>
                <a class="text-gris my-3 block hover:text-gray-100  font-semibold duration-700" href="mailto:Lets.Draw250@gmail.com">Lets.Draw250@gmail.com</a>  
            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                <div class="text-xs uppercase text-white font-bold mb-6 border-b-2 border-rouge pb-4 w-1/2">
                    Information
                </div>
                <RouterLink class="text-gris my-3 block  hover:text-gray-100   font-semibold duration-700" to="/Mentionslegales">Mentions legales</RouterLink>
                <RouterLink class="text-gris my-3 block  hover:text-gray-100  font-semibold duration-700" to="/Apropos">À propos</RouterLink>
            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12 ">
                <div class="text-xs uppercase text-white font-bold mb-6 border-b-2 border-rouge pb-4 w-1/2">
                    Suivez-nous
                </div>
                <div class="flex gap-2">
                  <a><Facebook  /></a>
                  <a><Instagram /></a>
                  <a><Pinterest /></a>
                </div>
            </div>           
        </div>
        <div class="flex  justify-end gap-10 pb-6 px-10">
          <img class=" w-1/6 h-1/6  "  src="../public/img-squirrel/image_40.webp" alt="">
          <img class=" w-1/12 " src="../public/img-squirrel/image_41.webp" alt="">
          <img class=" w-1/12 h-1/12  " src="../public/img-squirrel/image_21.webp" alt="">
          <img class=" w-1/12 h-1/12  " src="../public/img-squirrel/image_20.webp" alt="">
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
import modifier from "./components/icons/ModifierView.vue"


export default {
  name: "App",
  components: { MenuIcon,Donate, Inscription, Facebook, Instagram, Pinterest, modifier },
};
</script>
