<template>
    <section class="p-10">
        <h1  class="text-white text-3xl">Personnalisation de votre profil</h1>
        <p class="mt-10">Veuillez personnalisé votre profil afin de montrer l’étendu de vos qualitées aux utilisateurs</p>
    </section>
    <section class="mx-[25%]">
        <form action="#" method="post" class="text-white">
            <p>
                <label for="name"  class="flex flex-col my-5">Votre Nom
                    <input type="text" id="name" name="name" value="" placeholder="  Henri "  class="my-3 border-2  placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400 text-black  rounded-lg h-8" >
                </label>
            </p>
            <p>
                <label for="forename"  class="flex flex-col my-5">Votre Prénom 
                    <input type="text" id="forename" name="forename" value="" placeholder="  Laporte "  class="my-3 border-2  placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400 text-black   rounded-lg h-8" >
                </label>
            </p>
            <p> 
                <label for="number" class="flex gap-4 h-8 my-10">Age
                    <input type="number" id="tentacles" name="tentacles" class="rounded-lg" min="1" max="100">
                </label>
            </p>
            <p>
                <label for="message" class="flex flex-col my-5">Message
                    <textarea id="message" name="message"  placeholder="   Message" rows="7" required class="my-3 border-2  placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400  text-black  rounded-lg " ></textarea>
                </label>
            </p>
            <div>
                <p>Vos domaines</p>
                <div class="flex">
                    <input type="checkbox" id="choix1" name="choix1"
                        class="mx-5 md:h-10 md:w-10 w-20 border-2 border-Default/me/Gris" required>
                    <label for="choix1" class="check"><Bouton2 Nom="Hyperréalisme"/></label>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import Bouton2 from "../components/Bouton2View.vue"

export default {
    name: "App",
    components: { Bouton2 },
};
</script>