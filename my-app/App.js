import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);

  function handleNumberInput(value) {
    if (operator === null) {
      setFirstValue(prevValue => (prevValue === null ? value.toString() : prevValue + value.toString()));
      setDisplayValue(prevValue => (prevValue === '0' ? value.toString() : prevValue + value.toString()));
    } else {
      setSecondValue(prevValue => (prevValue === null ? value.toString() : prevValue + value.toString()));
      setDisplayValue(prevValue => prevValue + value.toString());
    }
  }

  function handleOperatorInput(value) {
    if (operator === null) {
      setOperator(value);
      setDisplayValue(prevValue => prevValue + value.toString());
    } else {
      const result = evaluateOperation(firstValue, secondValue, operator);
      setFirstValue(result);
      setSecondValue(null);
      setOperator(value);
      setDisplayValue(result.toString() + value.toString());
    }
  }

  function handleEqualInput() {
    if (operator !== null && secondValue !== null) {
      const result = evaluateOperation(firstValue, secondValue, operator);
      setFirstValue(result);
      setSecondValue(null);
      setOperator(null);
      setDisplayValue(result.toString());
    }
  }

  function handleClearInput() {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue(null);
    setSecondValue(null);
  }

  function evaluateOperation(firstValue, secondValue, operator) {
    switch (operator) {
      case '+':
        return parseInt(firstValue) + parseInt(secondValue);
      case '-':
        return parseInt(firstValue) - parseInt(secondValue);
      case '*':
        return parseInt(firstValue) * parseInt(secondValue);
      case '/':
        return parseInt(firstValue) / parseInt(secondValue);
      default:
        return null;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.botoes}>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(7)}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(8)}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(9)}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorInput('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(4)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(5)}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(6)}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorInput('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(1)}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(2)}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(3)}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorInput('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(0)}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorInput('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleEqualInput()}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleClearInput()}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 45,
  },
  botoes: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    border: 'solid black',
    backgroundColor: '#fff',
    width: 90,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
});