<template>

    <body>
        <div class="px-10 pt-10 text-white flex">
            <!-- Image de l'artiste -->
            <img class="rounded-full" src="../../public/img-squirrel/Florent_Vacot.webp" alt="Image de l'artiste">
            <!-- Données de l'artiste -->
            <div class="m-4 flex flex-col gap-2 justify-between">
                <h1 class="text-5xl font-semibold">Florent Vacot</h1>
                <p class="text-2xl font-light ml-6">29 ans</p>
                <p>Délai de 2 semaines maximum</p>
            </div>
        </div>
        <!-- Biographie de l'artiste -->
        <p class="text-white ml-20 mt-6 text-xl">Jeune et passioné de nature, je peux réaliser votre dessin au gout que vous voulez.</p>

        <!-- Composants Style de dessin x2 -->
        <div class="flex gap-20 mt-10 ml-52">
            <RouterLink class=" " to="/Glossaire"><TypeDessins Nom="Hyperréalisme"/></RouterLink>
            <RouterLink class=" " to="/Glossaire"><TypeDessins Nom="Dessins au Trait"/></RouterLink>
        </div>


        <h2>Mes derniers dessins :</h2>

        <div>
            <img src="" alt="">
            <div>
                <p>Chien et chat meilleurs amis</p>
                <p>Il y 4 jours</p>
            </div>
        </div>
        
        <!-- Composant bouton envoyer -->
        <button>
            <RouterLink to="">Commence un chat </RouterLink>
        </button>
    </body>

</template>
<script>
import TypeDessins from "../components/TypeDessinsView.vue"

export default {
  name: "App",
  components: { TypeDessins },
};
</script>