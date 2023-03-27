import { useReducer, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState("Fortune's second app!")
  return (
    <View style={styles.screen}>
      <View style={styles.inputPart}>
        <TextInput placeholder='New Task' style={styles.input}/>
        <Button title='Add' style={{backgroundColor: 'black'}}></Button>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 30
  },
  inputPart:{
    flexDirection: "row", 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input:{
    borderColor: 'black',
    padding: 5,
    borderBottomWidth: 1,
    width: '80%'
  }
})
