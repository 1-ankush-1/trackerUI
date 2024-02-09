import "../../Styles/Meals/AvailableMeals.css"
import MealItem from "./MealItem"

const MealItemList = [{ id: "1", name: "burger", description: "great", price: "150" },
{ id: "2", name: "macroni", description: "great", price: "110" },
{ id: "3", name: "white sauce pasta", description: "great", price: "190" },
{ id: "4", name: "noodles", description: "great", price: "90" }]

const AvailableMeals = () => {
    return (
        <section className="meals">
            <ul>
                {MealItemList?.map((meal) => {
                    return (
                        <MealItem
                            key={meal.id}
                            id={meal.id}
                            name={meal.name}
                            price={meal.price}
                            description={meal.description}
                        />
                    )
                })}
            </ul>
        </section>
    )
}

export default AvailableMeals;