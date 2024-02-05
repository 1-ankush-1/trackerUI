import Order from "./order";
import "../../styles/showOrder/orderTable.css"

const OrdersTable = (props) => {
    return (
        <div className="order-table">
            <h2 className="order-table-head">{props.table?.toUpperCase()}</h2>
            <div className="order-table-content">
                {props.orders.map((odr) => (
                    <Order
                        key={odr.orderId}
                        name={odr.dish}
                        price={odr.price}
                        id={odr.orderId}
                    />
                ))}
            </div>
        </div>
    )
}

export default OrdersTable;
