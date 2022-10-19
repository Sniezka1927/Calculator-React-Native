import { StyleSheet, Text, View } from "react-native";

const Result = (props) => {
  console.log(props);
  console.log("Displaying Result");
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>{eval(props.currentInput)}</Text>
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
    fontSize: 72,
    paddingVertical: 25,
  },
});
