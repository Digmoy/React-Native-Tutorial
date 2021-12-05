import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';

export default function App() {
  const [enterName,setEnteredName] = useState("")
  const [userName,setUserName] = useState([])

  function nameInputHandler(enteredText){
    setEnteredName(enteredText)
  }

  const addNameHandler = () =>{
    console.log(enterName)
    setUserName(currentUser => [...userName,enterName])
  }

  return (
    <View style={styles.screenStyle}>
      <View style={styles.inputContainerStyle}>
        <TextInput placeholder="Enter Name" style={styles.textInputStyle} onChangeText={nameInputHandler} value={enterName}/>
        <Button title="ADD" onPress={addNameHandler}/>
      </View>
      <View>
        {userName.map((name) => <Text>{name}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    padding: 50
  },
  inputContainerStyle: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  textInputStyle: { width: '80%', borderBottomColor: 'black', borderWidth: 0.5, padding: 10 }
});
