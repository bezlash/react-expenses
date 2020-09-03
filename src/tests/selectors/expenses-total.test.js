import expenses from '../fixtures/expenses';
import expensesTotal from '../../selectors/expenses-total';

test('Should return 0 if no expenses', () => {
  const res = expensesTotal([]);
  expect(res).toBe(0);
});

test('Should correctly add up a single expense', () => {
  const res = expensesTotal([expenses[0]]);
  expect(res).toBe(195);
})

test('Should correctly add up a multiple expense', () => {
  const res = expensesTotal(expenses);
  expect(res).toBe(44195);
})