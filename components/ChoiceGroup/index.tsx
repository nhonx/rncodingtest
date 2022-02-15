import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import style from "./style";
import { IChoice } from "../../models/exercise";
import { ActionType, IAppStateDispatch, store } from "../../state/store";

export const ChoiceGroup = ({ choices }: { choices: IChoice[] }) => {
  const { state, dispatch } = React.useContext(store) as IAppStateDispatch;
  // const [selectedChoice, setSeletedChoice] = React.useState<IChoice>(
  //   {} as IChoice
  // );
  const setChoice = (choice: IChoice) => {
    dispatch({
      type: ActionType.SET_CHOICE,
      choice: choice,
    });
  };
  // React.useEffect(() => {

  // }, [state.currentQuiz.selectedChoice]);
  return (
    <View style={style.container}>
      {choices.map((choice, idx) => {
        return (
          <TouchableOpacity
            key={idx}
            onPress={() => {
              setChoice(choice);
            }}
          >
            <View
              style={[
                style.choiceBtn,
                state.currentQuiz.selectedChoice?.text === choice.text
                  ? style.choiceBtnSelected
                  : {},
              ]}
            >
              <Text
                style={[
                  style.choiceBtnText,
                  state.currentQuiz.selectedChoice?.text === choice.text
                    ? style.choiceBtnSelectedText
                    : {},
                ]}
              >
                {choice.text}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
