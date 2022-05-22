<template>
    <main class="bg-bleu">
        <div class="flex">
            <h1 class="text-white text-6xl">Enfants & Artiste, présentez votre coup de pinceau, partagez votre talent sur Let’s Draw</h1>

            <!-- Image début -->
            <img src="" alt="">
        </div>

        <div class="flex justify-between mt-20 mx-64">
           <a class="bg-bleufonce rounded-full text-white  px-8 py-4" href="">Envoyer mon dessin</a> 
           <a class="bg-bleufonce rounded-full text-white  px-8 py-4" href="">Faire un dessin</a> 
        </div>
        
        <h2 class="font-bold text-center mt-16">Les Dernieres Tendances</h2>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(345px,1fr))] gap-8">
        <card :nbr-s-d-b="4"
            :nbr-s-d-b1="2"
            :prix="2700"
            :favori="true"
            image="/public/img-squirrel/image_3.webp"
            nom="Beverly Springfield"
            nom1="2821 Lake Sevilla, Palm Harbor, TX"
            size="6x7.5 m²"
            />
        <card :nbr-s-d-b="4"
            :nbr-s-d-b1="2"
            :prix="2095"
            favori
            image="/public/img-squirrel/image_3.webp"
            nom="Palm Harbor"
            nom1="2699 Green Valley, Highland Lake"
            size="6x7.5 m²" />
        <card :nbr-s-d-b="4"
            :nbr-s-d-b1="2"
            :prix="2095"
            favori
            image="/public/img-squirrel/image_3.webp"
            nom="Palm Harbor"
            nom1="2699 Green Valley, Highland Lake"
            size="6x7.5 m²" />
        <card :nbr-s-d-b="4"
            :nbr-s-d-b1="2"
            :prix="2095"
            favori
            image="/public/img-squirrel/image_3.webp"
            nom="Palm Harbor"
            nom1="2699 Green Valley, Highland Lake"
            size="6x7.5 m²" />
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