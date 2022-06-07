<template>
<section class=" lg:mx-10 sm:mx-4 text-white py-7">
    <h1 class="text-3xl  font-bold py-4">Faire un don à l’artiste</h1>
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