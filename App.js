import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Home'
import ProfileScreen from './Profile'


const Stack = createNativeStackNavigator();


const App = () => {
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
    // <View style={styles.screenStyle}>
    //   <View style={styles.inputContainerStyle}>
    //     <TextInput placeholder="Enter Name" style={styles.textInputStyle} onChangeText={nameInputHandler} value={enterName}/>
    //     <Button title="ADD" onPress={addNameHandler}/>
    //   </View>
    //   <View>
    //     {userName.map((name) => <Text>{name}</Text>)}
    //   </View>
    // </View>

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  </NavigationContainer>
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

export default App;