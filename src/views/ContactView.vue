<template>
<section class="mx-[15%]">
    <div class="text-white p-10">
        <h1 class="md:text-5xl text-3xl my-10">Nous contacter</h1>
        <p class="md:text-2xl text-lg my-10">Pour nous contacter veuillez remplir le formulaire ci-dessous en reignant votre demande</p>
    </div>
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
            <p>
            <label for="sujet" class="flex flex-col my-5">Sujet
                <input type="text" id="sujet" name="sujet" value="" placeholder="   sujet" required  class="my-3 border-2  placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400 text-black  rounded-lg h-8" >
            </label>
            </p>
            <p>
            <label for="message" class="flex flex-col my-5">Message complémentaire pour l’artiste (obligatoire)
                <textarea id="message" name="message"  placeholder="   Message" rows="7" required class="my-3 border-2  placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400  text-black  rounded-lg " ></textarea>
            </label>
            </p>
            <input type="checkbox" id="j'accepte" name="j'accepte"
                    class="mr-5 h-6 w-6 border-2 border-Default/me/Gris" required>
            <label for="j'accepte" class="check">J’accepte et j’ai  lu les conditions générales d’utilisations.</label>
            <div class="flex justify-center m-auto">
                <button type="submit"  class="bg-bleufonce px-8 py-4 my-7 text-base hover:bg-white hover:text-black rounded-lg">Envoyer votre message</button>
            </div>
        </form>
    </div>
</section>
</template>