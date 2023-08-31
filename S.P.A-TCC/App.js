import * as React from "react";
import { MapView } from "react-native-maps";

import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import StackNavigator from './navigation/StackNavigation'
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    padding: 8,
  },
});
