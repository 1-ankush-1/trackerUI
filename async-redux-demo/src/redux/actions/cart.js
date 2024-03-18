import { cartAction } from "../slices/cart"
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
                body: JSON.stringify({
                    items: cartData.items,
                    totalQuantity: cartData.totalQuantity,
                    totalPrice: cartData.totalPrice
                }),
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

export function fetchCartData() {
    return async (dispatch) => {

        const fetchData = async () => {
            const response = await fetch("https://async-react-add96-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json")
            if (!response.ok) {
                throw new Error("not able to fetch cart data...")
            }
            const data = await response.json();
            return data;
        }

        try {
            //fetch data
            const cartData = await fetchData();
            //set data in reducer
            dispatch(cartAction.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
                totalPrice: cartData.totalPrice
            }));
        } catch (error) {
            dispatch(cartUIAction.showNotification({
                status: "error",
                title: "Error",
                message: "fetching cart Data failed "
            }))
        }
    }
}