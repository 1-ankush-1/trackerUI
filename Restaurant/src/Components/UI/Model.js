import React from "react"

const Backdrop = (props) => {
    return <></>
}

const ModalOverlay = () => {
    return <></>
}

const Modal = (props) => {
    return (<>
        {React.createPortal(<Backdrop />, document.getElementById("cart-backdrop"))}
        {React.createPortal(<ModalOverlay />, document.getElementById("cart-modal"))}
    </>)
}

export default Modal