import { SetStateAction, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Button } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [todos, setTodos] = useState([{ id: 1, title: 'Task 1', completed: false }, { id: 2, title: 'Task 2', completed: false }, { id: 3, title: 'Task 3', completed: true }, { id: 4, title: 'Task 4', completed: false }]);
  const [newTask, setNewTask] = useState('');

  const pressHandler = (id: number) => {
    setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  const addTask = () => {
    if (newTask.trim()) {
      setTodos(prevTodos => [...prevTodos, { id: prevTodos.length + 1, title: newTask, completed: false }]);
      setNewTask('');
    }
  }



  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={newTask
        } onChangeText={setNewTask}/>
        <Button title="Add task" onPress={() => addTask()} />
      </View>
      
      <FlatList
        data={todos}
        renderItem={({ item }) =>
          <TouchableOpacity
            onPress={() => pressHandler(item.id)}
            style={{...styles.todo, backgroundColor: item.completed ? 'lightgreen' : 'lightgray'}}
            >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        }
        keyExtractor={item => item.id.toString()}
        numColumns={3}
      />

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  todo: {
    backgroundColor: 'lightgray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
});
