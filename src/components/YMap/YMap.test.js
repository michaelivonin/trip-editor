import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import YMap from './YMap';

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

it('renders without crashing', async () => {
  act(() => {
    render(
      <YMap
        className={'map'}
        places={ [{address: 'Omsk'}, {address: 'Moscow'}] }
      />,
      container
    );
  });

  const wrapper = container.querySelector('map');

  await new Promise((resolve) => {
    setTimeout(() => {
        const map = wrapper.querySelector('App__map');
        expect(wrapper.contains(map)).toEqual(true);
        resolve();
      },
      5000
    );
  });
}, 5001);