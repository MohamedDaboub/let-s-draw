<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
<header class=" sticky top-0">
  <nav class="bg-slate-600 flex justify-between" >
<img src="../public/icon_svg/logo-site.svg" class="w-24 h-24 mx-6" alt="">
    <ul class="flex gap-6  p-10">
      <li><RouterLink class=" " to="/"> Accueil</RouterLink></li>
      <li> <RouterLink class=" " to="/Tendances"> Tendances</RouterLink></li>
      <li> <RouterLink class=" " to="/Glossaire"> Glossaire</RouterLink></li>
      <li> <RouterLink class=" " to="/Don">Faire un don</RouterLink></li>
      <li> <RouterLink class=" " to="/Inscrire">S’inscrire</RouterLink></li>
      <!-- <li> <RouterLink class=" " to="/choixArtiste">Choix de l'artiste</RouterLink></li> -->
      <!-- <li> <RouterLink class=" " to="/profilArtiste">Profil de l'artiste</RouterLink></li> -->
      <!-- <li> <RouterLink class=" " to="/Formulaire">Formulaire</RouterLink></li> -->
      <!-- <li> <RouterLink class=" " to="/Contact">Contact</RouterLink></li> -->
      <li> <RouterLink class=" " to="/Profil">Profil</RouterLink></li>
      <!-- <li> <RouterLink class=" " to="/Mentionlegales">Mentions legales</RouterLink></li> -->
      <!-- <li> <RouterLink class=" " to="/Inscription">Inscription</RouterLink></li> -->
      <!-- <li> <RouterLink class=" " to="/Apropos">À propos</RouterLink></li> -->
    </ul>
  </nav>
</header>

  <!-- Affiche les pages -->
  <Router-View/>
  <footer> 
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

export default {
  name: "App",
  components: { MenuIcon },
};
</script>
