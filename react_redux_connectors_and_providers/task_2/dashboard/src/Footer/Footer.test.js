import React from 'react';
import { mount, shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Footer from './Footer';
import AppContext from '../App/AppContext';

describe('Footer', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Footer user={{isLoggedIn:false}}/>)

    expect(wrapper.exists()).toBe(true)
  });

  it('does not display the Contact link when logged out', () => {
    const wrapper = shallow(<Footer user={{isLoggedIn:false}}/>)
    
    expect(wrapper.find('a[href="/contact"]').length).toBe(0);
  });

  it('displays the Contact link when logged in', () => {
    const wrapper = shallow(<Footer user={{isLoggedIn:false}}/>)
    expect(wrapper.find('a[href="/contact"]').length).toBe(1);
  });
});