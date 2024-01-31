import "../../styles/ui/card.css"

const Card = (props) => {
    const classes = 'cart ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>)
}

export default Card;