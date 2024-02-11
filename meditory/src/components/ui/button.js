import "../../style/ui/button.css"
const Button = (props) => {
    return (
        <button type={props.type} className="button-component">{props.value}</button>
    )
}
export default Button;