import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const investmentGoals = props => (
	<div>
		<button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.sunlife.ca/en/investments/how-to-save-money-in-times-of-uncertainty/';
      }}
> Click here to Invest</button>

<button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://i.gifer.com/1wIS.gif';
      }}
> Click here to Ignore</button>

	</div>
);

const investmentGoalsPropTypes = {
	// always use prop types!
};

investmentGoals.propTypes = investmentGoalsPropTypes;

export default investmentGoals;
