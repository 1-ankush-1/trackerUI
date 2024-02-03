import { useState, useRef } from "react";
import Dialog from "../warning/dialog";

const errors = [
    { type: "Empty input Field", message: "please enter a valid name and age(non-empty value)" },
    { type: "Invalid input", message: "please enter a valid age (> 0)" },
]
const UserForm = ({ onChangeUser }) => {
    const [showDialog, setshowDialog] = useState(false);

    const clgNameRef = useRef();
    const nameRef = useRef();
    const ageRef = useRef();

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
        if (nameRef.current.value === "" || ageRef.current.value === "" || clgNameRef.current.value === "") {
            handleShowDialog();
            dialog = <Dialog onChangeDialog={handleShowDialog} head={errors[0].type} content={errors[0].message} />
            return;
        } else if (Number(ageRef.current.value) <= 0) {
            handleShowDialog();
            dialog = <Dialog onChangeDialog={handleShowDialog} head={errors[1].type} content={errors[1].message} />
            return;
        }
        const user = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            collegeName: clgNameRef.current.value
        }
        //add new user
        onChangeUser(user);
        //reset form
        nameRef.current.value = ""
        ageRef.current.value = ""
        clgNameRef.current.value = ""
    };

    return (
        <>
            <form onSubmit={handleUserInput}>
                <label htmlFor="name">Username</label>
                <input id="name" name="name" type="text" ref={nameRef} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" name="age" type="number" max={31} ref={ageRef} />
                <label htmlFor="clgname">College Name</label>
                <input id="clgname" name="collegeName" type="text" ref={clgNameRef} />
                <button type="submit">Add User</button>
            </form>
            {showDialog && dialog}
        </>
    );
}

export default UserForm;