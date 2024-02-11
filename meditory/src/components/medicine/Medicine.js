import MedicineBody from "./MedicineBody";
import MedicineForm from "./MedicineForm";

const Medicine = (props) => {
    console.log(props)
    return (
        <li>
            <MedicineBody name={props.name} description={props.description} price={props.price} />
            <MedicineForm />
        </li>
    )
}

export default Medicine;