import { useContext, useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/button";

const MedicineForm = (props) => {
    const [amount, setAmount] = useState(0);

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleAddAmount = (e) => {
        e.preventDefault();
        props.onAddAmount(amount)
    }

    return (
        <form id="MedicineForm" onSubmit={handleAddAmount}>
            <Input
                label="Amount"
                id="amount"
                value={amount}
                onInputChange={handleAmountChange}
                type="number"
                min={0}
                max={5}
            />
            <Button type="submit" value="Add" />
        </form>)
}

export default MedicineForm;