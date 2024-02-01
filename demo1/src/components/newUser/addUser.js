import UserForm from "./userForm";

const AddUser = ({ onChangeUser }) => {

    return (
        <UserForm onChangeUser={onChangeUser} />
    )
}

export default AddUser;