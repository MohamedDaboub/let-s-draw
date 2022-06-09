<template>
    <main class="bg-bleu">
        <div class="flex md:mx-10 py-20 md:gap-10 gap-5 mx-5">
            <h1 class="text-white md:text-5xl text-xl  leading-tight lg:mr-40 mr-5 font-chivo">Enfants & Artiste, présentez votre coup de pinceau, partagez votre talent sur Let’s Draw</h1>
            <img class="w-1/3 " src="../../public/img-squirrel/image_9.webp" alt="">
        </div>
        <div class="flex mx-auto content-center text-center justify-center lg:gap-52 gap-3  md:text-xl text-base ">
           <RouterLink class="bg-bleufonce rounded-full text-white  md:px-8 px-4 py-4 font-chivo hover:bg-white hover:text-black" to="/choixArtiste">Envoyer mon dessin</RouterLink>
           <RouterLink class="bg-bleufonce rounded-full text-white  md:px-8 px-4 py-4 font-chivo hover:bg-white hover:text-black" to="/Inscription">Faire un dessin</RouterLink>
        </div>
        
        <h2 class="font-bold text-center text-4xl my-10  text-white font-chivo">Les Dernieres Tendances</h2>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(345px,1fr))] gap-8 md:mx-10  py-10">
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