const redux = require("redux");

/**
 * 1.create a store - store should manage some data
 * 2.(should be pure function)create a reducer to manuplate state acc to action and return new state 
 * 3. pass the reducer in the createStore
 * 4. create a subscriber
 *      a.getState() - get latest state
 * 5. subscribe to store 
 * 6. pass initial state or default value for counter Reducer
 * 7. dispatch an action
 */

//reducer
const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                counter: state.counter + 5
            }
        case "DECREASE":
            return {
                counter: state.counter - 1
            }
        default:
            return state;
    }
};

//store
const store = redux.createStore(counterReducer);

//counter function
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

//subscribe to central state
store.subscribe(counterSubscriber);

//perform an action
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "DECREASE" })