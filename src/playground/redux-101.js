// import
import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});

const setCount = ( { count } = {} ) => ({
  type: 'SET',
  count: count
});

const resetCount = () => ({
  type: 'RESET',
  count: 1
});

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: action.count
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state;
  }
}

// create createStore instance with three cases 
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());

});


// change the state using redux actions

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 15 }));

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(resetCount());

// store.dispatch({
//   type: 'RESET'
// });

store.dispatch(decrementCount({ decrementBy:10 }));


store.dispatch(decrementCount({ decrementBy: 20 }));

store.dispatch(setCount({count: 200 }));

store.dispatch(resetCount());

// store.dispatch({
//   type: 'SET',
//   count: 101
// })

