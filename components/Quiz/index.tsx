import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import style from "./style";
import { IExercise, IChoice } from "../../models/exercise";
import { SampleSentence } from "../QuizSample";
import { ClueSentence } from "../QuizClue";
import { ChoiceGroup } from "../ChoiceGroup";
import ActionButton from "../ActionButton";

const Quiz = ({ exercise }: { exercise: IExercise }) => {
  return (
    <View style={style.quizBox}>
      <Text style={style.quizRequirement}>{exercise.quiz.requirements}</Text>
      <SampleSentence samples={exercise.quiz.samples} />
      <ClueSentence sentence={exercise.quiz.clues} />
      <ChoiceGroup choices={exercise.choices} />
      <ActionButton onClick={() => {}} />
    </View>
  );
};
export default Quiz;
