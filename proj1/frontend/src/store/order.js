import React, { useEffect, useState } from "react";

export const orderContext = React.createContext({
    orders: [],
    onOrderChange: (order) => { },
    onOrderRemove: (id) => { }
});

const OrderProviderContext = (props) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem("orders"));
        if (storedOrders) {
            setOrders([...storedOrders]);
        }
    }, [setOrders]);

    const onOrderChange = (order) => {
        setOrders((prev) => {
            localStorage.setItem("orders", JSON.stringify([order, ...prev]));
            return [order, ...prev]
        })
    }

    const onOrderRemove = (id) => {
        setOrders((prev) => {
            const updatedOrder = prev.filter((odr) => odr.orderId !== id);
            localStorage.setItem("orders", JSON.stringify([...updatedOrder]));
            return [...updatedOrder];
        })
    }

    return (
        <orderContext.Provider value={{ orders, onOrderChange, onOrderRemove }}>
            {props.children}
        </orderContext.Provider>)
}

export default OrderProviderContext;