import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { ModelContext } from './ModelContext';
import {DataModel, addModel} from "./DataManager.js"

const Item = ({item, onPress}) => (
  // スタイルあり
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={[styles.title]}>{item.getName()}</Text>
  </TouchableOpacity>

  // スタイルなし
  // <TouchableOpacity onPress={onPress}>
  //   <Text>{item.title}</Text>
  // </TouchableOpacity>
);

const Home = ({ navigation }) => {

//   const [modelArray, setModel] = useState([]); // 初期値を設定
  const { modelArray, setModel } = useContext(ModelContext)

  React.useLayoutEffect(() => {
    // Navigationの設定
    navigation.setOptions({
      // 右ボタンを配置
      headerRight: () => (
        // Stateで定義した関数でState変数を更新する必要あり
        // 配列の更新はオブジェクトが更新されるような方式で行うこと(pushだと画面が更新されないので注意)
        <Button onPress={() => setModel(arr => addModel(arr))} title="Add" />
      ),
    });
  }, [navigation]);

  // 画面描画後にコールされる
  useEffect(() => {
    setModel([new DataModel(1), new DataModel(2), new DataModel(3)])
  }, [])

  const renderItem = ({item}: {item: DataModel}) => {
  
    const onPressItem = (item) => {
      navigation.navigate('detail', item)
    }

    return (
      <Item
        item={item}
        onPress={() => onPressItem(item)}
      />
    );
  };
  
  return (
    <FlatList
      data={modelArray}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={[styles.list]}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#ffffff",
  },
  item: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    padding: 12,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
});

export default Home;
