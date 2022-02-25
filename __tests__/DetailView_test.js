import React from "react";
import { DataModel } from "../apps/DataManager"
import { DetailView } from '../apps/DetailView';
// import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

describe('Testing Detail View', () => {

    test('renders correctly', () => {
        const modelArray = [new DataModel(1), new DataModel(2), new DataModel(3)]
        var updatedModelArray = []
        const onModelUpdate = (newModelArray) => {
            updatedModelArray = newModelArray
        }

        // Viewをレンダリング
        const { getByText, findByText } = render(
            <DetailView 
                item={new DataModel(2)}
                modelArray={modelArray}
                onModelUpdate={onModelUpdate}
            />
        );

        // レンダリング結果を確認
        expect(getByText("Model 2"));
        expect(getByText("Remove"));

        // 削除ボタンを押す
        fireEvent.press(getByText("Remove"));

        // オリジナルの配列は保持されることを確認
        expect(modelArray.length).toBe(3);
        expect(modelArray[0].id).toBe(1);
        expect(modelArray[1].id).toBe(2);
        expect(modelArray[2].id).toBe(3);
        // onModelUpdateが期待通りにコールされていることを確認
        expect(updatedModelArray.length).toBe(2);
        expect(updatedModelArray[0].id).toBe(1);
        expect(updatedModelArray[1].id).toBe(3);
    });
});