import React from 'react';
import Main from './Main';
import Wrap from '../util/Wrap';
import { render, waitForElement, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

it('renders without crashing', () => {
  render(
    <Wrap>
      <Main />
    </Wrap>
  );
});

it('has the right alt text in the logo', () => {
  const { getByAltText } = render(
    <Wrap>
      <Main />
    </Wrap>,
  );
  expect(getByAltText('logo')).toHaveClass('App-logo');
});

it('eventually gets bob', async () => {
  const { getByText } = render(
    <Wrap>
      <Main />
    </Wrap>,
  );
  
  await waitForElement(() => getByText('bob@realpeople.com'));
  await waitForElement(() => getByText('Bob'));
});
