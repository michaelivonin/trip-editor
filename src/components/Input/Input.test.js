import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Input from './Input';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without attributes', () => {
  act(() => {
    render(
      <Input
        className={'input'}
        placeholder={'Some text'}
      />,
      container
    );
  });

  expect(
    container.querySelector('input').getAttribute('placeholder')
  ).toEqual('Some text');

  act(() => {
    render(
      <Input
        className={'input'}
        value={'Value number 1'}
      />,
      container
    );
  });

  expect(container.querySelector('input').value).toEqual('Value number 1');
});