import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailScreen = ({ route, navigation }) => {

  //Homeから渡されたitemを受け取る
  const item = route.params[0];
  const modelArray = route.params[1];
  console.log(modelArray)

  const onPressRemoveButton = (item) => {
    console.log(item)
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
