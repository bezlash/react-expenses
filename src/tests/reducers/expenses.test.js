import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Reducer - expenses - valid default', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('Reducer - expenses - should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Reducer - expenses - should NOT remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 8
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Reducer - expenses - should add expense', () => {
  const expense = {
    id: '4',
    description: 'Finance',
    note: '',
    amount: 195,
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses,expense]);
});

test('Reducer - expenses - should edit expense', () => {
  const updates = {
    amount: 200000
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    {
      id: '1',
      description: 'Credit card',
      note: '',
      amount: 200000,
      createdAt: 0
    },
    expenses[1],
    expenses[2]
  ]);
});

test('Reducer - expenses - should NOT edit expense', () => {
  const updates = {
    amount: 200000
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: 8,
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

