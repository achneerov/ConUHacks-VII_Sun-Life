import React from 'react';
import PropTypes from 'prop-types';
import styles from './investmentGoals.scss';

const investmentGoals = props => (
	<div>This is a component called investmentGoals.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class investmentGoals extends React.Component {
//   render() {
//     return <div>This is a component called investmentGoals.</div>;
//   }
// }

const investmentGoalsPropTypes = {
	// always use prop types!
};

investmentGoals.propTypes = investmentGoalsPropTypes;

export default investmentGoals;
