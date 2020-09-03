import React from 'react';
import VisibleExpenses from '../selectors/expenses';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'; 
import expensesTotal from '../selectors/expenses-total';

const ExpenseSummary = (props) => (
  <div>
    <p>{`Viewing ${props.expenses.length} expenses totalling ${props.total}`}</p>
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    total: expensesTotal(state.expenses)
  };
}

export default connect(mapStateToProps)(ExpenseSummary);