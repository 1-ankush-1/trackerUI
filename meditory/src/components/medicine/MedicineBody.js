const MedicineBody = (props) => {
    return (
        <div className="medicine-body">
            <h2>{props.name}</h2>
            <p>{`₹${props.price}`}</p>
            <small>{props.description}</small>
        </div>
    )
}

export default MedicineBody;