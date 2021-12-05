import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text,Button,TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      {/* <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput placeholder="Enter Name" style={{ width: '80%', borderBottomColor: 'black',borderWidth: 0.5, padding: 10}}/>
        <Button title="ADD"/>
      </View> */}
      <View style={{backgroundColor:'red',flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white'}}>1</Text>
      </View>
      <View style={{backgroundColor:'blue',flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white'}}>2</Text>
      </View>
      <View style={{backgroundColor:'green',flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white'}}>3</Text>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({

  });
