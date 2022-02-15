import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import style from "./style";

interface IActionButtonProps {
  onClick: () => void;
}

const ActionButton = ({ onClick }: IActionButtonProps) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={style.button}>
        <Text style={style.buttonText}>Continue</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ActionButton;
