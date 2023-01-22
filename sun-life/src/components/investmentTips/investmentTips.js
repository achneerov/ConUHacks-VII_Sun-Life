import React from 'react';
import PropTypes from 'prop-types';

const investmentTips = props => (
	<div>This is a component called investmentTips.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class investmentTips extends React.Component {
//   render() {
//     return <div>This is a component called investmentTips.</div>;
//   }
// }

const investmentTipsPropTypes = {
	// always use prop types!
};

investmentTips.propTypes = investmentTipsPropTypes;

export default investmentTips;
