import React from "react"
import ReactDom from "react-dom";
import "../../Styles/UI/Modal.css"


const ModalItems = (props) => {
    return (<div>
        <div>{props.name}</div>
    </div>)
}

const Backdrop = () => {
    return <div className="backdrop"></div>
}

const ModalOverlay = (props) => {
    return (
        <div className="modal-overlay">
            <ModalItems name={"some"} />
            <div className="total-amt">
                <h2>Total Amount</h2>
                <h2>{`₹12`}</h2>
            </div>
            <div className="modal-btn-components">
                <button className="close-btn">close</button>
                <button className="order-btn">order</button>
            </div>
        </div>
    )
}

const Modal = (props) => {
    return (<>
        {ReactDom.createPortal(<Backdrop />, document.getElementById("cart-backdrop"))}
        {ReactDom.createPortal(<ModalOverlay />, document.getElementById("cart-modal"))}
    </>)
}

export default Modal