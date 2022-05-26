import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBVXupGxh3t_GF-FJqEq7pTcIM1OS6Ds1M",
    authDomain: "projet-bdd-letsdraw.firebaseapp.com",
    projectId: "projet-bdd-letsdraw",
    storageBucket: "projet-bdd-letsdraw.appspot.com",
    messagingSenderId: "16362354414",
    appId: "1:16362354414:web:21ea24c04bc90ff8dae5ff"
  };

  // Initialize Firebase
  const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)
app.use(router)
app.mount('#app')