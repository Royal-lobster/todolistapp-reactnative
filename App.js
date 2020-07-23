import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  // state
  const [todos, setTodos] = useState([
    { task: "Make coffee", key: 1 },
    { task: "Read Articles", key: 2 },
    { task: "Make a Blog Post", key: 3 },
  ]);
  //press Handler for deleting the todo items
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  //submit handler
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text, key: Math.random().toString() }, ...prevTodos];
    });
    console.log(todos);
  };

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <AddTodo submitHandler={submitHandler} />
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
