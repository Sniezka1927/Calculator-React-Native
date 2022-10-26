import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const Button = (props) => {
  const onPress = () => {
    props.adjustInput(props.text);
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontSize: 36,
    color: "#a8a8a8",
  },
});

export default Button;
