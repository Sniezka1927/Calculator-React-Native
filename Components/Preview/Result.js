import { StyleSheet, Text, View } from "react-native";

const Result = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.result}</Text>
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
    alignItems: "flex-end",
    flexDirection: "row",
    // flexWrap: "wrap",
  },
  text: {
    fontSize: 42,
    paddingVertical: 10,
  },
});
