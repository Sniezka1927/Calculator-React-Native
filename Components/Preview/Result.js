import { StyleSheet, Text, View } from "react-native";

const Result = (props) => {
  let result = eval(props.currentInput);
  if (props.advMethod !== null) {
    switch (props.advMethod) {
      case "sqrt":
        result = Math.sqrt(result);
        console.log(result);
        break;
    }
  }

  props.resetMethod();
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>{result}</Text>
      </View>
    </View>
  );
};
export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    justifyContent: "flex-end",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 24,
    paddingVertical: 25,
  },
});
