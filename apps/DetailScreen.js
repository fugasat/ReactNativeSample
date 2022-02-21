import React, { useContext } from "react";
import { ModelContext } from './ModelContext';
import { DetailView } from './DetailView';


const DetailScreen = ({ route, navigation }) => {

  const { modelArray, setModel } = useContext(ModelContext)

  //Homeから渡されたitemを受け取る
  const item = route.params;
  console.log(`view model : ${item.getName()}`)

  const onModelUpdate = (newModelArray) => {
    setModel(newModelArray)
    navigation.goBack()
  }

  return (
    <DetailView
      item={item}
      modelArray={modelArray}
      onModelUpdate={onModelUpdate}
    />
  );
};

export default DetailScreen;
