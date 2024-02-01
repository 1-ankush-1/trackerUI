const ExpenseFilter = ({ selected, onChangeFilter }) => {
    return (
        <>
            <label htmlFor="select year">select year</label>
            <select id="select year" onChange={onChangeFilter} defaultValue={selected}>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024} >2024</option>
            </select>
        </>
    )
}

export default ExpenseFilter;