import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const CounterButton = (props) => {
  const { handleChangeCounter, name } = props;
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleChangeCounter()}
    >
      <Text style={styles.textSize}>{name}</Text>
    </TouchableOpacity>
  );
}

export default CounterButton;

const styles = StyleSheet.create({
  textSize: {
    fontSize: 20
  },
  button: {
    borderColor: '#eee',
    borderWidth: 2,
    padding: 5
  }
});
