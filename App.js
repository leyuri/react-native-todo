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
      <TodoList data={data}/>
      <TodoInput onSubmit={(title) => {
        setData([{ id: title + (data.length + 1), title: title, done: false}, ...data]);
      }}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBCDE5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
