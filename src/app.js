import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/consfigureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas bill', createdAt:1596240000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));


ReactDOM.render(jsx, document.getElementById('app'));


