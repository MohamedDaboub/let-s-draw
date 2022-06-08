<template>
    <section class="p-10">
        <h1  class="text-white text-3xl">Personnalisation de votre profil</h1>
        <p class="mt-10">Veuillez personnalisé votre profil afin de montrer l’étendu de vos qualitées aux utilisateurs</p>
    </section>
    <section>
        <form action="#" method="post" class="text-white">
            <div class="mx-[25%]">
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
            </div>
            <div class="mx-[10%]">
                <p>Vos domaines</p>
                <div class="grid grid-cols-3">
                    <div class="flex m-4">
                        <input type="checkbox" id="choix1" name="choix1"
                            class="mx-5 mt-1 md:h-8 md:w-10 w-20 border-2 border-Default/me/Gris" required>
                        <label for="choix1" class="check"><TypeDessins  Nom="Hyperréalisme"/></label>
                    </div>
                    <div class="flex m-4">
                        <input type="checkbox" id="choix2" name="choix2"
                            class="mx-5 mt-1 md:h-8 md:w-10 w-20 border-2 border-Default/me/Gris" required>
                        <label for="choix2" class="check"><TypeDessins Nom="Dessin au Trait"/></label>
                    </div>         
                    <div class="flex m-4">
                        <input type="checkbox" id="choix3" name="choix3"
                            class="mx-5 mt-1 md:h-8 md:w-10 w-20 border-2 border-Default/me/Gris" required>
                        <label for="choix3" class="check"><TypeDessins Nom="Le gribouillage"/></label>
                    </div>  
                    <div class="flex m-4">
                        <input type="checkbox" id="choix4" name="choix4"
                            class="mx-5 mt-1 md:h-8 md:w-10 w-20 border-2 border-Default/me/Gris" required>
                        <label for="choix4" class="check"><TypeDessins Nom="L’anamorphique"/></label>
                    </div>  
                    <div class="flex m-4">
                        <input type="checkbox" id="choix5" name="choix5"
                            class="mx-5 mt-1 md:h-8 md:w-10 w-20 border-2 border-Default/me/Gris" required>
                        <label for="choix5" class="check"><TypeDessins Nom="L’architectural"/></label>
                    </div>
                    <div class="flex m-4">
                        <input type="checkbox" id="choix6" name="choix6"
                            class="mx-5 mt-1 md:h-8 md:w-10 w-20 border-2 border-Default/me/Gris" required>
                        <label for="choix6" class="check"><TypeDessins Nom="Le pointillisme"/></label>
                    </div> 
                    <div class="flex m-4">
                        <input type="checkbox" id="choix7" name="choix7"
                            class="mx-5 mt-1 md:h-8 md:w-10 w-20 border-2 border-Default/me/Gris" required>
                        <label for="choix7" class="check"><TypeDessins  Nom="Le dessin de mode"/></label>
                    </div>         
                </div>
            </div>
            <div class="flex justify-end mx-20 pb-10 mt-20">
                <Bouton Nom="Enregistrer mon Profil"/>
            </div>
        </form>
    </section>
</template>

<script>
import TypeDessins from "../components/TypeDessinsView.vue"
import Bouton from "../components/BoutonView.vue"

export default {
    name: "App",
    components: { Bouton, TypeDessins },
};
</script>