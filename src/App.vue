<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <header class=" sticky top-0 drop-shadow-lg z-10 bg-bleufonce font-yaldevi">
  <a href="#content" class="sr-only focus:not-sr-only text-lg text-text"> Passez au contenu </a>
    <nav class=" lg:flex lg:justify-between">
      <div class="flex justify-between items-center">
        <RouterLink to="/"><Logo class="md:w-40 h-12 mx-6 w-16 " /></RouterLink>
        <span class="text-3xl cursor-pointer lg:hidden block w-8 h-8 mx-10  ">
          <MenuIcon class=" text-white"  aria-controls="menu"
          :aria-expanded="menuOuvert"
          @click="menuOuvert = !menuOuvert">
          </MenuIcon>
          <span class="sr-only ">Menu</span>
        </span>
      </div>
      <ul id="menu" v-if="menuOuvert" class="lg:hidden gap-12 items-center text-white text-xl font-semibold mx-10 " >
        <li class="my-5">
          <RouterLink class=" " to="/">Accueil</RouterLink>
        </li>
        <li class="my-5">
          <RouterLink class=" " to="/Glossaire">Glossaire</RouterLink>
        </li>
        <li class="my-5">
          <RouterLink class="" to="/Contact">Nous contacter</RouterLink>
        </li>
        <li class="flex gap-2 px-4 bg-white p-2 rounded-3xl text-black my-5 w-48 ">
          <Donate class="" />
            <RouterLink class="" to="/Don">Faire un don</RouterLink>
        </li>
        <!-- <li class="px-2 bg-white  rounded-3xl text-black py-2 w-1/3 hover:bg-bleu  hover:text-white">
          <RouterLink class=" " to="/connecter">se connecter</RouterLink>
        </li> -->
        <li class="flex gap-2 px-4 bg-white  rounded-3xl text-black py-5 w-40">
          <Inscription class="mt-1" />
          <RouterLink class=" " to="/Inscrire">S’inscrire</RouterLink>
        </li>
        <!-- <li> <RouterLink class=" " to="/Profil">Profil</RouterLink></li> -->
      </ul>
      <ul class="lg:flex  gap-10 lg:items-center hidden items-center text-white text-xl font-semibold mx-10 py-5" >
        <li class="my-5">
          <RouterLink class=" " to="/">Accueil</RouterLink>
        </li>
        <li class="my-5">
          <RouterLink class=" " to="/Glossaire">Glossaire</RouterLink>
        </li>
        <li class="my-5">
          <RouterLink class=" " to="/Contact">Nous contacter</RouterLink>
        </li>
        <li class="flex gap-2 px-4 bg-white p-2 rounded-3xl text-black my-5 w-1/2 hover:bg-bleu hover:text-white">
          <Donate class="" />
            <RouterLink class="" to="/Don">Faire un don</RouterLink>
        </li>
        <!-- <li class="px-2 bg-white  rounded-3xl text-black py-2 w-1/3 hover:bg-bleu  hover:text-white">
          <RouterLink class=" " to="/connecter">se connecter</RouterLink>
        </li> -->
        <li class="flex gap-2 px-2 bg-white  rounded-3xl text-black py-2 w-1/3 hover:bg-bleu  hover:text-white">
          <Inscription class="mt-1 " />
          <RouterLink class=" " to="/Inscription">S’inscrire</RouterLink>
          
        </li>
        <!-- <li> <RouterLink class=" " to="/Profil">Profil</RouterLink></li> -->
      </ul>
    </nav>
  </header>
  <main class=" bg-bleu" id="content">
    <Router-View />
  </main>
  <footer class="bg-bleufonce pt-10 font-yaldevi ">
    <div class="max-w-6xl m-auto text-gray-900 flex flex-wrap justify-left text-lg">

      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

        <div class="text-xs uppercase text-white font-bold mb-6 border-b-2 border-rouge pb-4 w-1/4">
          Lien
        </div>
        <div class="flex gap-2 px-3 bg-white p-2 rounded-3xl text-black w-40">
          <Donate class="" />
          <RouterLink class="hover:text-gray-500 font-semibold duration-500" to="/Don">Faire un don</RouterLink>
        </div>
        <RouterLink class="text-gris my-3 block  hover:text-gray-100  font-semibold duration-700" to="/">Accueil
        </RouterLink>
        <RouterLink class="text-gris my-3 block  hover:text-gray-100   font-semibold duration-700" to="/Contact">Nous
          contacter</RouterLink>
        <RouterLink class="text-gris my-3 block  hover:text-gray-100  font-semibold duration-700" to="/Glossaire">
          Glossaire</RouterLink>
      </div>

      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12 flex flex-col ">

        <div class="text-xs uppercase text-white font-bold mb-6 border-b-2 border-rouge pb-4 w-1/2">
          Obtenir de l'aide
        </div>
        <a class="text-gris my-3  hover:text-gray-100 text-xs sm:text-lg  font-semibold duration-700 "
          href="mailto:Lets.Draw250@gmail.com">LetsDraw@gmail.com</a>
      </div>

      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div class="text-xs uppercase text-white font-bold mb-6 border-b-2 border-rouge pb-4 w-1/2">
          Information
        </div>
        <RouterLink class="text-gris my-3 block  hover:text-gray-100   font-semibold duration-700"
          to="/Mentionslegales">Mentions legales</RouterLink>
        <RouterLink class="text-gris my-3 block  hover:text-gray-100  font-semibold duration-700" to="/Apropos">À propos
        </RouterLink>
      </div>

      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12 ">
        <div class="text-xs uppercase text-white font-bold mb-6 border-b-2 border-rouge pb-4 w-1/2">
          Suivez-nous
        </div>
        <div class="flex gap-2">
          <a href="https://www.facebook.com/">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/lets_draw_off/">
            <Instagram />
          </a>
          <a href="https://www.pinterest.fr/letsdraw250/_saved/">
            <Pinterest />
          </a>
        </div>
      </div>
    </div>
    <div class="flex  justify-end gap-10 pb-6 px-10">
      <img class=" w-1/6 h-1/6  " src="../public/img-squirrel/image_40.webp" alt="logo visa">
      <img class=" w-1/12 " src="../public/img-squirrel/image_41.webp" alt="logo ob">
      <img class=" w-1/12 h-1/12  " src="../public/img-squirrel/image_21.webp" alt="logo master card">
      <img class=" w-1/12 h-1/12  " src="../public/img-squirrel/image_20.webp" alt="logo paypal">
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
import Logo from "./components/LogoView.vue";


export default {
  name: "App",
  components: { MenuIcon, Donate, Inscription, Facebook, Instagram, Pinterest, modifier, Logo,},
      data() {
    return {
      menuOuvert: false,
    };
    
    },
    beforeMount(){
    this.$router.afterEach(() => (this.menuOuvert = false));
  }
};
</script>
