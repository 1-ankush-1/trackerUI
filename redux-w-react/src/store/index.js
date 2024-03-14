import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case "INCREMENTBY2":
            return {
                counter: state.counter + 2
            }
        case "DECREMENTBY2":
            return {
                counter: state.counter - 2
            }
        default:
            return state;
    }
}

const store = createStore(counterReducer);

export default store;