import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { quizStyles } from "./styles/quiz";

export default function App() {
  return (
    <View style={quizStyles.container}>
      <View style={quizStyles.titleBox}></View>
      <View style={quizStyles.quizBox}></View>
      <StatusBar style="auto" />
    </View>
  );
}
