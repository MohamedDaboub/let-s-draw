<template>
    <h1>Faire un Don à l’UNICEF</h1>
    <p>Vous avez la possibilité de faire un don à l’UNICEF et à Let’s Draw où la moitié du don ira à l’un et à l’autre</p>

    <h2>Pourquoi l’UNICEF ?</h2>
    <p>Nous avons créer une page entièrement dédiée à l’UNICEF. Nous vous conseillons d’aller la voir.</p>
    <flechedroite />

    <h2>Pourquoi Let’s Draw ?</h2>
    <p>En fondant Let’s Draw, nous avons tout de suite penser à le rendre totalement gratuit. Mais cela a des conséquences, nous avons besoin de rémunération pour continué à faire fonctionner le site.
    Si chaque personne lisant ce message donnait ce qui pouvait, nous pourrons déjà vivre de ce site.</p>

    <h2>Pour faire un don</h2>
    <p>Pour faire un don remplissez le formulaire ci-dessous. 
    Vous avez la possibilité de remplir ce formulaire de façon anonymes en ne remplissant votre nom et prénom.
    Le montant minimal est de 1 € et maximal de 1 000 €.</p>

    <div>
        <div>
            <h3>Nom</h3>
            <p>Votre nom</p>
        </div>
        <div>
            <h3>Prénom</h3>
            <p>Votre prénom</p>
        </div>
        <div>
            <h3>email</h3>
            <p>Votre mail</p>
        </div>
    </div>




</template>
<script>
import Flechedroite from "../components/icons/FlechedroiteView.vue"

export default {
    name: "App",
    components: { Flechedroite },
};
</script>