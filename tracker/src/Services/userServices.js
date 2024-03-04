import { updateProfile } from "firebase/auth";
import { auth } from "../firebase.setup";

async function getUserDetails() {
    try {
        const user = auth.currentUser;
        const userDetails = {
            id: "",
            name: "",
            email: "",
            image: "",
        }
        if (user !== null) {
            const uid = user.uid;
            userDetails.id = uid;
            userDetails.name = user.displayName;
            userDetails.email = user.email;
            userDetails.image = user.photoURL;
        }
        return {
            data: {
                user: userDetails
            }
        };
    } catch (error) {
        console.log(error);
        return { data: null }
    }
}

async function updateUserDetails(details) {
    try {
        await updateProfile(auth.currentUser, {
            displayName: details.name, photoURL: details.image
        })
        return { data: { status: true } }
    } catch (error) {
        console.log(error);
        return { data: { status: false } }
    }
}

const userServices = {
    get: getUserDetails,
    put: updateUserDetails
}

export default userServices;