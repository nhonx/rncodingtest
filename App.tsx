import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { style } from "./styles/quiz";
import { EXERCISES } from "./models/exercise";
import Quiz from "./components/Quiz";
import { StateProvider } from "./state/provider";

export default function App() {
  const [currentExerciseIndex, setCurrentExercise] = React.useState(0);
  React.useEffect(() => {
    // Get nearest unfinished exercise.
    if (EXERCISES[currentExerciseIndex].result !== "unfinished") {
      setCurrentExercise(currentExerciseIndex + 1);
    }
  }, [currentExerciseIndex]);
  return (
    <StateProvider>
      <View style={style.container}>
        <View style={style.titleBox}></View>
        <Quiz exercise={EXERCISES[currentExerciseIndex]} />
        <StatusBar style="auto" />
      </View>
    </StateProvider>
  );
}
