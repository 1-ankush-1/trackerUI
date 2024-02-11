import { useContext } from "react"
import { MedicineContex } from "../../store/medicineContext"
import Medicine from "./Medicine";

const Medicines = () => {
    const mediCtx = useContext(MedicineContex);
    return (
        <ul>
            {mediCtx.medicines?.map((medi) => {
                return (
                    <Medicine
                        key={medi.id}
                        name={medi.name}
                        description={medi.description}
                        price={medi.price}
                    />)
            })}
        </ul>
    )
}

export default Medicines;