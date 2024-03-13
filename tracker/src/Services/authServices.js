import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase.setup";

async function signUpUser(user) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
        await sendEmailVerification(auth.currentUser);
        const userData = userCredential.user;
        const token = await userData.getIdToken();
        return { data: { email: userData.email, token } };
    } catch (error) {
        console.error(error);
        alert(error.message);
        return { data: null };
    }
}

async function loginUser(user) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
        if (!userCredential.user.emailVerified) {
            throw new Error("email is not verified yet");
        }
        const userData = userCredential.user;
        const token = await userData.getIdToken();
        return { data: { email: userData.email, token } };
    } catch (error) {
        console.error(error);
        alert(error.message);
        return { data: null };
    }
}

async function resetUser(email) {
    try {
        await sendPasswordResetEmail(auth, email);

        return { data: { message: "Successfully sent reset password mail" } };
    } catch (error) {
        if (error.code === "auth/user-not-found") {
            return { data: { message: "Email does not exist" } };
        }
        console.error(error);
        return { data: { message: "Failed to send reset password mail" } };
    }
}


const authService = {
    signUp: signUpUser,
    login: loginUser,
    reset: resetUser
}

export default authService;