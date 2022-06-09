<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="afficheArtiste">
      <div class="">
        <div class="">
          <h5 class="py-10 text-center font-chivo text-2xl text-white">Affichage compte artiste</h5>
        </div>

        <div class="">
          <div class="grid grid-cols-1">
            <div class="">
              <div class="my-10 flex justify-center">
                <img class="h-1/6 w-1/4 rounded-2xl" :src="imageData" />
              </div>
            </div>

            <div class="mx-[15%] grid grid-cols-6 text-base">
              <div class="">
                <div class="">
                  <span class="">Nom</span>
                </div>
                <input class="form-control" placeholder="Nom de la personne" v-model="artiste.nom" required disabled />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Prénom</span>
                </div>
                <input class="form-control" placeholder="Prénom de la personne" v-model="artiste.prenom" required disabled />
              </div>
              <br />
              <div class="">
                <div class="">
                  <span class="">Age</span>
                </div>
                <input class="" placeholder="Age" v-model="artiste.age" required disabled />
              </div>
              <!-- <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Photo</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" disabled />
                  <label class="custom-file-label" for="file">Sélectionner l'image</label>
                </div>
              </div> -->
              <br />
              <div class="">
                <div class="">
                  <span class="">Mail</span>
                </div>
                <input class="" placeholder="Mail de la personne" v-model="artiste.mailArtiste" required disabled />
              </div>
              <br />
              <div class="">
                <div class="">
                  <span class="">Délai</span>
                </div>
                <input class="" placeholder="Délai" v-model="artiste.délai" required disabled />
              </div>
              <br />
              <div class="">
                <div class="">
                  <span class="">description</span>
                </div>
                <input class="" placeholder="Délai" v-model="artiste.description" required disabled />
              </div>
              <br />
              <div class="">
                <div class="">
                  <span class="">Categorie</span>
                </div>
                <input class="" placeholder="Délai" v-model="artiste.categorie" required disabled />
              </div>
              <br />
              <div class="">
                <div class="">
                  <span class="">Métier</span>
                </div>
                <input class="" placeholder="Délai" v-model="artiste.role" required disabled />
              </div>
              <br />
              <div class="">
                <div class="">
                  <span class="">Nom utilisateur</span>
                </div>
                <input class="" placeholder="nom user" v-model="artiste.login" required disabled />
              </div>
              <br />
              <div class="">
                <div class="">
                  <span class="">Métier</span>
                </div>
                <input class="" placeholder="mot de passe" v-model="artiste.password" required disabled />
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-5 py-10 text-white md:gap-10">
        <button type="submit" class="bg-bleufonce px-4 py-4 md:px-8">Valider</button>
        <button class="bg-bleufonce px-4 py-4 md:px-8">
          <router-link to="/choixArtiste">Retour</router-link>
        </button>
      </div>
    </form>
  </div>
  <!-- comme je ne comprends pas comment faire un import d'un élément seul avec firebase malgré le lien id artiste qui est crée, ce sera une grossière liste sans lien id qui sera diffusé... -->
  <h2 class="my-10 text-center font-chivo text-2xl">Mes derniers dessins :</h2>
  <div class="flex flex-col rounded-xl bg-noir" v-for="dessin in listeDessin" :key="dessin.id">
    <img class="h-full w-full rounded-t-lg" :src="dessin.photo" :alt="dessin.titre" />
    <div class="mx-4 flex text-white">
      <p class="my-6 text-2xl font-bold">{{ dessin.titre }}</p>
    </div>
  </div>

  <!-- Composant bouton envoyer -->
  <button class="mx-auto flex justify-center py-10 text-white">
    <RouterLink to="" class="bg-bleufonce px-4 py-4 md:px-8">Commence un chat </RouterLink>
  </button>
</template>
<script>
import TypeDessins from "../../components/TypeDessinsView.vue";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  uploadString,
  deleteObject,
  listAll,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "App",
  components: { TypeDessins },
  data() {
    return {
      imageData: null,
      artiste: {
        nom: null,
        prenom: null,
        age: null,
        photo: null,
        mailArtiste: null,
        délai: null,
        categorie: null,
        style: null,
        description: null,
        role: null,
        login: null,
        password: null,
        titreDessin: null,
        photoDessin: null,
      },
      refArtiste: null,
      photoActuelle: null,
      photoCard: null,
      listecategorieArtiste: [],
      listeMetier: [],
      listeDessin: [],
    };
  },
  mounted() {
    console.log("id artiste", this.$route.params.id);
    this.getArtiste(this.$route.params.id);
    this.getCategorieA();
    this.getMetier();
    this.getDessin();
  },
  methods: {
    async getDessin() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données(collection)document participant
      const dbDessin = collection(firestore, "dessin");
      // Liste des participants triés sur leur nom
      const q = query(dbDessin, orderBy("titre", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeDessin = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Récupération des images de chaque participant
        // parcours de la liste

        this.listeDessin.forEach(function (dessin) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "dessin/" + dessin.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              dessin.photo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
    async getArtiste(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", id);
      this.refArtiste = await getDoc(docRef);
      if (this.refArtiste.exists()) {
        this.artiste = this.refArtiste.data();
        this.photoActuelle = this.artiste.photo;
      } else {
        this.console.log("artiste inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "artiste/" + this.artiste.photo);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },
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
    async afficheArtiste() {
      if (this.imgModifiée) {
        const storage = getStorage();
        let docRef = ref(storage, "artiste/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "artiste/" + this.artiste.photo);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Upload a base64 string", this.artiste.photo);
        });
      }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "artiste", this.$route.params.id), this.artiste);
      this.$router.push("/choixArtiste");
    },
  },
};
</script>