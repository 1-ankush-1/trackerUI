import { useState } from "react";

const UserForm = () => {
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
        setUser({
            name: "",
            age: ""
        })
    }

    return (
        <form onSubmit={handleUserInput}>
            <label htmlFor="name"></label>
            <input id="name" name="name" type="text" value={user.name} onChange={handleUserOnChange}>Username</input>
            <label htmlFor="age"></label>
            <input id="age" name="age" type="text" value={user.age} onChange={handleUserOnChange} max={31}>Age (Years)</input>
            <button type="submit">Add User</button>
        </form>)
}

export default UserForm;