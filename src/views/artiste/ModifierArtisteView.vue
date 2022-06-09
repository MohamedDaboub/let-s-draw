<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="updateArtiste">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 class="text-center py-10 text-2xl text-white font-chivo" >Mise à jour compte artiste</h5>
        </div>

        <div class="">
          <div class="grid grid-cols-1">
            <div class="">
              <div class="flex justify-center my-10">
                <img class="w-1/4 rounded-full" :src="imageData" />
              </div>
            </div>

            <div class="grid grid-cols-6 mx-[15%] text-base">
              <div class="">
                <div class="">
                  <span class="">Nom</span>
                </div>
                <input class="form-control" placeholder="Nom de la personne" v-model="artiste.nom" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Prénom</span>
                </div>
                <input class="form-control" placeholder="Prénom de la personne" v-model="artiste.prenom" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Age</span>
                </div>
                <input class="form-control" placeholder="Age" v-model="artiste.age" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Photo</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
                  <label class="custom-file-label" for="file">Sélectionner l'image</label>
                </div>
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">mail</span>
                </div>
                <input class="form-control" placeholder="Mail de la personne" v-model="artiste.mailArtiste" required />
              </div>
              <!-- <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Date naissance</span>
                                </div>
                                <input 
                                    type="date"
                                    class="form-control"
                                    v-model="participant.naissance"
                                    format="dd//mm/yyyy" 
                                    required />                    
                            </div> -->
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Délai</span>
                </div>
                <input class="form-control" placeholder="Délai" v-model="artiste.délai" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">description</span>
                </div>
                <input class="form-control" placeholder="Délai" v-model="artiste.description" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Categorie</span>
                </div>
                <select class="custom-select" v-model="artiste.categorie">
                  <option selected disabled>Sélectionner un style</option>
                  <option v-for="categorieArtiste in listecategorieArtiste" :key="categorieArtiste.libellé">
                    {{ categorieArtiste.libellé }}
                  </option>
                </select>
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Metier</span>
                </div>
                <select class="custom-select" v-model="artiste.role">
                  <option selected disabled>Sélectionner un metier</option>
                  <option v-for="metier in listeMetier" :key="metier.libellé">{{ metier.libellé }}</option>
                </select>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div class="flex md:gap-10 gap-5  justify-center py-10 text-white">   
                    <button type="submit" class="bg-bleufonce md:px-8 px-4 py-4">
                        Modifier
                    </button>
                    <button class="bg-bleufonce md:px-8 px-4 py-4" >
                        <router-link to="/choixArtiste" >Annuler</router-link>
                    </button>
                </div>
    </form>
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import {
  getStorage,
  ref, //
  getDownloadURL,
  uploadString,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "UpdateView",
  data() {
    return {
      imageData: null,
      listecategorieArtiste: [],
      listeMetier: [],
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
      },
      refArtiste: null,
      imgModifiée: false,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id artiste", this.$route.params.id);
    this.getArtiste(this.$route.params.id);
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
      // Reference du fichieràprévisualise
      //Verifie l'image est modifiée ou non
      this.imgModifiée = true;
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
    async getArtiste(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", id);
      this.refArtiste = await getDoc(docRef);
      if (this.refArtiste.exists()) {
        this.artiste = this.refArtiste.data();
        this.photoActuelle = this.artiste.photo;
      } else {
        this.console.log("Artiste inexistant");
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

    async updateArtiste() {
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