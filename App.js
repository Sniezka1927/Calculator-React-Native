import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Keyboard from "./Components/Keyboard/Keyboard";
import Preview from "./Components/Preview/Preview";
import Result from "./Components/Preview/Result";

export default function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const adjustInput = (elem) => {
    setShowResult(false);
    if (
      (currentInput[currentInput.length - 1] === "/" ||
        currentInput[currentInput.length - 1] === "*" ||
        currentInput[currentInput.length - 1] === "+" ||
        currentInput[currentInput.length - 1] === "-") &&
      (elem === "/" || elem === "*" || elem === "+" || elem === "-")
    ) {
      const adjustCurrentInput = currentInput.slice(0, -1) + `${elem}`;
      setCurrentInput(adjustCurrentInput);
    } else if (elem === "C") {
      const adjustCurrentInput = currentInput.substring(
        0,
        currentInput.length - 1
      );
      setCurrentInput(adjustCurrentInput);
    } else if (elem === "=") {
      setShowResult(true);
    } else {
      const adjustCurrentInput = `${currentInput}${elem}`;
      setCurrentInput(adjustCurrentInput);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        <Preview currentInput={currentInput}></Preview>
        {showResult ? <Result currentInput={currentInput}></Result> : ""}
      </View>
      <View style={styles.keyboard}>
        <Keyboard adjustInput={adjustInput}></Keyboard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
  },
  preview: {
    flex: 1,
    backgroundColor: "purple",
  },
  keyboard: {
    flex: 2,
    backgroundColor: "blue",
  },
});
