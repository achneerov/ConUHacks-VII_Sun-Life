import React from 'react';
import { shallow, render, mount } from 'enzyme';
import foooter from './foooter';

describe('foooter', () => {
  let props;
  let shallowfoooter;
  let renderedfoooter;
  let mountedfoooter;

  const shallowTestComponent = () => {
    if (!shallowfoooter) {
      shallowfoooter = shallow(<foooter {...props} />);
    }
    return shallowfoooter;
  };

  const renderTestComponent = () => {
    if (!renderedfoooter) {
      renderedfoooter = render(<foooter {...props} />);
    }
    return renderedfoooter;
  };

  const mountTestComponent = () => {
    if (!mountedfoooter) {
      mountedfoooter = mount(<foooter {...props} />);
    }
    return mountedfoooter;
  };  

  beforeEach(() => {
    props = {};
    shallowfoooter = undefined;
    renderedfoooter = undefined;
    mountedfoooter = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
