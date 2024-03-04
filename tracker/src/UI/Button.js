const Button = (props) => {
    return (
        <div className={props.className}>
            <button
                className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
                type={props.type}
                onClick={props?.onClick}
                disabled={props?.disabled || false}
            >
                {props.children}
            </button>
        </div>
    )
}

export default Button;