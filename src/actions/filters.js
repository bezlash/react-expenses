
// Set text filter
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});


// Sort by date
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// Sort by amount
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// Set start date
export const setStartDate = (timestamp) => ({
  type: 'SET_START_DATE',
  timestamp
});

// Set end date
export const setEndDate = (timestamp) => ({
  type: 'SET_END_DATE',
  timestamp
});