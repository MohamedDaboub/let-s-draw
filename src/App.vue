<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <!-- Test -->
  <header class="sticky top-0 z-10 drop-shadow-lg">
    <nav class="flex justify-between bg-bleufonce">
      <RouterLink to="/"><Logo class="ml-6 h-28 w-40" /></RouterLink>
      <ul class="mr-16 flex items-center gap-12 text-xl font-semibold text-white">
        <li>
          <RouterLink class="" to="/">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink class="" to="/Glossaire">Glossaire</RouterLink>
        </li>
        <li>
          <RouterLink class="" to="/Contact">Nous contacter</RouterLink>
        </li>
        <li>
          <RouterLink class="" to="/Profil">Profil</RouterLink>
        </li>
        <li>
          <RouterLink class="" to="/Unicef">Unicef</RouterLink>
        </li>
        <div class="flex gap-2 rounded-3xl bg-white p-2 px-4 text-black">
          <Donate class="" />
          <li>
            <RouterLink class="" to="/Don">Faire un don</RouterLink>
          </li>
        </div>
        <div class="flex gap-2 rounded-3xl bg-white p-2 px-4 text-black">
          <Inscription class="mt-1" />
          <li>
            <RouterLink class="" to="/Inscrire">S’inscrire</RouterLink>
          </li>
        </div>
        <!-- <li> <RouterLink class=" " to="/Profil">Profil</RouterLink></li> -->
      </ul>
    </nav>
  </header>
  <main class="bg-bleu">
    <Router-View />
  </main>
  <footer class="bg-bleufonce pt-10">
    <div class="justify-left m-auto flex max-w-6xl flex-wrap text-lg text-gray-900">
      <div class="w-1/2 p-5 sm:w-4/12 md:w-3/12">
        <div class="mb-6 w-1/4 border-b-2 border-rouge pb-4 text-xs font-bold uppercase text-white">Lien</div>
        <div class="flex w-44 gap-2 rounded-3xl bg-white p-2 px-4 text-black">
          <Donate class="" />
          <RouterLink class="font-semibold duration-500 hover:text-gray-500" to="/Don">Faire un don</RouterLink>
        </div>
        <RouterLink class="my-3 block font-semibold text-gris duration-700 hover:text-gray-100" to="/">Accueil </RouterLink>
        <RouterLink class="my-3 block font-semibold text-gris duration-700 hover:text-gray-100" to="/Contact">Nous contacter</RouterLink>
        <RouterLink class="my-3 block font-semibold text-gris duration-700 hover:text-gray-100" to="/Glossaire"> Glossaire</RouterLink>
      </div>

      <div class="w-1/2 p-5 sm:w-4/12 md:w-3/12">
        <div class="mb-6 w-1/2 border-b-2 border-rouge pb-4 text-xs font-bold uppercase text-white">Obtenir de l'aide</div>
        <a class="my-3 block font-semibold text-gris duration-700 hover:text-gray-100" href="mailto:Lets.Draw250@gmail.com"
          >Lets.Draw250@gmail.com</a
        >
      </div>

      <div class="w-1/2 p-5 sm:w-4/12 md:w-3/12">
        <div class="mb-6 w-1/2 border-b-2 border-rouge pb-4 text-xs font-bold uppercase text-white">Information</div>
        <RouterLink class="my-3 block font-semibold text-gris duration-700 hover:text-gray-100" to="/Mentionslegales"
          >Mentions legales</RouterLink
        >
        <RouterLink class="my-3 block font-semibold text-gris duration-700 hover:text-gray-100" to="/Apropos">À propos </RouterLink>
      </div>

      <div class="w-1/2 p-5 sm:w-4/12 md:w-3/12">
        <div class="mb-6 w-1/2 border-b-2 border-rouge pb-4 text-xs font-bold uppercase text-white">Suivez-nous</div>
        <div class="flex gap-2">
          <a>
            <Facebook />
          </a>
          <a>
            <Instagram />
          </a>
          <a>
            <Pinterest />
          </a>
        </div>
      </div>
    </div>
    <div class="flex justify-end gap-10 px-10 pb-6">
      <img class="h-1/6 w-1/6" src="../public/img-squirrel/image_40.webp" alt="" />
      <img class="w-1/12" src="../public/img-squirrel/image_41.webp" alt="" />
      <img class="h-1/12 w-1/12" src="../public/img-squirrel/image_21.webp" alt="" />
      <img class="h-1/12 w-1/12" src="../public/img-squirrel/image_20.webp" alt="" />
    </div>
  </footer>
</template>

<script>
import { MenuIcon } from "@heroicons/vue/solid";
import Donate from "./components/icons/DonateView.vue";
import Inscription from "./components/icons/sincrireView.vue";
import Facebook from "./components/icons/FacebookView.vue";
import Instagram from "./components/icons/InstagramView.vue";
import Pinterest from "./components/icons/PinterestView.vue";
import modifier from "./components/icons/ModifierView.vue";

export default {
  name: "App",
  components: { MenuIcon, Donate, Inscription, Facebook, Instagram, Pinterest, modifier },
};
</script>
