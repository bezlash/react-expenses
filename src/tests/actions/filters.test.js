import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';
import moment from 'moment';

test('Action generator - filter - start date', () => {
  const actionStartDate = setStartDate(moment(0));
  expect(actionStartDate).toEqual({
    type: 'SET_START_DATE',
    timestamp: moment(0)
  });
}); 

test('Action generator - filter - end date', () => {
  const actionEndDate = setEndDate(moment(0));
  expect(actionEndDate).toEqual({
    type: 'SET_END_DATE',
    timestamp: moment(0)
  });
}); 

test('Action generator - filter - sort by amount', () => {
  const actionSortByAmount = sortByAmount();
  expect(actionSortByAmount).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('Action generator - filter - sort by date', () => {
  const actionSortByDate = sortByDate();
  expect(actionSortByDate).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('Action generator - filter - sort by text - manual', () => {
  const actionSortByText = setTextFilter('Filter by text');
  expect(actionSortByText).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Filter by text'
  })
});

test('Action generator - filter - sort by text - default', () => {
  const actionSortByText = setTextFilter();
  expect(actionSortByText).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});