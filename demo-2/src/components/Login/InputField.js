import { forwardRef, useImperativeHandle, useRef } from "react";

//with only forward ref parent make ref to this child
const Input = forwardRef((props, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();       //we want to focus on input field
    }

    //ref to make reference and what function the parent can use from it
    useImperativeHandle(ref, () => {
        return { focus: activate }      //focus that parent can use
    })

    return (
        <div className={`${props.style.control} ${props.valid !== false ? props.style.invalid : ''}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
})

export default Input;