import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ModelContext } from './ModelContext';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import { DataModel } from "./DataManager";

const Stack = createNativeStackNavigator();

export default function App() {

  const [modelArray, setModel] = useState([]); // 初期値を設定

  return (
    <ModelContext.Provider value={{modelArray, setModel}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={HomeScreen} options={{title: "Model List"}}/>
          <Stack.Screen name="detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ModelContext.Provider>
  );
}
