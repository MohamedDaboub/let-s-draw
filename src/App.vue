<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <nav>
    <ul class="flex gap-6">
      <li><RouterLink class=" " to="/"> Accueil</RouterLink></li>
      <li> <RouterLink class=" " to="/Tendances"> Tendances</RouterLink></li>
      <li> <RouterLink class=" " to="/Glossaire"> Glossaire</RouterLink></li>
      <li> <RouterLink class=" " to="/Don">Faire un don</RouterLink></li>
      <li> <RouterLink class=" " to="/Inscrire">S’inscrire</RouterLink></li>
      <li> <RouterLink class=" " to="/choixArtiste">Choix de l'artiste</RouterLink></li>
      <li> <RouterLink class=" " to="/profilArtiste">Profil de l'artiste</RouterLink></li>
      <li> <RouterLink class=" " to="/Formulaire">Formulaire</RouterLink></li>
      <li> <RouterLink class=" " to="/Contact">Contact</RouterLink></li>
      <li> <RouterLink class=" " to="/Profil">Profil</RouterLink></li>
      <li> <RouterLink class=" " to="/Mentionlegales">Mentions legales</RouterLink></li>
      <li> <RouterLink class=" " to="/Inscription">Inscription</RouterLink></li>
    </ul>
  </nav>

  <!-- Affiche les pages -->
  <Router-View/>
</template>

<script>
import { MenuIcon } from "@heroicons/vue/solid";

export default {
  name: "App",
  components: { MenuIcon },
};
</script>
