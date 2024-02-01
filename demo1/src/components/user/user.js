import ShowUser from "./showUser";

const User = ({ users }) => {
    return (
        <ul className="users">
            {users.map((user) =>
                <ShowUser
                    key={user.id}
                    user={user}
                />
            )
            }
        </ul>
    )
}

export default User;