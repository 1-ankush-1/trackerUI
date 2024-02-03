import "../../styles/warning/dialog.css"
import ReactDOM from "react-dom"

const Backdrop = props => {
    return <div className="backdrop" onClick={props.onConfirm}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className="dialog">
            <div className="dialog-head">
                <h1>{props.head}</h1>
            </div>
            <div className="dialog-body">
                <div className="dialog-content">
                    <p>{props.content}</p>
                </div>
                <div className="dialog-action">
                    <button onClick={props.onConfirm}>Okay</button>
                </div>
            </div>
        </div>)
}

const Dialog = (props) => {
    return (
        <>
            {/**createPortal(element,place where to render) */}
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onChangeDialog} />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay head={props.head} content={props.content} onConfirm={props.onChangeDialog} />, document.getElementById("overlay-root"))}
        </>
    )
}

export default Dialog;