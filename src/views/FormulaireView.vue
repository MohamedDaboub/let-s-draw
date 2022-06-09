
<template>
  <section class="mx-[15%]">
    <div class="p-10 text-white">
      <h1 class="my-10 text-3xl md:text-5xl font-chivo">Envoyer mon Dessin</h1>
      <p class="my-10 text-lg md:text-2xl">Pour envoyer votre dessin, veuillez créer un compte et remplir le formulaire ci-dessous</p>
    </div>
    <div>
      <form action="#" method="post" class="text-white">
        <p>
          <label for="name" class="my-5 flex flex-col"
            >Votre Nom
            <input
              type="text"
              id="name"
              name="name"
              value=""
              placeholder="  Camille "
              class="my-3 h-8 rounded-lg border-2 text-black placeholder:text-base placeholder:text-gray-400 md:placeholder:text-lg"
            />
          </label>
        </p>
        <p>
          <label for="forename" class="my-5 flex flex-col"
            >Votre Prénom
            <input
              type="text"
              id="forename"
              name="forename"
              value=""
              placeholder="  Lauzier "
              class="my-3 h-8 rounded-lg border-2 text-black placeholder:text-base placeholder:text-gray-400 md:placeholder:text-lg"
            />
          </label>
        </p>
        <p>
          <label for="email" class="my-5 flex flex-col"
            >Votre Email (obligatoire)
            <input
              type="email"
              id="email"
              name="email"
              value=""
              placeholder="   exemple@Mail.com"
              required
              class="my-3 h-8 rounded-lg border-2 text-black placeholder:text-base placeholder:text-gray-400 md:placeholder:text-lg"
            />
          </label>
        </p>
       <!-- Ca ne marchera pas pour une dropzone... sauf si fino peut nous aider à modifier le code correctement... vais devoir dormir et continuer au matin... -->
        <p>
          <label for="message" class="my-5 flex flex-col"
            >Message
            <textarea
              id="message"
              name="message"
              placeholder="   Message"
              rows="7"
              required
              class="my-3 rounded-lg border-2 text-black placeholder:text-base placeholder:text-gray-400 md:placeholder:text-lg"
            ></textarea>
          </label>
        </p>
        <input type="checkbox" id="j'accepte" name="j'accepte" class="border-Default/me/Gris mr-5 h-6 w-6 border-2" required />
        <label for="j'accepte" class="check">J’accepte et j’ai lu les conditions générales d’utilisations.</label>
        <div class="m-auto flex justify-center">
          <button type="submit" class="my-7 rounded-lg bg-bleufonce px-8 py-4 text-base hover:bg-white hover:text-black">
            Envoyer votre message
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
