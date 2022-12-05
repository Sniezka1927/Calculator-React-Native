<<<<<<< HEAD
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const Keyboard = (props) => {
  const numbers01 = [1, 4, 7, "."];
  const numbers02 = [2, 5, 8, 0];
  const numbers03 = [3, 6, 9, "="];
  const methods = ["DEL", "C", "/", "*", "-", "+"];
  const adMethods = ["sqrt", "sin", "cos", "pow"];
=======
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
>>>>>>> b68fbaeb79d8989b17a9bdd1d903261871d45a66

  return (
    <View style={styles.container}>
      <View style={styles.numbers}>
        <View style={styles.numberRow}>
          {numbers01.map((elem) => {
            return (
              <Button
                key={elem}
                text={elem}
                adjustInput={props.adjustInput}
              ></Button>
            );
          })}
        </View>
        <View style={styles.numberRow}>
          {numbers02.map((elem) => {
            return (
              <Button
                text={elem}
                key={elem}
                adjustInput={props.adjustInput}
              ></Button>
            );
          })}
        </View>
        <View style={styles.numberRow}>
          {numbers03.map((elem) => {
            return (
              <Button
                text={elem}
                key={elem}
                adjustInput={props.adjustInput}
              ></Button>
            );
          })}
        </View>
      </View>
      {props.adv ? (
        ""
      ) : (
        <View style={styles.advanced}>
          {adMethods.map((elem) => {
            return (
              <Button
                key={elem}
                text={elem}
                adjustInput={props.adjustInput}
              ></Button>
            );
          })}
        </View>
      )}
      <View style={styles.methods}>
        {methods.map((elem) => {
          return (
            <Button
              text={elem}
              key={elem}
              adjustInput={props.adjustInput}
            ></Button>
          );
        })}
      </View>
    </View>
  );
};

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
  },
<<<<<<< HEAD
  numberRow: {
    flex: 1,
    flexDirection: "column",
  },
  numbers: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#545454",
  },
  methods: {
    flex: 1,
    backgroundColor: "#7e7e7e",
  },
  advanced: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#3d3d3d",
=======
  text: {
    fontSize: 36,
    color: "#a8a8a8",
>>>>>>> b68fbaeb79d8989b17a9bdd1d903261871d45a66
  },
});

export default Keyboard;
