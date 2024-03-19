import { render, screen} from "@testing-library/react";
import AddExpense from "./AddExpense";


//test("description",testin function)
test('check we are getting data or not', () => {
    //Arrange - setup test data ,condition and environment
    render(<AddExpense />);
    //Act - run logic that will be tested

    //Assert - compare executed result with expected result
    const amount = screen.getByText("Amount", { exact: true });  //check if the text exist on the screen and should be exact match
    expect(amount).toBeInTheDocument();
})