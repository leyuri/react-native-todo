import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Header />
      <TodoList/>
      <TodoInput/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1E3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
