import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [user, setUser] = useState('Zakaria TOBBAL');
  const [fruit, setFruit] = useState({name: 'Apple', price: 5});
  const changeName = () => {
    setUser('LeBron James');
    setFruit({name: 'Banana', price: 10});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.myStyle}>{user} is eating {fruit.name} which costs {fruit.price} </Text>
      <View style={styles.buttonStyle}><Button title="Change" onPress={changeName}/></View>
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
  myStyle: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
  },
  buttonStyle: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
