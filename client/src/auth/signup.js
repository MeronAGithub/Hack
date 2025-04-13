import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Signed up user:", userCredential.user);
    } catch (error) {
        console.error("Signup error:", error.message);
    }
};