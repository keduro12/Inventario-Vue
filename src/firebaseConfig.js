import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = ({
    apiKey: "AIzaSyDTdXLF16gur5ineQGR4pPP1c9PHedExk0",
    authDomain: "inventario-keduro.firebaseapp.com",
    projectId: "inventario-keduro",
    storageBucket: "inventario-keduro.appspot.com",
    messagingSenderId: "800456037205",
    appId: "1:800456037205:web:edab53b74b7c669ac915dc"
});

const app = initializeApp(firebaseConfig); 

const auth = getAuth(app);

export {auth};