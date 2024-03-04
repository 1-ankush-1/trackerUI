import { createUserWithEmailAndPassword, signInWithCredential } from "firebase/auth"
import { auth } from "../firebase.setup";

async function signUpUser(user) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
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
        const userCredential = await signInWithCredential(auth, user.email, user.password);
        const userData = userCredential.user;
        const token = await userData.getIdToken();
        return { data: { email: userData.email, token } };
    } catch (error) {
        console.error(error);
        alert(error.message);
        return { data: null };
    }
}


const authService = {
    signUp: signUpUser,
    login: loginUser
}

export default authService;