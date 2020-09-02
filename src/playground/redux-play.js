// import redux
import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';

const expensesDefaultState = [];

const addExpense = ({title = '', amount = 0, description = ''} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    title,
    amount,
    description
  }
})

// Reducer
const expensesReducer = (state = expensesDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    default:
      return state;
  }
}

// Store creation



const store = createStore(expensesReducer);

store.subscribe(() => {
  const state = store.getState();
  console.group(state);
});

store.dispatch(addExpense({title: 'Expense one', amount: 500, description: 'Some description'}));
store.dispatch(addExpense({title: 'Two', amount: 80, description: 'Something'}));


// Demo state

const demoState = {
  expenses: [{
    title: 'Expense one',
    amount: 10,
    description: 'These are some shoes'
  }]
}

