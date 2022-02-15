import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import style from "./style";
import { IClue } from "../../models/exercise";

export const ClueWord = ({ clue }: { clue: IClue }) => {
  const isKeyClue = clue.isKeyword && clue.text === "";
  const [isHintActive, setHintActive] = React.useState(false);
  const onPress = () => {
    if (clue.hint) {
      setHintActive(true);
      setTimeout(() => {
        setHintActive(false);
      }, 1000);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.clueWord}>
        <Text
          style={[style.clueWordText, clue.hint ? style.hintedClueWord : {}]}
        >
          {isKeyClue ? "________" : clue.text}
        </Text>
        <View
          style={[style.clueHint, isHintActive ? style.clueHintActive : {}]}
        >
          <Text>{clue.hint}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export const ClueSentence = ({ sentence }: { sentence: IClue[] }) => {
  return (
    <View style={style.container}>
      {sentence.map((clue, idx) => {
        return <ClueWord key={idx} clue={clue} />;
      })}
    </View>
  );
};
