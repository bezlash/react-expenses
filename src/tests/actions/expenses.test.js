import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Action generator - remove expense', () => {
  const action = removeExpense({  id: '12345' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '12345'
  });
});

test('Action generator - edit expense', () => {
  const actionEdit = editExpense( '1111', { description: 'This is the update note' });
  expect(actionEdit).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1111',
    updates: {
      'description' : 'This is the update note'
    }
  })
});

test('Action generator - add expense - manual', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This is the rent'
  }
  const actionAdd = addExpense(expenseData);

  expect(actionAdd).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Action generator - add expense - defaults', () => {
  const actionAdd = addExpense();
  expect(actionAdd).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
});