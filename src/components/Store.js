//initialValue is our state for all components.
//for naming convention each value inside initialValue will have name of our components
//inside values of our named components (example header: {}) we set initialState
let initialState = {
  header: {
    inputValue: "reduxDisplay: 'none'",
    wordHello: "Hello"
  },
  intro: {
    value: "redux might be more simple in this way"
  }
};

//callbacks = []; is used for subscribe
const callbacks = [];

//If initialState will change, this function can give current state to all components
export function subscribe(callback) {
  callbacks.push(callback);
}

//if you will call this function in components, you will get current state for all components
export function storeState(state = initialState) {
  return state;
}

//function for setting value in storeSetHandleChange
export function storeSetHandleChange(inputValue) {
  initialState.header.inputValue = inputValue;
  //to be sent current state to all components what you have we need to iterate over callbacks
  callbacks.forEach(callback => callback());
}

//function for setting value in storeSetHandleChange1
export function storeSetHandleChange1(inputValue) {
  initialState.header.inputValue1 = inputValue;
  callbacks.forEach(callback => callback());
}
