import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

export default function App() {
  const [data, setData] = React.useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TodoList data={data} onToggle={ id => {
        const newData = data.map(item => {
          if (item.id == id) {
            item.done = !item.done;
          }
          return item;
        });
        setData(newData);
      }}/>
      <TodoInput onSubmit={(title) => {
        setData([{ id: title + (data.length + 1), title: title, done: false}, ...data]);
      }}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9ad7c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
