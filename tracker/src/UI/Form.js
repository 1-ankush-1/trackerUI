const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit} className={props?.className + " bg-gray-100 p-4 rounded-lg"}>
            {props.children}
        </form>
    )
}

export default Form;