import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';

// import 'react-native';
// import React from 'react';
import App from '../apps/App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
// Use with React Native <= 0.63
// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// Use this instead with React Native >= 0.64
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing react navigation', () => {
  test('app test', async () => {
    // const component = (
    //     <App />
    // );
    const { getByText, getAllByText, getAllByLabelText, findByText } = render(
      <App />
    );
    expect(getByText("Model 3"));
    const elements = getAllByText(/Model /);
    expect(elements.length).toBe(3);
    expect(elements[0].props["children"]).toBe("Model 1")
    expect(elements[1].props["children"]).toBe("Model 2")
    expect(elements[2].props["children"]).toBe("Model 3")

    // todo : addボタンを押す
    
  });
});

// test('renders correctly', () => {
//   const app = renderer.create(<App />);
//   console.log(app.toJSON())
// });
