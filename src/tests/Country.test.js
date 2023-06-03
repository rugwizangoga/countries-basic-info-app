import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Country from '../components/pages/Country';
import store from '../redux/store'; // Replace with your actual Redux store import

test('renders Country component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <Country />
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
