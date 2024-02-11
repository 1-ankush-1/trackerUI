import Input from "../ui/Input";
import Button from "../ui/button";

const MedicineForm = () => {
    return (
        <form id="MedicineForm">
            <Input
                label="Amount"
                id="amount"
                value={""}
                type="number"
                min={0}
            />
            <Button type="submit" value="Add" />
        </form>)
}

export default MedicineForm;