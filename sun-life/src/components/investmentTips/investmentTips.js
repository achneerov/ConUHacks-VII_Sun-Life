import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

<link rel="stylesheet" type="text/css" href="index.css" />

const investmentTips = props => (
	<div>
<title>Saving money during a crisis: do's and don'ts</title>
<title>Sun Life financial security advisor Julien Ringuette has the following recommendations.</title>

<title>Do's</title>

<body>Make a plan, or review the plan you already have. It’s best to build your plan with your advisor’s help. And once you have a plan, you should stick to it! 
Invest sooner rather than later, in RRSPs, TFSAs, stocks. The more you invest, the more opportunities you have to increase your buying power and combat the effects of inflation. 
Automate your savings with automatic deposits. You’ll be able to set aside a fixed sum of money at a frequency you choose. Automating your savings takes the stress out of saving.
Be patient. With time, things often sort themselves out.</body>

<title>Don’ts</title>

<body>Make rash, impulsive decisions.
Rely entirely and only on random internet pages for answers. 
Make impulse RRSP withdrawals because you’re stressed. 
Give in to panic and lose sight of your long-term vision. 
Try to play the stock market if you don’t have experience buying and selling stocks. That’s like playing with fire!</body>

		
	</div>
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
