const Redux = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counter = (state = {counter: 0}, action) => {
    switch (action.type) {
        case INCREMENT:
            return {counter: state.counter + action.data.number};
        case DECREMENT:
            return {counter: state.counter - action.data.number};
        default:
            return state;
    }
};

const changeLanguage = (state = {hola: 'mundo'}, action) => {
    switch (action.type) {
        case 'TO_ENGLISH':
            return {hola: 'world'};
        case 'TO_SPANISH':
            return {hola: 'mundo'};
        default:
            return state;
    }
}

const store = Redux.createStore(counter);

console.log(store);
//console.log(`Estado inicial: ${store.getState().counter}`);


store.dispatch({type: INCREMENT, data: {number: 10}});
store.dispatch({type: INCREMENT, data: {number: 3}});

store.dispatch({type: DECREMENT, data: {number: 40}});

//console.log(`${store.getState().counter}`);

store.dispatch({type: 'TO_SPANISH'});
//store.dispatch({type: INCREMENT});

//console.log(`${store.getState().counter}`);
