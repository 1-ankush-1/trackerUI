import React, { useEffect, useState } from "react"
import userServices from "../Services/userServices";

export const UserContext = React.createContext({
    user: {},
    onUpdate: () => { }
});


const UserContextProvider = (props) => {
    const [userProfile, setUserProfile] = useState({
        id: "",
        name: "",
        email: "",
        image: "",
    })

    async function getIntialUserDetails() {
        const response = await userServices.get();
        setUserProfile(prev => {
            return { ...prev, ...response.data.user };
        });
    }

    useEffect(() => {
        getIntialUserDetails();
        console.log("called");
    }, []);

    const handleProfileUpdate = async (user) => {
        const response = await userServices.put(user);
        if (response.status) {
            alert("updated successfully");
            setUserProfile(prev => {
                return { ...prev, ...user };
            });
        } else {
            alert("failed to update user");
        }
    }

    return (
        <UserContext.Provider value={{ user: userProfile, onUpdate: handleProfileUpdate }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;