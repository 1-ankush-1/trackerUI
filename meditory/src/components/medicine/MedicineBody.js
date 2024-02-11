const MedicineBody = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <div>
                <span>{props.price}</span>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default MedicineBody;