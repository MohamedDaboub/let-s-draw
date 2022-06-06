<template>
<!-- liste java d'artistes ? -->
    <body>
        <section class="p-10">
            <h1 class="text-white text-5xl">Choix de l’artiste</h1>

            <p class="text-white text-lg pt-10">Pour envoyer votre dessin veullez choisir un artiste en fonction de son style et de vos préférences</p>
        </section>

        <div class="ml-10 text-white flex gap-4 bg-bleutransparent2 rounded-3xl p-2 border-2 border-white w-[29rem]">
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

        <div class="p-10 pb-20 grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(345px,1fr))] gap-8">
            <RouterLink to="/profilArtiste"><Card1 image="/public/img-squirrel/Florent_Vacot.webp"
                    nom="Florent Vacot"
                    role="Peintre"/></RouterLink>
            <RouterLink to="/profilArtiste"><Card1 image="/public/img-squirrel/Florent_Vacot.webp"
                    nom="Manon Bernard"
                    role="Peintre"/></RouterLink>
            <RouterLink to="/profilArtiste"><Card1 image="/public/img-squirrel/Florent_Vacot.webp"
                    nom="Florent Vacot"
                    role="Peintre"/></RouterLink>
            <RouterLink to="/profilArtiste"><Card1 image="/public/img-squirrel/Florent_Vacot.webp"
                    nom="Florent Vacot"
                    role="Peintre"/></RouterLink>
            <RouterLink to="/profilArtiste"><Card1 image="/public/img-squirrel/Florent_Vacot.webp"
                    nom="Florent Vacot"
                    role="Peintre"/></RouterLink>
            <RouterLink to="/profilArtiste"><Card1 image="/public/img-squirrel/Florent_Vacot.webp"
                    nom="Florent Vacot"
                    role="Peintre"/></RouterLink>
            <RouterLink to="/profilArtiste"><Card1 image="/public/img-squirrel/Florent_Vacot.webp"
                    nom="Florent Vacot"
                    role="Peintre"/></RouterLink>
            <RouterLink to="/profilArtiste"><Card1 image="/public/img-squirrel/Florent_Vacot.webp"
                    nom="Florent Vacot"
                    role="Peintre"/></RouterLink>
            <RouterLink to="/profilArtiste"><Card1 image="/public/img-squirrel/Florent_Vacot.webp"
                    nom="Florent Vacot"
                    role="Peintre"/></RouterLink>
        </div>
        

    </body>

</template>
<script>
import flechebas from "../components/icons/flechebasView.vue"
import Card1 from "../components/Card1View.vue"

export default {
  name: "App",
  components: { flechebas, Card1 },
};
</script>