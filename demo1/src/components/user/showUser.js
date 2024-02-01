const ShowUser = ({ user }) => {
    return (
        <li className="user">
            <div className="content">{user.name}</div>
            <div className="content">{user.age}</div>
        </li>)
}

export default ShowUser;