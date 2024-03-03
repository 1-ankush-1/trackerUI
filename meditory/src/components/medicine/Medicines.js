import { useContext } from "react"
import { MedicineContext } from "../../store/medicineContext"
import Medicine from "./Medicine";
import "../../style/components/medicine.css"

const Medicines = () => {
    const mediCtx = useContext(MedicineContext);
    return (
        <ul className="medicine-list">
            {mediCtx.medicines?.map((medi) => {
                return (
                    <Medicine
                        key={medi.id}
                        id={medi.id}
                        name={medi.name}
                        description={medi.description}
                        price={medi.price}
                        quantity={medi.quantity}
                    />)
            })}
        </ul>
    )
}

export default Medicines;