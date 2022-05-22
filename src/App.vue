<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
<header class=" sticky top-0 drop-shadow-lg z-10">
  <nav class="bg-bleufonce flex justify-between" >
    <RouterLink to="/" ><img src="../public/icon_svg/logo-site.svg" class="w-28 h-28 mx-6" alt=""></RouterLink>
    <ul class="flex gap-6  p-10 px-10 text-white text-xl">
      <li> <RouterLink class=" " to="/Tendances"> Tendances</RouterLink></li>
      <li> <RouterLink class=" " to="/Glossaire"> Glossaire</RouterLink></li>
      <div class="relative items-center  text-black px-1 ">
        <Donate class="absolute left-3"/>
        <li> <RouterLink class=" bg-white px-8 py-4  rounded-3xl " to="/Don">Faire un don</RouterLink></li>
      </div>
      <li> <RouterLink class=" " to="/Inscrire">S’inscrire</RouterLink></li>
      <li> <RouterLink class=" " to="/Profil">Profil</RouterLink></li>
    </ul>
  </nav>
</header>
<main class=" bg-bleu">
  <Router-View/>
</main>
  <footer class=" bg-bleufonce"> 
    <div>
      <h3>Lien</h3>
        <a href="">Faire un don</a>
        <a href="">Tendances</a>
        <a href="">Nous contacter</a>
        <a href="">Glossaire</a>
    </div>
    <div>
      <h3>Obtenir de l'aide</h3>
        <a href="mailto:Lets.Draw250@gmail.com">Lets.Draw250@gmail.com</a>
        <RouterLink class=" " to="/Apropos">À propos</RouterLink>
    </div>
    <div>
      <h3>Information</h3>
        <RouterLink class=" " to="/Mentionlegales">Mentions legales</RouterLink>
    </div>
    <div>
      <h3>Suivez-nous</h3>
            <!-- Logo Réseaux Sociaux -->
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


export default {
  name: "App",
  components: { MenuIcon,Donate },
};
</script>
