import "../../style/components/addMedicine.css"
import { useContext, useState } from "react";
import Input from "../ui/Input";
import { MedicineContex } from "../../store/medicineContext";
import Button from "../ui/button";

const AddMedicineForm = () => {
    const mediCtx = useContext(MedicineContex)
    const [medicine, setMedicine] = useState({ id: "", name: "", description: "", price: "" });

    const handleInputChanges = (event) => {
        const { name, value } = event.target;
        setMedicine((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (medicine.id === "" || medicine.name === "" || medicine.price === "" || medicine.description === "") {
            alert("one or more input field is empty");
            return;
        }
        mediCtx.onAddMedicine(medicine);
        setMedicine({ id: "", name: "", description: "", price: "" });
    }

    return (
        <form onSubmit={handleFormSubmit} id="Addmedicineform" className="addmedicine-form">
            <Input
                label="Unique Id"
                value={medicine.id}
                id="id"
                name="id"
                type="number"
                onInputChange={handleInputChanges}
            />
            <Input
                label="Name"
                value={medicine.name}
                id="name"
                name="name"
                type="text"
                onInputChange={handleInputChanges}
            />
            <Input
                label="Description"
                value={medicine.description}
                id="desc"
                name="description"
                type="text"
                onInputChange={handleInputChanges}
            />
            <Input
                label="price"
                value={medicine.price}
                id="price"
                name="price"
                type="number"
                min="0"
                onInputChange={handleInputChanges}
            />
            <Button
                value="Add"
                type="submit" />
        </form>
    )
}

export default AddMedicineForm;