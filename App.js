import { useReducer, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState("Fortune's second app!")
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title='Get Started' onPress={() =>{setText("Fortune's first app")}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
