import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Countries from '../components/pages/countries';
import store from '../redux/store'; // Replace with your actual Redux store import

test('renders Country component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <Countries />
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
