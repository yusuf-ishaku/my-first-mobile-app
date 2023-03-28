import { useReducer, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Modal, FlatList, TouchableNativeFeedback} from 'react-native';

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [modalv, setModalV] = useState(false)
  const enteredGoalHandler = (e) =>{
    setNewGoal(e)
  }
  const addNewGoal = () =>{
    setGoals([...goals, newGoal])
    setNewGoal("")
  }
  const deleteGoal = (goal) =>{
    setGoals(goalss =>{
      return goalss.filter((x, y) => y !== goal )
    })
  }
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" color="black" onPress={() =>{if(!modalv){setModalV(true)}else{setModalV(false)}}} ></Button>
      <Modal visible={modalv} animationType="slide">
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
      </Modal>
        
      
      {/* <ScrollView>
        {goals.map((x,y)=>{
          return(
            <Text style={styles.listStyle} key={y}>{x}</Text>
          )
        })}
      </ScrollView> */}
      <FlatList data={goals} renderItem={itemdata => (
        <TouchableNativeFeedback>
          <View>
            <Text style={styles.listStyle} onPress={() =>{deleteGoal(itemdata.index)}} key={itemdata.index}>{itemdata.item}</Text>
          </View>
        </TouchableNativeFeedback>
      )}></FlatList>
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
