import React, { useState } from "react";

export const MedicineContex = React.createContext({
    medicines: [],
    onAddMedicine: () => { }
});

const MedicineContexProvider = (props) => {
    const [medicines, setMedicines] = useState([{ id: "12", name: "name of medi", description: "description", price: "120" }])

    const handleAddMedicine = (item) => {
        setMedicines((prev) => {
            return [item, ...prev]
        })
    }

    return (
        <MedicineContex.Provider value={{ medicines: medicines, onAddMedicine: handleAddMedicine }}>
            {props.children}
        </MedicineContex.Provider>
    )
}

export default MedicineContexProvider;