import { cartUIAction } from "../slices/cartUI"

//action creator - not return the action instead return a function that return a action
export function sendCartData(cartData) {

    //perform aschronous code here
    return async (dispatch) => {
        //perform actual action
        dispatch(cartUIAction.showNotification({
            status: "pending",
            title: "sending..",
            message: "Sending cart data"
        }))

        const sendRequest = async () => {
            const response = await fetch("https://async-react-add96-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json", {
                method: "PUT",
                body: JSON.stringify(cartData),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!response.ok) {
                throw new Error("setting cart data failed ")
            }
        }

        try {
            await sendRequest();
            dispatch(cartUIAction.showNotification({
                status: "success",
                title: "Success",
                message: "Set cart data successfully "
            }))
        } catch (error) {
            dispatch(cartUIAction.showNotification({
                status: "error",
                title: "Error",
                message: "setting cart data failed "
            }))
        }
    }
}