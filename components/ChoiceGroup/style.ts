import { StyleSheet } from "react-native";

const choiceStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    paddingVertical: 40,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 500,
  },
  choiceBtn: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
    margin: 15,
    width: 120,
    height: 50,
  },
  choiceBtnText: {
    color: "#3C6C82",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  choiceBtnSelected: {
    backgroundColor: "#6391A8",
  },
  choiceBtnSelectedText: {
    color: "#6391A8",
  },
});

export default choiceStyle;
