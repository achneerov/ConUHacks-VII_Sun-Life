import React from 'react';
import { shallow, render, mount } from 'enzyme';
import investmentTips from './investmentTips';

describe('investmentTips', () => {
  let props;
  let shallowinvestmentTips;
  let renderedinvestmentTips;
  let mountedinvestmentTips;

  const shallowTestComponent = () => {
    if (!shallowinvestmentTips) {
      shallowinvestmentTips = shallow(<investmentTips {...props} />);
    }
    return shallowinvestmentTips;
  };

  const renderTestComponent = () => {
    if (!renderedinvestmentTips) {
      renderedinvestmentTips = render(<investmentTips {...props} />);
    }
    return renderedinvestmentTips;
  };

  const mountTestComponent = () => {
    if (!mountedinvestmentTips) {
      mountedinvestmentTips = mount(<investmentTips {...props} />);
    }
    return mountedinvestmentTips;
  };  

  beforeEach(() => {
    props = {};
    shallowinvestmentTips = undefined;
    renderedinvestmentTips = undefined;
    mountedinvestmentTips = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
