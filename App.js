import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screenStyle}>
      <View style={styles.inputContainerStyle}>
        <TextInput placeholder="Enter Name" style={styles.textInputStyle} />
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    padding: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  inputContainerStyle: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  textInputStyle: { width: '80%', borderBottomColor: 'black', borderWidth: 0.5, padding: 10 }
});
