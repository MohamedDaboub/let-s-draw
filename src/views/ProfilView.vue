<template>
    <h1 class="p-10 text-white text-5xl">Mon Profil</h1>
    <div class="flex flex-cols-3>">
        <div>
            <img class="rounded-full border-4 border-white" src="../../public/img-squirrel/image-35.webp" alt="">
        </div>
        <div class="mx-16 text-white">
            <div class="flex gap-52">
                <div>
                    <p>Votre nom</p>
                    <div class="ml-4 flex">
                        <p>Antoine</p>
                        <Modifier class=""/>
                    </div>
                </div>
                <div>
                    <p>Votre prénom</p>
                    <div>
                        <p>Garot</p>
                        <!-- Logo modifer -->
                    </div>
                </div>
            </div>
            <div>
                <p>Votre email</p>
                <div>
                    <p>antoine.garot@gmail.com</p>
                    <!-- Logo modifier -->
                </div>
            </div>
            <div>
                <p>Votre mot de passe</p>
                <div>
                    <p>............</p>
                    <!-- Logo modifier -->
                </div>
            </div>
        </div>
    </div>
    <div>
        <h2>Biographie</h2>
        <p>Je suis actuellement à la recherche d’un artiste spécialiste du pointillisme. J’aimerai qu’on reprenne mon dessin d’enfance.</p>
    </div>
    <div>
        <h2>Notifications</h2>
        <div>
            <p>1</p>
            <p>Vous avez reçu un nouveau dessin</p>
        </div>
        <p>Florent Vacot a terminer votre dessin, il y a 2 jours. Vous pouvez dès à présent consulter votre dessin en cliquant sur ce bouton ci-dessous</p>
        <!-- Composant "Style dessin" -->
    </div>
    <div>
        <h2>Faîtes un don</h2>
        <div>
            <h3>L'objectif du don</h3>
            <p>Le don a pour but d’aider les artistes dans leur carrière ou futur carrière, de soutenir l’association “unicef” qui lutte pour les enfants défavorisés et de nous aider à continuer de faire fonctionner Let’s Draw.</p>
        </div>
        <div>
            <h3>Répartition du don</h3>
            <img src="" alt="">
        </div>
    </div>
    <!-- Composant Bouton -->
</template>
<script>
import Modifier from "../components/icons/ModifierView.vue"

export default {
  name: "App",
  components: { Modifier },
};
</script>