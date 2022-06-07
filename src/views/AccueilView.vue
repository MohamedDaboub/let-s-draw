<template>
    <main class="bg-bleu">
        <div class="flex mx-10 py-20">
            <h1 class="text-white text-5xl leading-tight mr-40">Enfants & Artiste, présentez votre coup de pinceau, partagez votre talent sur Let’s Draw</h1>
            <img class="w-1/3 " src="../../public/img-squirrel/image_9.webp" alt="">
        </div>
        <div class="flex mx-auto content-center text-center justify-center gap-52 text-xl">
           <RouterLink class="bg-bleufonce rounded-full text-white  px-8 py-4" to="/choixArtiste">Envoyer mon dessin</RouterLink>
           <RouterLink class="bg-bleufonce rounded-full text-white  px-8 py-4" to="/Inscription">Faire un dessin</RouterLink>
        </div>
        
        <h2 class="font-bold text-center text-4xl my-10 mt-32 text-white">Les Dernieres Tendances</h2>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(345px,1fr))] gap-8 mx-10 py-10">
            <card :nbr-s-d-b="4"
                :favori="true"
                image="/img-squirrel/image_3.webp"
                nom="Jean Vart"
                nom1="Peintre"
                />
            <card :nbr-s-d-b="5"
                :favori="true"
                image="/img-squirrel/image_15.webp"
                nom="Florent Vacot"
                nom1="Peintre"
                />
            <card :nbr-s-d-b="7"
                favori
                image="/img-squirrel/image_4.webp"
                nom="Manon Bernard"
                nom1="Peintre" />
            <card :nbr-s-d-b="10"
                favori
                image="/img-squirrel/image_7.webp"
                nom="Pauline Fort"
                nom1="Peintre"/>
            <card :nbr-s-d-b="15"
                favori
                image="/img-squirrel/image_8.webp"
                nom="Lance Leblanc"
                nom1="Peintre" />
            <card :nbr-s-d-b="20"
                :favori="true"
                image="/img-squirrel/image_10.webp"
                nom="Florent Vacot"
                nom1="Peintre"
                />
            <card :nbr-s-d-b="23"
                favori
                image="/img-squirrel/image_11.webp"
                nom="Manon Bernard"
                nom1="Peintre" />
            <card :nbr-s-d-b="26"
                favori
                image="/img-squirrel/image_12.webp"
                nom="Pauline Fort"
                nom1="Peintre"/>
        </div>


    </main>

</template>
<script>
import card from "../components/CardView.vue"

export default {
  name: "App",
  components: { card },
};
</script>