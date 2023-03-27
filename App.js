import { useReducer, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([])
  const enteredGoalHandler = (e) =>{
    setNewGoal(e)
  }
  const addNewGoal = () =>{
    setGoals([...goals, newGoal])
    setNewGoal("")
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputPart}>
        <TextInput 
        placeholder='New Task' 
        style={styles.input}
        onChangeText={enteredGoalHandler}
        value = {newGoal}
        />
        <Button 
        title='Add' 
        color='black'
        onPress={addNewGoal}></Button>
      </View>
      <ScrollView>
        {goals.map((x,y)=>{
          return(
            <Text style={styles.listStyle} key={y}>{x}</Text>
          )
        })}
      </ScrollView>
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
  },
  button:{
    backgroundColor: "black",
    color: 'red'
  },
  listStyle:{
    borderWidth: 1,
    backgroundColor: "#ccd",
    color:'black',
    margin: 3,
    padding: 8,
    borderRadius: 3,
  }
})
