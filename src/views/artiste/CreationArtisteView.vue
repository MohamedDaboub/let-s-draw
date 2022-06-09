<template>
    <section class="md:mx-10 text-white p-4">
        <h1  class="text-white text-3xl font-chivo">Personnalisation de votre profil</h1>
        <p class="py-10 font-fira-sans">Veuillez personnalisé votre profil afin de montrer l’étendu de vos qualitées aux utilisateurs</p>
    </section>
    <section>
        <form action="#" method="post" class="text-white font-fira-sans" @submit.prevent="createArtiste">
            <div class="mx-[25%]">
                 <div>
                <img class="flex justify-center mx-auto rounded-2xl" :src="imageData" />
              </div>
                <p>
                    <label for="name"  class="flex flex-col my-5">Votre Nom
                        <input type="text" id="name" name="name" v-model="artiste.nom" placeholder="  Henri "  class="my-3 border-2  placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400 text-black  rounded-lg h-8" >
                    </label>
                </p>
                <p>
                    <label for="forename"  class="flex flex-col my-5">Votre Prénom 
                        <input type="text" id="forename" name="forename"  placeholder="  Laporte "  class="my-3 border-2  placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400 text-black   rounded-lg h-8" v-model="artiste.prenom">
                    </label>
                </p>
                <p> 
                    <label for="number" class="flex gap-4 h-8 my-10">Age
                        <input type="text" id="age" name="age" class="rounded-lg"  v-model="artiste.age">
                    </label>
                </p>
                <p>
                    <label for="mail"  class="flex flex-col my-5">Votre mail 
                        <input type="text" id="mail" name="mail"  placeholder="  xxx@hmmm.com " required class="my-3 border-2  placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400 text-black   rounded-lg h-8" v-model="artiste.mailArtiste">
                    </label>
                </p>
                <p>
                    <label for="Description" class="flex flex-col my-5">Description
                        <textarea id="message" name="message"  placeholder="   Description" rows="7" required class="my-3 border-2  placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400  text-black  rounded-lg " v-model="artiste.description"></textarea>
                    </label>
                </p>
                <p>
                    <label for="Délai" class="flex flex-col my-5">Délai
                        <textarea id="message" name="message"  placeholder="   Délai" rows="7" required class="my-3 border-2  placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400  text-black  rounded-lg " v-model="artiste.délai"></textarea>
                    </label>
                </p>
            </div>
            <div class="flex flex-col">
                <div class="input-group-prepend">
                  <span class="text-xl ">Photo</span>
                </div>
                <div class="">
                  <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
                  <label class="text-base" for="file">Sélectionner l'image</label>
                </div>
              </div>
            <!-- <div class="mx-[10%]">
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
            </div> -->
             <div class="py-5">
                <div class="">
                  <span class="text-xl py-10">Categorie</span>
                </div>
                <select class="text-black" v-model="artiste.categorie">
                  <option selected disabled>Sélectionner un style</option>
                  <option v-for="categorieArtiste in listecategorieArtiste" :key="categorieArtiste.libellé">{{ categorieArtiste.libellé }}</option>
                </select>
              </div>
              <br />
            <div class="">
                <div class="">
                  <span class="text-xl">metier</span>
                </div>
                <select class="" v-model="artiste.role">
                  <option selected disabled>Sélectionner un style</option>
                  <option v-for="metier in listeMetier" :key="metier.libellé">{{ metier.libellé }}</option>
                </select>
              </div>
              <br />
            <div class="flex md:gap-10 gap-5  justify-center py-10 ">   
                    <button type="submit" class="bg-bleufonce md:px-8 px-4 py-4 ">
                        Créer
                    </button>
                    <button class="bg-bleufonce md:px-8 px-4 py-4" >
                        <router-link to="/choixArtiste" >Annuler</router-link>
                    </button>
                </div>
        </form>
    </section>
</template>

<script>
// import TypeDessins from "../components/TypeDessinsView.vue"
import Bouton from "../../components/BoutonView.vue"
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import { getStorage, ref, getDownloadURL, uploadString } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
    name: "App",
    components: { Bouton },
     name: "CreateArtisteView",
  data() {
    return {
      imageData: null,
      listecategorieArtiste: [],
      listeMetier:[],
      artiste: {
        nom: null,
        prenom: null,
        age:null,
        photo: null,
        mailArtiste: null,
        délai: null,
        categorie: null,
        style:null,
        description:null,
        role:null,
      },
    };
  },
  mounted() {
    this.getCategorieA();
    this.getMetier();
  },
  methods: {
    async getCategorieA() {
      const firestore = getFirestore();
      const dbCateA = collection(firestore, "categorieArtiste");
      const query = await getDocs(dbCateA);
      query.forEach((doc) => {
        let categorieArtiste = {
          id: doc.id,
          libellé: doc.data().libellé,
        };
        this.listecategorieArtiste.push(categorieArtiste);
        console.log("liste des categories", this.categorieArtiste);
      });
    },
    async getMetier() {
      const firestore = getFirestore();
      const dbMetier = collection(firestore, "metier");
      const query = await getDocs(dbMetier);
      query.forEach((doc) => {
        let metier = {
          id: doc.id,
          libellé: doc.data().libellé,
        };
        this.listeMetier.push(metier);
        console.log("liste des metiers", this.metier);
      });
    },


    previewImage: function (event) {
      // Miseàjour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.artiste.photo = this.file.name;
      // Reference to the DOM input element
      // Reference du fichieràprévisualiser
      var input = event.target;
      // On s'assure que l'onaau moins un fichieràlire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichieraété chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettreàjour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL(format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },
    async createArtiste() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'imageàuploader
      const refStorage = ref(storage, "artiste/" + this.artiste.photo);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploadedabase64 string");
        // Création du participant sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db, "artiste"), this.artiste);
      });
      // redirection sur la liste des participants
      this.$router.push("/choixArtiste");
    },
  },
};
</script>