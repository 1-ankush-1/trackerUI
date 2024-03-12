import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../firebase.setup";

async function getUserDetails() {
    try {
        const userDetails = {
            id: "",
            name: "",
            email: "",
            image: "",
        }
        //wait for the getting data(onAuthStateChanged - used to get state of current user even page is refreshed)
        await new Promise((resolve, reject) => {
            onAuthStateChanged(auth, (user) => {
                if (user !== null) {
                    const uid = user.uid;
                    userDetails.id = uid;
                    userDetails.name = user.displayName;
                    userDetails.email = user.email;
                    userDetails.image = user.photoURL;
                }
                resolve();
            });
        });
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
        // console.log("updating");
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