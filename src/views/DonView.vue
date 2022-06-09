<template>
<section class="lg:mx-10 mx-4 text-white py-7">
    <h1 class="text-3xl  font-bold py-4 font-chivo">Faire un Don à l’UNICEF</h1>
    <p class=" text-lg py-4">Vous avez la possibilité de faire un don à l’UNICEF et à Let’s Draw où la moitié du don ira à l’un et à l’autre</p>

    <h2 class="text-3xl  font-bold py-4 font-chivo">Pourquoi l’UNICEF ?</h2>
    <p class=" text-lg py-4">Nous avons créer une page entièrement dédiée à l’UNICEF. Nous vous conseillons d’aller la voir.</p>
    <div class="flex justify-end">
        <RouterLink class="" to="/Unicef"><flechedroite /></RouterLink>
    </div>
    <h2  class="text-3xl  font-bold py-4 font-chivo">Pourquoi Let’s Draw ?</h2>
    <p class=" text-lg py-4">En fondant Let’s Draw, nous avons tout de suite penser à le rendre totalement gratuit. Mais cela a des conséquences, nous avons besoin de rémunération pour continué à faire fonctionner le site.
    Si chaque personne lisant ce message donnait ce qui pouvait, nous pourrons déjà vivre de ce site.</p>

    <h2 class="text-3xl  font-bold py-4 font-chivo">Pour faire un don</h2>
    <p class=" text-lg py-4">Pour faire un don remplissez le formulaire ci-dessous. 
    Vous avez la possibilité de remplir ce formulaire de façon anonymes en ne remplissant votre nom et prénom.
    Le montant minimal est de 1 € et maximal de 1 000 €.</p>

    <div>
        <form action="#" method="post" class="text-white"> 
            <p>
            <label for="name"  class="flex flex-col my-5">Votre Nom
                <input type="text" id="name" name="name" value="" placeholder="  Camille "  class="my-3 border-2  placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400 text-black  rounded-lg h-8" >
            </label>
            </p>
            <p>
            <label for="forename"  class="flex flex-col my-5">Votre Prénom 
                <input type="text" id="forename" name="forename" value="" placeholder="  Lauzier "  class="my-3 border-2  placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400 text-black   rounded-lg h-8" >
            </label>
            </p>
            <p >
                <label for="email" class="flex flex-col my-5">Votre Email (obligatoire)
                <input type="email" id="email" name="email" value="" placeholder="   exemple@Mail.com" required  class="my-3 border-2  placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400 text-black  rounded-lg h-8"  >
                </label>
            </p>
            <p> <label for="number" class="flex gap-4 text-xl  h-8 my-10 text-black">
                <input type="number" id="tentacles" name="tentacles" class="rounded-lg"
                min="1" max="100">€
                </label>
            </p>
            <div class="flex   ">
            <input type="checkbox" id="choix" name="choix"
                    class="mx-5 md:h-10 md:w-10 w-20 border-2 border-Default/me/Gris" required>
            <label for="choix" class="check"><img src="../../public/img-squirrel/image_40.webp" class="md:w-1/2 w-full   " alt=""></label>
            <input type="checkbox" id="choix1" name="choix1"
                    class="mx-5 md:h-10 md:w-10 w-20 w- border-2 border-Default/me/Gris" required>
            <label for="choix1" class="check"><img src="../../public/img-squirrel/image_41.webp" class="md:w-1/2 w-full   " alt=""></label>
            <input type="checkbox" id="choix2" name="choix2"
                    class="mx-5 md:h-10 md:w-10 w-20 border-2 border-Default/me/Gris" required>
            <label for="choix2" class="check"><img src="../../public/img-squirrel/image_20.webp" class="md:w-1/2  w-full   " alt=""></label>
            <input type="checkbox" id="choix3" name="choix3"
                    class="mx-5 md:h-10 md:w-10 w-20 border-2 border-Default/me/Gris" required>
            <label for="choix3" class="check"><img src="../../public/img-squirrel/image_21.webp" class="md:w-1/2  w-full      " alt=""></label>
            </div>
            <input type="checkbox" id="j'accepte" name="j'accepte" 
            class="mx-5 h-6 w-6 border-2 my-10" required>
            <label for="j'accepte" class="">J’accepte et j’ai  lu les conditions générales d’utilisations.</label>
            <p class="text-white text-base mr-10">(2) En communiquant mes informations, je consens à être recontacté par voie électronique ou téléphonique par le groupe d'étudiant . Ces données seront conservées durant 30 jours afin de pouvoir traiter au mieux ma Demande. Je pourrai faire modifier ou supprimer mes informations sur simple demande.</p>
            <div class="flex justify-center m-auto">
                <button type="submit"  class="bg-bleufonce px-8 py-4 my-7 text-base hover:bg-white hover:text-black rounded-lg">Envoyer votre message</button>
            </div>
        </form>
    </div>
</section>
</template>
<script>
import Flechedroite from "../components/icons/FlechedroiteView.vue"

export default {
    name: "App",
    components: { Flechedroite },
};
</script>