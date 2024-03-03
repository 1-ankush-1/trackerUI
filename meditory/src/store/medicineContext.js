import React, { useEffect, useState } from "react";

export const MedicineContext = React.createContext({
    medicines: [],
    onAddMedicine: () => { },
    onMedicineQuantityChange: () => { }
});

const MedicineContextProvider = (props) => {
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

    const updateQuantity = (item) => {
        if (item.action === 'decrease') {
            setMedicines((prev) => {
                return [...prev.map((indv_item) => {
                    if (indv_item.id !== item.id) {
                        return indv_item
                    }
                    return {...indv_item, quantity: item.quantity};
                })]
            })
        }
        else if (item.action === "increase") {
            console.log("called");
            setMedicines((prev) => {
                return [...prev.map((indv_item) => {
                    if (indv_item.id !== item.id) {
                        return indv_item
                    }
                    console.log(indv_item.quantity)
                    return {...indv_item, quantity: Number(indv_item.quantity) + 1};
                })]
            })
        }
    }

    return (
        <MedicineContext.Provider value={{ medicines: medicines, onAddMedicine: handleAddMedicine, onMedicineQuantityChange: updateQuantity }}>
            {props.children}
        </MedicineContext.Provider>
    )
}

export default MedicineContextProvider;
