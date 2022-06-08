<template>
    <body class="md:mx-10 mx-5 text-white">
        <h1 class="p-10 text-3xl font-bold mx-4">Inscrivez-vous</h1>
        <p class="text-2xl font-bold py-10">Vous pouvez vous inscrire sous forme de 2 comptes différents.
            Devenez un artiste et vous réaliserez les dessins.
            Envoyez votre dessin pour le faire réaliser par un artiste</p>
 
        <div class="py-10 flex justify-center lg:gap-52 md:gap-10 gap-4 text-white">
            <RouterLink class="bg-bleufonce lg:p-10 p-5 rounded-lg hover:bg-blue-600" to="/createParent">
                <img src="../../public/img-squirrel/image_17.webp" class="text-center m-auto md:w-full w-96 " alt="">
                <h4 class="md:text-2xl text-base font-bold py-10">Je souhaite envoyer mon dessin</h4>
            </RouterLink>
            <RouterLink class="bg-bleufonce lg:p-10 p-5 rounded-lg hover:bg-blue-600" to="/createArtiste">
                <img src="../../public/img-squirrel/image_18.webp" class="text-center m-auto md:w-full w-96" alt="">
                <h4 class="md:text-2xl text-base font-bold py-10 ">Je souhaite devenir un artiste</h4>
            </RouterLink>
        </div>
    </body>

</template>