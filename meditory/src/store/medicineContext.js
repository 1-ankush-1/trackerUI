import React, { useEffect, useState } from "react";

export const MedicineContex = React.createContext({
    medicines: [],
    onAddMedicine: () => { }
});

const MedicineContexProvider = (props) => {
    const [medicines, setMedicines] = useState([])

    useEffect(() => {
        const MedicineStock = JSON.parse(localStorage.getItem("medicines"));
        if (MedicineStock) {
            setMedicines([...MedicineStock])
        }
    }, [])

    const handleAddMedicine = (item) => {

        setMedicines((prev) => {
            console.log(item);
            let idxExist = prev.findIndex(medicine => medicine.id === item.id);
            if (idxExist !== -1) {
                alert("enter unique medicine id");
                return [...prev];
            }
            const updatedMedicineList = [item, ...prev];
            localStorage.setItem("medicines", JSON.stringify(updatedMedicineList))
            return [...updatedMedicineList];
        })
    }

    return (
        <MedicineContex.Provider value={{ medicines: medicines, onAddMedicine: handleAddMedicine }}>
            {props.children}
        </MedicineContex.Provider>
    )
}

export default MedicineContexProvider;
