const Input = (props) => {
    return (
        <div className="mb-4">
            <label htmlFor={props.id} className="block text-gray-700 text-sm font-bold mb-2">{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required={props?.required || false}
                placeholder={props?.placeholder}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    )
}

export default Input;