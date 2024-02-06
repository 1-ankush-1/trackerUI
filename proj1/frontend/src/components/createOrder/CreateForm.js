import { useState, useContext } from "react";
import { orderContext } from "../../store/order";
import "../../styles/createOrder/createForm.css"

const CreateForm = () => {
    const ordCtx = useContext(orderContext);

    const [order, setOrder] = useState({
        orderId: "",
        dish: "",
        price: "",
        table: "table1"
    })

    const onChangeOrderHandler = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    }

    const handleOrderForm = (e) => {
        e.preventDefault();
        console.log(order);
        if (order.orderId === "" || order.dish === "" || order.price === "" || order.table === "") {
            alert("one or more missing field");
            return;
        }

        const exist = ordCtx.orders.filter((odr) => {
            return odr.orderId === order.orderId;
        })

        if (exist.length > 0) {
            alert("id already registered Enter unique id");
            return
        }

        ordCtx.onOrderChange(order);
    }

    return (
        <form id="order-form" onSubmit={handleOrderForm}>
            <label htmlFor="order_id" className="order-lbl">Unique Order Id</label>
            <input
                className="order-inp"
                id="order_id"
                name="orderId"
                type="number"
                value={order.orderId}
                onChange={onChangeOrderHandler}
            />
            <label htmlFor="order_price" className="order-lbl">Choose Price</label>
            <input
                className="order-inp"
                id="order_price"
                type="number"
                name="price"
                value={order.price}
                onChange={onChangeOrderHandler}
            />
            <label htmlFor="order_dish" className="order-lbl">Choose Dish</label>
            <input
                className="order-inp"
                id="order_dish"
                name="dish"
                type="text"
                value={order.dish}
                onChange={onChangeOrderHandler}
            />
            <label htmlFor="order_table" className="order-lbl">Choose Table</label>
            <select id="order_table" name="table" value={order.table} onChange={onChangeOrderHandler} className="order-form-select">
                <option value={"table1"}>Table 1</option>
                <option value={"table2"}>Table 2</option>
                <option value={"table3"}>Table 3</option>
            </select>
            <button type="submit" className="order-btn">Add to bill</button>
        </form>
    )
}

export default CreateForm;