import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import { initializeApp } from "firebase/app";


const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXF0l79aUB4AeOGojNTuuahxiwvvmr_sM",
  authDomain: "week7-chunhim.firebaseapp.com",
  projectId: "week7-chunhim",
  storageBucket: "week7-chunhim.firebasestorage.app",
  messagingSenderId: "486450460419",
  appId: "1:486450460419:web:a1f5fb8e017a3c5d705b36"
};

// Initialize Firebase
initializeApp(firebaseConfig);