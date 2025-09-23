// Importa as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDwoSLJvsDzw0nkXCeaSWotK4L2yr7WAus",
    authDomain: "swii-327e1.firebaseapp.com",
    projectId: "swii-327e1",
    storageBucket: "swii-327e1.firebasestorage.app",
    messagingSenderId: "469709077977",
    appId: "1:469709077977:web:757fb9c556af9044b8edc8",
    measurementId: "G-Z069FHBLJR"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); //configura o firebase authentication
const db = getFirestore(app); //configura o firestore

//monitora o estado de autenticação do usuário
onAuthStateChanged(auth, (user) => {
    //busca o id do usuário autenticado salvo no localStorage
    const loggedInUserId = localStorage.getItem('loggedInUserId');

    //se o ID estiver no localStorage, tenta obter os dados do Firestore
    if (loggedInUserId) {
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId); //referência ao documento do usuário no firestore

        getDoc(docRef) //Busca o documento
            .then((docSnap) => {
                //se o documento existir, exibe os dados na interface
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    document.getElementById('loggedUserFName').innerText = userData.firstName || "";
                    document.getElementById('loggedUserLName').innerText = userData.lastName || "";
                    document.getElementById('loggedUserEmail').innerText = userData.email || "";
                } else {
                    console.log("ID não encontrado no Documento");
                }
            })
            .catch((error) => {
                console.log("documento não encontrado");
            });
    } else {
        console.log("ID de usuário não encontrado no localStorage");
    }
});

//Lógica de Logout
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('loggedInUserId'); //remove o ID do LocalStorage
    signOut(auth) //realiza logout
        .then(() => {
            window.location.href = 'index.html'; //redireciona para a página de login
        })
        .catch((error) => {
            console.error('Error Signing out:', error);
        });
});