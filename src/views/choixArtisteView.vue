<template>
  <body>
    <section class="p-10">
      <h1 class="text-3xl text-white font-chivo">Choix de l’artiste</h1>

      <p class="pt-10 text-lg text-white">
        Pour envoyer votre dessin veullez choisir un artiste en fonction de son style et de vos préférences
      </p>
    </section>

    <div class="ml-10 grid w-2/3 grid-cols-2 gap-4 rounded-3xl border-2 border-white bg-bleutransparent2 p-2 text-white md:flex md:w-1/3">
      <p>Trier par :</p>

      <div class="flex gap-2 border-b-2">
        <p>Tous</p>
        <flechebas class="mt-2" />
      </div>

      <div class="flex gap-2 border-b-2">
        <p>Les mieux notés</p>
        <flechebas class="mt-2" />
      </div>

      <div class="flex gap-2 border-b-2">
        <p>De la semaine</p>
        <flechebas class="mt-2" />
      </div>
    </div>
    <Card2 />
    
  </body>
</template>
<script>
import flechebas from "../components/icons/flechebasView.vue";
import Card1 from "../components/Card1View.vue";
import Card2 from "../components/icons/card2View.vue";

export default {
  name: "App",
  components: { flechebas, Card1, Card2 },
};
</script>