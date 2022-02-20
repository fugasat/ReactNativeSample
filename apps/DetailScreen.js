import React, { useContext } from "react";
import { View, Text, Button } from 'react-native';
import { ModelContext } from './ModelContext';
import {DataModel, removeModel} from "./DataManager.js"

const DetailScreen = ({ route, navigation }) => {

  const { modelArray, setModel } = useContext(ModelContext)

  //Homeから渡されたitemを受け取る
  const item = route.params;
  console.log(item)

  const onPressRemoveButton = (item) => {
    console.log(item)
    const newModelArray = removeModel(modelArray, item)
    setModel(newModelArray)
    navigation.goBack()
  }

  return (
    <View>
      <Text>{item.getName()}</Text>
      <Button onPress={() => onPressRemoveButton(item)} title="Remove" />
    </View>
  );
};

export default DetailScreen;
