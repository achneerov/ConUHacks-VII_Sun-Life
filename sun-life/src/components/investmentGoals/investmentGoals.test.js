import React from 'react';
import { shallow, render, mount } from 'enzyme';
import investmentGoals from './investmentGoals';

describe('investmentGoals', () => {
  let props;
  let shallowinvestmentGoals;
  let renderedinvestmentGoals;
  let mountedinvestmentGoals;

  const shallowTestComponent = () => {
    if (!shallowinvestmentGoals) {
      shallowinvestmentGoals = shallow(<investmentGoals {...props} />);
    }
    return shallowinvestmentGoals;
  };

  const renderTestComponent = () => {
    if (!renderedinvestmentGoals) {
      renderedinvestmentGoals = render(<investmentGoals {...props} />);
    }
    return renderedinvestmentGoals;
  };

  const mountTestComponent = () => {
    if (!mountedinvestmentGoals) {
      mountedinvestmentGoals = mount(<investmentGoals {...props} />);
    }
    return mountedinvestmentGoals;
  };  

  beforeEach(() => {
    props = {};
    shallowinvestmentGoals = undefined;
    renderedinvestmentGoals = undefined;
    mountedinvestmentGoals = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
