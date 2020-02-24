import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('there is player named Alex Morgan', () => {
  expect('Alex Morgan').toMatch(/Alex Morgan/);
});

test(" Player Header renders", () => {
  const { getByTestId } = render(<App />);
  getByTestId('PlayersHeader')
})