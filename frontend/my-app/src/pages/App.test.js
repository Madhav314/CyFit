
import * as ReactDOMClient from 'react-dom/client';
import { render, fireEvent } from '@testing-library/react';
import {alphaNumCheck,passwordCheck,emailCheck} from './RegisrationValidation';
import {createRoot} from 'react-dom/client';
import register from './regisration';
import Login from './login';
import backside from './backside';
import Provider from 'react-redux';
test('test alphanumeric check from registration ', () => {
  expect(alphaNumCheck("")).toBe(false);
  expect(alphaNumCheck("a")).toBe(true);

})

test('test password check from registration ', () => {
  expect(passwordCheck("Monkey12")).toBe(true);
  expect(passwordCheck("Monkey")).toBe(false);
})

test('test email check from registration', () =>{
  expect(emailCheck("bob")).toBe(false);
  expect(emailCheck("bob@gmail.com")).toBe(true);
})


//test if registration form is valid
/*
test('test registration form', () => {
  const {getByTestId} = render(<register/>);
  const email = getByTestId('email');
  const username = getByTestId('Username');
  const password = getByTestId('Password');
  const name = getByTestId('Name');
  const button = getByTestId('clickbttn');
  fireEvent.change(email, {target: {value: 'bob@gmail.com'}});
  fireEvent.change(username, {target: {value: 'bob'}});
  fireEvent.change(password, {target: {value: 'Monkey12'}});
  fireEvent.change(name, {target: {value: 'Bob'}});
  fireEvent.click(button);
  expect(email.value).toBe('bob@gmail.com');
  expect(username.value).toBe('bob');
  expect(password.value).toBe('Monkey12');
  expect(name.value).toBe('Bob');
})
*/
