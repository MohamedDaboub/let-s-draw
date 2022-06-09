<template>
  <h1 class="p-10 text-center text-3xl text-white">Mon Profil</h1>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="afficheParent">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 class="py-10 text-center font-chivo text-2xl text-white">Affichage du parent</h5>
        </div>

        <div class="card-body">
          <div class="grid grid-cols-1">
            <div class="">
              <div class="my-10 flex justify-center">
                <img class="w-1/4 rounded-2xl" :src="imageData" />
              </div>
            </div>

            <div class="mx-[15%] grid grid-cols-6 text-base">
              <div class="">
                <div class="">
                  <span class="input-group-text">Nom</span>
                </div>
                <input class="form-control pl-2 rounded-sm" placeholder="Nom de la personne" v-model="parent.nom" disabled />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Prénom</span>
                </div>
                <input class="form-control pl-2 rounded-sm" placeholder="Prénom de la personne" v-model="parent.prenom" disabled />
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
                <input class="form-control pl-2 rounded-sm" placeholder="Mail de la personne" v-model="parent.mailParent" disabled />
              </div>
              <br />
              <div class="input-group mt-4">
                <div class="">
                  <span class="input-group-text">Nombre d'enfants</span>
                </div>
                <input class="form-control pl-2 rounded-sm" placeholder="Nombre d'enfants ?" v-model="parent.nbrEnfantsParent" disabled />
              </div>
              <br />
              <div class="input-group mt-4">
                <div class="">
                  <span>Moyen Paiement</span>
                </div>
                <input class="form-control pl-2 rounded-sm" placeholder="Moyen Paiement ?" v-model="parent.moyenP" disabled />
              </div>
              <br />
            </div>
          </div>
        </div>
        <div class="py-10 text-center text-white">
          <span>Dans le cadre d'un don, nous devons svaoir quel moyen de paiement vous envisager d'utiliser ?</span>
        </div>
        <div class="flex justify-center gap-5">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Nom Utilisateur</span>
          </div>
          <input class="form-control pl-2 rounded-sm" placeholder="Nom d'utilisateur" v-model="parent.login" disabled />
        </div>
        <br />
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Mot de passe</span>
          </div>
          <input class="form-control pl-2 rounded-sm" placeholder="Mot de passe" v-model="parent.password" disabled />
        </div>
        <br />
        </div>
        <div class="flex justify-center gap-5 py-10 text-white md:gap-10">
          <button type="submit" class="bg-bleufonce px-4 py-4 md:px-8 hover:bg-blue-600">Valider</button>
          <button class="py-4t bg-bleufonce px-4 md:px-8 hover:bg-blue-600">
            <router-link to="/listeParent">Annuler</router-link>
          </button>
        </div>
      </div>
    </form>
  </div>
  <div class="my-6 mx-10">
    <h2 class="font-chivo text-4xl text-white">Biographie</h2>
    <div class="mt-4 mr-40 flex justify-between rounded-xl bg-bleutransparent2 p-3">
      <p class="">
        Je suis actuellement à la recherche d’un artiste spécialiste du pointillisme. J’aimerai qu’on reprenne mon dessin d’enfance.
      </p>
    </div>
  </div>
  <div class="my-10 mx-10">
    <h2 class="font-chivo text-4xl text-white">Notifications</h2>
    <div class="mt-8 ml-20 flex text-2xl text-white">
      <p class="rounded-full bg-red-700 p-1">1</p>
      <p class="mx-4 p-1">Vous avez reçu un nouveau dessin</p>
    </div>
    <p class="mr-40 mt-6 rounded-xl bg-bleutransparent2 p-3">
      Florent Vacot a terminer votre dessin, il y a 2 jours. Vous pouvez dès à présent consulter votre dessin en cliquant sur ce bouton
      ci-dessous
    </p>
  </div>
  <!-- <bouton  Nom="Consulter mon dessin" /> -->
  <div class="mx-10 py-10">
    <h2 class="my-20 font-chivo text-3xl text-white">Faîtes un don</h2>
    <div>
      <h3 class="my-6 mx-6 font-chivo text-2xl text-white">L'objectif du don</h3>
      <p class="mx-10 w-1/2 text-white">
        Le don a pour but d’aider les artistes dans leur carrière ou futur carrière, de soutenir l’association “Unicef” qui lutte pour les
        enfants défavorisés et de nous aider à continuer de faire fonctionner Let’s Draw.
      </p>
      <img class="m-auto my-10 items-center" src="../../../public/img-squirrel/image-19.webp" alt="Logo Unicef" />
    </div>
    <div class="my-10">
      <h3 class="my-6 mx-6 font-chivo text-2xl text-white">Répartition du don</h3>
      <div class="mx-auto flex justify-end">
        <img class="w-1/3" src="../../../public/img-squirrel/Diagramme-Don.webp" alt="Diagramme de la répartition du don" />
      </div>
    </div>
    <div class="py-10 justify-center flex">
      <RouterLink class="text-white bg-bleufonce px-8 py-4 hover:bg-blue-600" to="/Don">Faire un don</RouterLink>
    </div>
  </div>
</template>
<script>
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
  components: {},
  data() {
    return {
      parent: {
        nom: null,
        prenom: null,
        photo: null,
        mailParent: null,
        nbrEnfantsParent: null,
        moyenP: null,
        login: null,
        password: null,
      },
      refParent: null,
      photoActuelle: null,
      imgModifiée: false,
      imageData: null,
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