import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 50,
  },
  clueWord: {
    marginHorizontal: 10,

    position: "relative",
  },
  clueWordText: {
    fontSize: 24,
    color: "white",
  },
  hintedClueWord: {
    textDecorationLine: "underline",
    textDecorationStyle: "dotted",
    lineHeight: 28,
    fontWeight: "600",
  },
  clueHint: {
    display: "none",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    position: "absolute",
    width: "100%",
    bottom: 30,
    textAlign: "center",
    fontSize: 16,
  },
  clueHintActive: {
    display: "flex",
  },
  clueHintText: {},
});

export default style;
