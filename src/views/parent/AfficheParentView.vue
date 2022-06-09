<template>
    <h1 class="p-10 text-white text-5xl">Mon Profil</h1>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="afficheParent">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 style="color: white">Affichage du parent</h5>
        </div>

        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <div>
                <img class="preview img-fluid" :src="imageData" />
              </div>
            </div>

            <div class="col-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Nom</span>
                </div>
                <input class="form-control" placeholder="Nom de la personne" v-model="parent.nom" disabled />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Prénom</span>
                </div>
                <input class="form-control" placeholder="Prénom de la personne" v-model="parent.prenom" disabled />
              </div>
              <!-- <br /> -->
              <!-- <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Photo</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" disabled/>
                  <label class="custom-file-label" for="file">Sélectionner l'image</label>
                </div>
              </div> -->
              <br />              
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Mail</span>
                </div>
                <input class="form-control" placeholder="Mail de la personne" v-model="parent.mailParent" disabled  />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Nombre d'enfants</span>
                </div>
                <input class="form-control" placeholder="Nombre d'enfants ?" v-model="parent.nbrEnfantsParent" disabled />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Dans le cadre d'un don, nous devons svaoir quel moyen de paiement vous envisager d'utiliser ?</span>
                </div>
                 <input class="form-control" placeholder="Moyen Paiement?" v-model="parent.moyenP" disabled />
              </div>
              <br />
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button type="submit" class="btn btn-light float-left">Valider</button>
          <button class="btn btn-light float-right">
            <router-link to="/CreateArtiste">Annuler</router-link>
          </button>
        </div>
      </div>
    </form>
  </div>
    <div class="my-6 mx-10">
        <h2 class="text-4xl text-white">Biographie</h2>
        <div class="flex justify-between bg-bleutransparent2 p-3 rounded-xl mt-4 mr-40">
            <p class="">Je suis actuellement à la recherche d’un artiste spécialiste du pointillisme. J’aimerai qu’on reprenne mon
            dessin d’enfance.</p>
            <!-- <Modifier class="" /> -->
        </div>
    </div>
    <div class="my-10 mx-10">
        <h2 class="text-4xl text-white">Notifications</h2>
        <div class="text-2xl flex mt-8 ml-20 text-white">
            <p class="bg-red-700 rounded-full p-1">1</p>
            <p class="mx-4 p-1">Vous avez reçu un nouveau dessin</p>
        </div>
        <p class="bg-bleutransparent2 p-3 rounded-xl mr-40 mt-6">Florent Vacot a terminer votre dessin, il y a 2 jours. Vous pouvez dès à présent consulter votre dessin en
            cliquant sur ce bouton ci-dessous</p>

    </div>
    <!-- <bouton  Nom="Consulter mon dessin" /> -->
    <div class="mx-10 pb-36">
        <h2 class="text-4xl text-white mt-20">Faîtes un don</h2>
        <div>
            <h3 class="text-2xl text-white my-6 mx-6">L'objectif du don</h3>
            <p class="w-1/2 ml-16 text-white">Le don a pour but d’aider les artistes dans leur carrière ou futur carrière, de soutenir l’association
                “Unicef” qui lutte pour les enfants défavorisés et de nous aider à continuer de faire fonctionner Let’s
                Draw.</p>
                <!-- <img class="items-center m-auto my-10" src="../../public/img-squirrel/image_19.webp" alt="Logo Unicef"> -->
            
        </div>
        <div class="my-10">
            <h3 class="text-2xl text-white my-6 mx-6">Répartition du don</h3>
            <div class="flex justify-end mx-auto">
            <!-- <img class="w-1/3" src="../../public/img-squirrel/Diagramme-Don.webp" alt="Diagramme de la répartition du don"> -->
            </div>
        </div>
        <bouton class="mt-10 mr-40" Nom="Faire un don" />
    </div>
    
</template>
<script>
// import Modifier from "../components/icons/ModifierView.vue"
// import Bouton from "../components/BoutonView.vue"
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
  ref, //
  getDownloadURL,
  uploadBytes,
  uploadString,
  deleteObject,
  listAll,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
    name: "App",
    // components: { Modifier, Bouton },
      data() {
    return {
      parent: {
        nom: null,
        prenom: null,
        photo: null,
        mailParent: null,
        nbrEnfantsParent:null,
        moyenP:null,
      },
      refParent: null,
      photoActuelle: null,
      imgModifiée: false,
      imageData:null,
    };
  },
  mounted() {
    console.log("id parent", this.$route.params.id);
    this.getParent(this.$route.params.id);
  },
  methods: {
    async getParent(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "parent", id);
      this.refParent = await getDoc(docRef);
      if (this.refParent.exists()) {
        this.parent = this.refParent.data();
        this.photoActuelle = this.parent.photo;
      } else {
        this.console.log("parent inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "parent/" + this.parent.photo);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },
    previewImage: function (event) {
      // Miseàjour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.parent.photo = this.file.name;
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

    async afficheParent() {
      if (this.imgModifiée) {
        const storage = getStorage();
        let docRef = ref(storage, "parent/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "parent/" + this.parent.photo);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Upload a base64 string", this.parent.photo);
        });
      }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "parent", this.$route.params.id), this.parent);
      this.$router.push("/listeParent");
    },
  },

};
</script>