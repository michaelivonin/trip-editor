import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Places from './Places';

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

it('renders without crashing', () => {
  act(() => {
    render(
      <Places
        className={'list'}
        places={ [{address: 'Omsk'}, {address: 'Moscow'}] }
      />,
      container
    );
  });

  expect(
    container.getElementsByTagName('OL')[0].getAttribute('class')
  ).toEqual('list');
});