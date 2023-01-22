import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

<link rel="stylesheet" type="text/css" href="index.css" />

const investmentTips = props => (
	<div>

<h1>Saving money during a crisis: do's and don'ts</h1>



<title>Sun Life financial security advisor Julien Ringuette has the following recommendations.</title>

<h1>Do's</h1>

<ul>
  <li>Make a plan, or review the plan you already have. It’s best to build your plan with your advisor’s help. And once you have a plan, you should stick to it!</li>
  <li>Invest sooner rather than later, in RRSPs, TFSAs, stocks.</li>
  <li>The more you invest, the more opportunities you have to increase your buying power and combat the effects of inflation.</li>
  <li>Automate your savings with automatic deposits. You’ll be able to set aside a fixed sum of money at a frequency you choose. Automating your savings takes the stress out of saving.</li>
	<li>Be patient. With time, things often sort themselves out.</li>
</ul>






<h1>Don'ts</h1>
<ul>
  <li>Make rash, impulsive decisions.</li>
  <li>Rely entirely and only on random internet pages for answers.</li>
  <li>Make impulse RRSP withdrawals because you’re stressed.</li>
  <li>Give in to panic and lose sight of your long-term vision.</li>
	<li>Be patient. With time, things often sort themselves out.</li>
	<li>Try to play the stock market if you don’t have experience buying and selling stocks. That’s like playing with fire!</li>
</ul>


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
