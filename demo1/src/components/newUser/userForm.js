import { useState } from "react";
import Dialog from "../warning/dialog";

const errors = [
    { type: "Empty input Field", message: "please enter a valid name and age(non-empty value)" },
    { type: "Invalid input", message: "please enter a valid age (> 0)" },
]
const UserForm = ({ onChangeUser }) => {
    const [showDialog, setshowDialog] = useState(false);

    const handleShowDialog = () => {
        setshowDialog(!showDialog);
    }

    let dialog = <Dialog onChangeDialog={handleShowDialog} head={errors[0].type} content={errors[0].message} />;

    const [user, setUser] = useState({
        name: "",
        age: ""
    })

    const handleUserOnChange = (e) => {
        return setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleUserInput = (e) => {
        e.preventDefault();
        //error messages
        if (user.name === "" || user.age === "") {
            handleShowDialog();
            dialog = <Dialog onChangeDialog={handleShowDialog} head={errors[0].type} content={errors[0].message} />
            return;
        } else if (Number(user.age) <= 0) {
            handleShowDialog();
            dialog = <Dialog onChangeDialog={handleShowDialog} head={errors[1].type} content={errors[1].message} />
            return;
        }

        //add new user
        onChangeUser(user);
        //reset form
        setUser({
            name: "",
            age: ""
        });
    };

    return (
        <>
            <form onSubmit={handleUserInput}>
                <label htmlFor="name">Username</label>
                <input id="name" name="name" type="text" value={user.name} onChange={handleUserOnChange} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" name="age" type="number" value={user.age} onChange={handleUserOnChange} max={31} />
                <button type="submit">Add User</button>
            </form>
            {showDialog && dialog}
        </>
    );
}

export default UserForm;