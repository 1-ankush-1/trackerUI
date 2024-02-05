import { useContext, useEffect, useState } from "react"
import { orderContext } from "../../store/order";
import OrdersTable from "./OrderTable";
import "../../styles/showOrder/showOrder.css"

const ShowOrder = () => {
    const odrCtx = useContext(orderContext)
    const [tableOrders, setTableOrders] = useState([]);

    useEffect(() => {
        const tableArray = odrCtx.orders.reduce((accumulator, odr) => {
            switch (odr.table) {
                case "table1":
                    accumulator[0].push(odr);
                    break;
                case "table2":
                    accumulator[1].push(odr);
                    break;
                case "table3":
                    accumulator[2].push(odr);
                    break;
                default:
                    break;
            }
            return accumulator;
        }, [[], [], []]);

        setTableOrders(tableArray);
    }, [odrCtx.orders]);

    return (
        <div className="order-room">
            {tableOrders.map((todr, idx) => (
                <OrdersTable
                    orders={todr}
                    key={idx}
                    table={todr[0]?.table}
                />
            ))}
        </div>
    )
}

export default ShowOrder;
