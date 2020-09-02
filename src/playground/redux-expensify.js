import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ADD Expense
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
});

// Remove expense
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});


// Edit expense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// Set text filter
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});


// Sort by date
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// Sort by amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// Set start date
const setStartDate = (timestamp) => ({
  type: 'SET_START_DATE',
  timestamp
});

// Set end date
const setEndDate = (timestamp) => ({
  type: 'SET_END_DATE',
  timestamp
});

// Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      //return state.concat(action.expense);
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter((expenseItem) => (expenseItem.id != action.id))
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });  
     
    default: 
      return state;
  }
};

// Filter reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined 
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.timestamp
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.timestamp
      }
    default:
      return state;
  }
} 

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatech = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());



    return startDateMatech && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if(sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }

  });
};

// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 800, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 200, createdAt: -31000 }));

// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
// store.dispatch(editExpense(expenseOne.expense.id, { amount:500 }));
// store.dispatch(setTextFilter('Cog'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1001));

const  demoState =  {
  expenses: [{
    id: 'kdsjhfsjfhsd',
    decription: 'January rent',
    note: 'This was the final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined 
  }
};