import Vue from 'vue'
import App from './App.vue'

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVs1SP7nBmMvf5RMAfF_AZpqKaOabD2_c",
  authDomain: "book-list-vue2.firebaseapp.com",
  projectId: "book-list-vue2",
  storageBucket: "book-list-vue2.appspot.com",
  messagingSenderId: "834789576019",
  appId: "1:834789576019:web:e987311894c02f0d3be5a6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
