<template>
    <h1 class="p-10 text-white text-5xl">Mon Profil</h1>
    <div class="grid grid-cols-2 w-1/2">
        <div>
            <img class="rounded-full border-4 border-white ml-24 w-52" src="../../public/img-squirrel/image-35.webp"
                alt="">
        </div>
        <div class="text-white flex flex-col">
            <div class="flex gap-52">
                <div>
                    <p>Votre nom</p>
                    <div class="flex gap-32 my-4 ml-4 bg-bleutransparent2 p-2 rounded-xl text-black w-56">
                        <p class="">Antoine</p>
                        <Modifier class="" />
                    </div>
                </div>
                <div >
                    <p>Votre prénom</p>
                    <div class="flex gap-36 my-4 ml-4 bg-bleutransparent2 p-2 rounded-xl text-black">
                        <p>Garot</p>
                        <Modifier class="" />
                    </div>
                </div>
            </div>
            <div>
                <p>Votre email</p>
                <div class="flex gap-[139px] my-4 ml-4 bg-bleutransparent2 p-2 rounded-xl text-black">
                    <p>antoine.garot@gmail.com</p>
                    <Modifier class="" />
                </div>
            </div>
            <div>
                <p>Votre mot de passe</p>
                <div class="flex gap-[280px] my-4 ml-4 bg-bleutransparent2 p-2 rounded-xl text-black">
                    <p>............</p>
                    <Modifier class="" />
                </div>
            </div>
        </div>
    </div>
    <div class="my-6 mx-10">
        <h2 class="text-4xl text-white">Biographie</h2>
        <div class="flex justify-between bg-bleutransparent2 p-3 rounded-xl mt-4 mr-40">
            <p class="">Je suis actuellement à la recherche d’un artiste spécialiste du pointillisme. J’aimerai qu’on reprenne mon
            dessin d’enfance.</p>
            <Modifier class="" />
        </div>
    </div>
    <div class="my-10 mx-10">
        <h2 class="text-4xl text-white">Notifications</h2>
        <div class="text-2xl flex mt-8 ml-20 text-white">
            <p class="bg-red-700 rounded-full p-1">1</p>
            <p class="mx-4 p-1">Vous avez reçu un nouveau dessin</p>
        </div>
        <p class="bg-bleutransparent2 p-3 rounded-xl mr-40 mt-6">Florent Vacot a terminer votre dessin, il y a 2 jours. Vous pouvez dès à présent consulter votre dessin en
            cliquant sur ce bouton ci-dessous</p>

    </div>
    <bouton  Nom="Consulter mon dessin" />
    <div class="mx-10">
        <h2 class="text-4xl text-white mt-20">Faîtes un don</h2>
        <div>
            <h3 class="text-2xl text-white my-6 mx-6">L'objectif du don</h3>
            <p class="w-1/2 ml-16">Le don a pour but d’aider les artistes dans leur carrière ou futur carrière, de soutenir l’association
                “Unicef” qui lutte pour les enfants défavorisés et de nous aider à continuer de faire fonctionner Let’s
                Draw.</p>
            <img class="bg-transparent" src="../../public/img-squirrel/image-37.webp" alt="">
            
        </div>
        <div>
            <h3 class="text-2xl text-white my-6 mx-6">Répartition du don</h3>
            <img src="" alt="">
        </div>
    </div>
    <!-- Composant Bouton -->
</template>
<script>
import Modifier from "../components/icons/ModifierView.vue"
import Bouton from "../components/BoutonView.vue"

export default {
    name: "App",
    components: { Modifier, Bouton },
};
</script>