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
  <footer class=" bg-bleufonce"> 
    <div class="flex justify-between mx-28 p-8 text-white">
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
            <!-- Image Paiement -->
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
