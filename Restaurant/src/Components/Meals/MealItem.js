const MealItem = (props) => {
    return (
        <li className="meal-item">
            <h3 className="item-name">{props.name}</h3>
            <p className="item-desc">{props.description}</p>
            <div className="item-price">{`₹${props.price}`}</div>
        </li>
    )
}

export default MealItem;