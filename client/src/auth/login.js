import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged in user:", userCredential.user);
    } catch (error) {
        console.error("Login error:", error.message);
    }
};
