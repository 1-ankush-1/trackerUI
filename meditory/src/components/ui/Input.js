import "../../style/ui/input.css"
const Input = (props) => {
    return (
        <div className="input-component">
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} type={props.type} name={props.name} value={props.value} onChange={props.onInputChange} min={props?.min} max={props?.max}/>
        </div>
    )
}

export default Input;