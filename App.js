import { useReducer, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState("Fortune's second app!")
  return (
    <View style={styles.container}>
      <View>
        <TextInput/>
        <Button title='Add'></Button>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
