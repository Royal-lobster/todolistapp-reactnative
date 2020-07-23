import React from "react";
import { List, Text, TouchableOpacity, StyleSheet } from "react-native";

function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <Text style={styles.item}>{item.task}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    item: {
      padding: 16,
      marginTop: 16,
      backgroundColor:'#eeeeee',
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: "dashed",
      borderRadius: 1,
      borderRadius: 10,
    }
  });
export default TodoItem;
