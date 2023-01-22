import React from 'react';
import PropTypes from 'prop-types';
import styles from './foooter.scss';

const foooter = props => (
	<div>This is a component called foooter.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class foooter extends React.Component {
//   render() {
//     return <div>This is a component called foooter.</div>;
//   }
// }

const foooterPropTypes = {
	// always use prop types!
};

foooter.propTypes = foooterPropTypes;

export default foooter;
