import { SetStateAction, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [todos, setTodos] = useState(
    [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
      },
      {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
      },
      {
        userId: 1,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false
      },
      {
        userId: 1,
        id: 7,
        title: "illo expedita consequatur quia in",
        completed: false
      },
      {
        userId: 1,
        id: 8,
        title: "quo adipisci enim quam ut ab",
        completed: true
      },
      {
        userId: 1,
        id: 9,
        title: "molestiae perspiciatis ipsa",
        completed: false
      },
      {
        userId: 1,
        id: 10,
        title: "illo est ratione doloremque quia maiores aut",
        completed: true
      }
    ]
  );

  const pressHandler = (id: number) => {
    // pass completed to !completed
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo;
      })
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      


      {/* <FlatList
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
      /> */}

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
    width: 100,
    borderRadius: 10
  },
  appBar: {
    // on top of the screen
    position: 'absolute',
    top: 50,
    // font color
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    width: 1000,
    borderRadius: 10
  }
});
