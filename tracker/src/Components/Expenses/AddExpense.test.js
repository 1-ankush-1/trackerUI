import { render, screen } from "@testing-library/react";
import AddExpense from "./AddExpense";

//test suite - ("description,function which have different test belong to same feature")
describe("Add Expense component", () => {
    //test("description",testin function)
    test('check we are getting component', () => {
        //Arrange - setup test data ,condition and environment
        render(<AddExpense />);
        //Act - run logic that will be tested

        //Assert - compare executed result with expected result
        const amount = screen.getByText("Amount", { exact: true });  //check if the text exist on the screen and should be exact match
        expect(amount).toBeInTheDocument();
    })
});


