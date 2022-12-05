import { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Keyboard from "./Components/Keyboard/Keyboard";
import Preview from "./Components/Preview/Preview";
import Result from "./Components/Preview/Result";

export default function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [orientation, setOrientation] = useState(true);

  const isPortrait = () => {
    let dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  Dimensions.addEventListener("change", () => {
    const isVertical = isPortrait();
    setOrientation(isVertical);
  });

  const adjustInput = (elem) => {
    setShowResult(false);
    if (
      (currentInput[currentInput.length - 1] === "/" ||
        currentInput[currentInput.length - 1] === "*" ||
        currentInput[currentInput.length - 1] === "+" ||
        currentInput[currentInput.length - 1] === "-" ||
        currentInput[currentInput.length - 1] === ".") &&
      (elem === "/" ||
        elem === "*" ||
        elem === "+" ||
        elem === "-" ||
        elem === ".")
    ) {
      const adjustCurrentInput = currentInput.slice(0, -1) + `${elem}`;
      setCurrentInput(adjustCurrentInput);
      setResult(eval(currentInput));
    } else if (elem === "C") {
      const adjustCurrentInput = currentInput.substring(
        0,
        currentInput.length - 1
      );
      setCurrentInput(adjustCurrentInput);
      setResult(eval(currentInput));
    } else if (elem === "DEL") {
      setCurrentInput("");
      setResult(null);
    } else if (elem === "=") {
      setResult(eval(currentInput));
      setShowResult(true);
    } else if (
      elem === "sqrt" ||
      elem === "sin" ||
      elem === "cos" ||
      elem === "pow"
    ) {
      switch (elem) {
        case "sqrt":
          setResult(Math.sqrt(eval(result)));
          break;
        case "sin":
          setResult(Math.sin(eval(result)));
          break;
        case "cos":
          setResult(Math.cos(eval(result)));
          break;
        case "pow":
          setResult(Math.pow(eval(result), 2));
          break;
      }
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
        {showResult ? <Result result={result}></Result> : ""}
      </View>
      <View style={styles.keyboard}>
        <Keyboard adjustInput={adjustInput} adv={orientation}></Keyboard>
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
