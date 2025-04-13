import { signOut } from "firebase/auth";

const logout = async () => {
    try {
        await signOut(auth);
        console.log("User signed out");
    } catch (error) {
        console.error("Logout error:", error.message);
    }
};