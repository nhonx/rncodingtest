import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
    margin: 15,
    width: 180,
    height: 50,
  },
  buttonText: {
    color: "#555",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  }
});

export default style;
