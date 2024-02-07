import "../../Styles/Meals/AvailableMeals.css"
import MealForm from "./MealForm"
import MealItem from "./MealItem"
const MealList = [
    { id: "1", name: "some dish", description: "great", price: "120" },
    { id: "2", name: "some dish", description: "great", price: "120" }
]
const AvailableMeals = () => {
    return (
        <section className="meals">
            <ul>
                {MealList.map((meal) => {
                    return (
                        <li className="meal" key={meal.id}>
                            <MealItem
                                name={meal.name}
                                price={meal.price}
                                description={meal.description}
                            />
                            <MealForm />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default AvailableMeals;