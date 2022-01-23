import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);


  
  function change(text) {
    setAge(text);
    const lowerLimitResult = (220-text) * 0.65;
    setLowerLimit(lowerLimitResult);
    
    const upperLimitResult = (220-text) * 0.85;
    setUpperLimit(upperLimitResult);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.fields}>new Age</Text>
     
      <TextInput style={styles.field} value={age}
        onChangeText={text => change(text)}  keyboard-type='decimal-pad'>
      </TextInput>
      <Text style={styles.field}>HR limit</Text>
      
      <Text style={styles.field}>{lowerLimit.toFixed(0)} - {upperLimit.toFixed(0)}</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10
  },
  field: {
    marginBottom: 10
  }
});