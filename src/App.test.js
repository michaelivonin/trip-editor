import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ReactTestUtils from 'react-dom/test-utils';

import App from './App';

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
    render(<App />, container);
  });

  expect(
    container.getElementsByTagName('div')[0].getAttribute('class')
  ).toEqual('App');
});

it('changes value when typed', () => {
  let app = null;
  act(() => {
    app = ReactDOM.render(<App />, container);
  });

  const input = container.querySelector('.App__input');
  ReactTestUtils.Simulate.change(input, {target: {value: 'Omsk'}});
  expect(app.state.point).toBe('Omsk');
});

it('gets coordinates when submited', async () => {
  let app = null;
  act(() => {
    app = ReactDOM.render(<App />, container);
  });

  /*const input = container.querySelector('.App__input');
  const form = container.querySelector('.App__form');*/

  await new Promise((resolve) => {
    setTimeout(() => {
      /*ReactTestUtils.Simulate.change(input, {target: {value: 'Moscow'}});
      ReactTestUtils.Simulate.submit(form);

      expect(app.state.places[0].address).toBe('Moscow');
      expect(app.state.places[0].coordinates).toBe(true);*/
      console.log(app.state.ymaps);
      resolve();
    }, 10000);
  });


}, 10001);

/*it('moves items when moved', () => {
  let app = null;
  act(() => {
    app = ReactDOM.render(<App />, container);
  });

  const form = container.querySelector('.App__form');
  const list = container.querySelector('.App__places');
});*/