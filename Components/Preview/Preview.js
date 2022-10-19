import { StyleSheet, Text, View } from "react-native";

const Preview = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.currentInput}</Text>
      </View>
    </View>
  );
};
export default Preview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    justifyContent: "flex-end",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 48,
    // fontSize: 0.05 * width,
    paddingVertical: 25,
  },
});
