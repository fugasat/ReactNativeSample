import React from "react";
import { DataModel } from "../apps/DataManager"
import { DetailView } from '../apps/DetailView';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const modelArray = [new DataModel(1), new DataModel(2), new DataModel(3)]
    const onModelUpdate = (newModelArray) => {
    }

    const detailView = renderer.create(
        <DetailView 
            item={new DataModel(2)}
            modelArray={modelArray}
            onModelUpdate={onModelUpdate}
        />
    );
    console.log(detailView.toJSON())
});
