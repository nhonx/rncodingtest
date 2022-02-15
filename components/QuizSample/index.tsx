import React from "react";
import { Text, View } from "react-native";
import style from "./style";
import { ISample } from "../../models/exercise";

export const SampleWord = ({ sample }: { sample: ISample }) => {
  return (
    <View style={style.sampleWord}>
      <Text
        style={[
          style.sampleWordText,
          sample.isFocus ? style.focusedSampleWord : {},
        ]}
      >
        {sample.text}
      </Text>
    </View>
  );
};
export const SampleSentence = ({ samples }: { samples: ISample[] }) => {
  return (
    <View style={style.container}>
      {samples.map((sample, idx) => {
        return <SampleWord key={idx} sample={sample} />;
      })}
    </View>
  );
};
