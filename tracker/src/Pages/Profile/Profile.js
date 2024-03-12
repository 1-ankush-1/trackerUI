import { useContext, useEffect, useRef, useState } from "react";
import Input from "../../UI/Input";
import Form from "../../UI/Form";
import Button from "../../UI/Button";
import { UserContext } from "../../Store/userStore";

const Profile = () => {
    const userCtx = useContext(UserContext);
    const isLoading = useRef(false);
    const [userProfileInput, setUserProfileInput] = useState({
        name: "",
        image: "",
    });

    useEffect(() => {
        console.log("called");
        if (userCtx.user.id === "") {
            isLoading.current = true;
        } else {
            isLoading.current = false;
            setUserProfileInput({
                name: userCtx.user.name || "",
                image: userCtx.user.image || "",
            });
        }
    }, [userCtx.user]);

    if (isLoading.current) {
        return <h1>Loading...</h1>;
    }

    const handleProfileInputChange = (event) => {
        setUserProfileInput(prev => {
            return { ...prev, [event.target.name]: event.target.value }
        })
    }

    const handleProfileUpdateForm = async (event) => {
        event.preventDefault();
        await userCtx.onUpdate(userProfileInput)
    }

    return (
        <div>
            <Form onSubmit={handleProfileUpdateForm}>
                <div>
                    <h2>Contact Detail</h2>
                </div>
                <div>
                    <Input
                        label="name"
                        id="name"
                        name="name"
                        placeholder="enter user name"
                        value={userProfileInput.name}
                        onChange={handleProfileInputChange}
                    />
                    <Input
                        label="Image URL"
                        id="image"
                        name="image"
                        placeholder="enter user image url"
                        value={userProfileInput.image}
                        onChange={handleProfileInputChange}
                    />
                </div>
                <Button type="submit">Update</Button>
            </Form>
        </div>
    )
}

export default Profile;