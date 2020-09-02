import filtersReducer from '../../reducers/filters';
import moment from 'moment';


test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month') 
  })
});

test('Reducer - filters - sort by amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('Reducer - filter - sort by date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const action = {type: 'SORT_BY_DATE'}

  const state = filtersReducer(state, action);
  expect(state.sortBy).toBe('date');
});

test('Reducer - filter - set text filter', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'This is the text'
  }
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('This is the text');
});

test('Reducer - filter - set start date', () => {
  const action = {
    type: 'SET_START_DATE',
    timestamp: 0
  }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(0);
});

test('Reducer - filter - set end date', () => {
  const action = {
    type: 'SET_END_DATE',
    timestamp: 100000
  }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(100000);
});

