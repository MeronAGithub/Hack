import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcnOFJq2--JAXFo9XZ8SRugmAqt0jy4CE",
    authDomain: "bizlingo-7d79e.firebaseapp.com",
    projectId: "bizlingo-7d79e",
    storageBucket: "bizlingo-7d79e.firebasestorage.app",
    messagingSenderId: "460507432174",
    appId: "1:460507432174:web:0e782c183e508a0bf25fff",
    measurementId: "G-HHEQCPEDC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAcnOFJq2--JAXFo9XZ8SRugmAqt0jy4CE",
//     authDomain: "bizlingo-7d79e.firebaseapp.com",
//     projectId: "bizlingo-7d79e",
//     storageBucket: "bizlingo-7d79e.firebasestorage.app",
//     messagingSenderId: "460507432174",
//     appId: "1:460507432174:web:0e782c183e508a0bf25fff",
//     measurementId: "G-HHEQCPEDC8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);