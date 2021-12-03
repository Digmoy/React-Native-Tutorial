import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text,Button,TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
      <Text style={styles.helloTextStyle}> Hello user</Text>
      <Text style={styles.reactTextStyle}> React Native</Text>

      <Button title="Click Here" color="red" onPress={()=>alert("Welcome to React Native")}disabled={true}></Button>
      <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Click Me</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloTextStyle: {
      fontSize: 20,
      color: "blue",
      fontWeight: "bold",
      fontStyle: "italic"
  },
  reactTextStyle: {
     fontSize: 16,
     color: "blue",
     fontWeight: "bold",
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
},
buttonText: {
    color: 'yellow',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
}
});
