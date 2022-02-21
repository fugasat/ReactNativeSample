import React from "react";
import { View, Text, Button } from 'react-native';
import { removeModel } from "./DataManager.js"

export const DetailView = ({item, modelArray, onModelUpdate}) => {
    const onPressRemoveButton = (item, modelArray) => {
        console.log(`remove model : ${item.getName()}`)
        const newModelArray = removeModel(modelArray, item)
        onModelUpdate(newModelArray)
    }
  
    return (
        <View>
            <Text>{item.getName()}</Text>
            <Button onPress={() => onPressRemoveButton(item, modelArray)} title="Remove" />
        </View>
    );
};  