import { StyleSheet, Text, View } from "react-native";

const Preview = (props) => {
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
    fontSize: 24,
    // fontSize: width / 12,
    paddingVertical: 35,
  },
});
