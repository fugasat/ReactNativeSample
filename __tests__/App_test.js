import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';
import userEvent from '@testing-library/user-event';

// import 'react-native';
// import React from 'react';
import App from '../apps/App';
import { add } from 'react-native-reanimated';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
// Use with React Native <= 0.63
// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// Use this instead with React Native >= 0.64
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing App', () => {

  test('app test', async () => {
    const { getByText, getAllByText } = render(
      <App />
    );

    //
    // Home画面の確認
    //  
    var elements;
    elements = getAllByText(/Model /);
    expect(elements.length).toBe(3);
    expect(elements[0].props["children"]).toBe("Model 1")
    expect(elements[1].props["children"]).toBe("Model 2")
    expect(elements[2].props["children"]).toBe("Model 3")

    // addボタンを押す
    const addButton = getByText("Add")
    fireEvent(addButton, 'press');

    elements = getAllByText(/Model /);
    expect(elements.length).toBe(4);
    expect(elements[3].props["children"]).toBe("Model 4")

    // Modelをクリックする
    const modelItem = getByText("Model 2");
    fireEvent(modelItem, 'press');

    //
    // Detail画面に切り替わる
    // (Home画面も残っているので注意)
    //
    const removeButton = getByText("Remove");
    const detailTexts = getAllByText("Model 2");
    expect(detailTexts[1].props["children"]).toBe("Model 2")

    // 削除ボタンを押す
    fireEvent(removeButton, 'press');

    //
    // 一覧画面に戻る
    //
    elements = getAllByText(/Model /);
    expect(elements.length).toBe(3);

    // 削除されたModelが表示されていないことを確認
    expect(elements[0].props["children"]).toBe("Model 1")
    expect(elements[1].props["children"]).toBe("Model 3")
    expect(elements[2].props["children"]).toBe("Model 4")
  });
});
