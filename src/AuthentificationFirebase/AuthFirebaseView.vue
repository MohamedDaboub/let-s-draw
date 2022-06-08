<template>
    
    <h5>Firebase - Se connecter</h5>
    <form @submit.prevent="onCnx()">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-dark">Email :</button>
        </div>
        <input class="form-control" type="text" v-model="user.email" required />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-dark">Mot de passe :</button>
        </div>
        <input
          class="form-control"
          type="password"
          v-model="user.password"
          required
        />
      </div>
      <div class="alert alert-warning text-center mb-3" v-if="message != null">
        {{ message }}
      </div>
      <div>
        <button class="float-left" @click="onDcnx()">Deconnexion</button>
        <button variant="dark" class="float-right" type="submit">
          Connexion
        </button>
      </div>
    </form>

</template>

  
          
<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      message: null,
    };
  },

  mounted() {
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "user déjà connecté" + this.user.email;
    } else {
      this.message = "user non connecté" + this.user.email;
    }
  },
  methods: {
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          console.log("user connecté", response.user);
          (this.user = response.user), (this.message = "User connecté : " + this.user.email);
        })
        .catch((error) => {
          console.log("user deconnecté", error);
          this.message = "Erreur d'authentification";
        });
    },
    onDncx() {
      signOut(getAuth())
        .then((response) => {
          this.user = getAuth().currentUser;
          this.user = {
            email: null,
            password: null,
          };
          console.log("user deconnecté", this.user);
          this.message = "user non deconnecté";
        })
        .catch((error) => {
          console.log("erreur deconnexion", this.error);
        });
    },
  },
};
</script>
    
<style>
.marge {
  margin-top: 3rem;
}
.center {
  text-align: center;
}
.title {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #34495e;
}
h4 {
  font-weight: bold;
}
</style>