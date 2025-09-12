import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';
import { tree } from 'next/dist/build/templates/app-page';

describe('Login', () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('renders without crashing', () => {
    shallow(<Login />);
  });
  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toEqual(2);
    expect(wrapper.find('label').length).toEqual(2);
  });
  it("test to verify that the submit button is disabled by default",()=>{
    const wrapper = shallow(<Login/>)
    expect(wrapper.find("input[type=submit]")).equal(false)
  })
  it("test to verify that after changing the value of the two inputs, the button is enabled",()=>{
    const wrapper = shallow(<Login/>)
    const email = wrapper.find("input[type='email']")
    const password = wrapper.find("input[type='password'}")
    const submitButton = wrapper.find("input[type='submit']")

    email.simulate("change",{target : {email:"fnzf@fvn"}})
    password.simulate("change",{target:{password:"12345"}})
    expect(submitButton).prop("disabled").equal(true)

  })
});