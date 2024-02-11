import React from "react"
import ReactDom from "react-dom";
import "../../Styles/UI/Modal.css"

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClose}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className="modal-overlay">
            {props.children}
        </div>
    )
}

const Modal = (props) => {
    return (
        <>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById("cart-backdrop"))}
            {ReactDom.createPortal(<ModalOverlay >{props.children}</ModalOverlay>, document.getElementById("cart-modal"))}
        </>
    )
}

export default Modal