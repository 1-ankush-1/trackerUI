import "../../styles/warning/dialog.css"

const Dialog = ({ head, content, onChangeDialog }) => {
    return (
        <div className="dialog">
            <div className="dialog-head">
                <h1>{head}</h1>
            </div>
            <div className="dialog-body">
                <div className="dialog-content">
                    <p>{content}</p>
                </div>
                <div className="dialog-action">
                    <button onClick={onChangeDialog}>Okay</button>
                </div>
            </div>
        </div>)
}

export default Dialog;