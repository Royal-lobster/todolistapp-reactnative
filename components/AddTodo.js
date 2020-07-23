import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

function AddTodo({submitHandler}) {
  const [text, setText] = useState('');
  const changeHandler = (e) =>{
    setText(e);
  };
  const pressHandler = (e) =>{
    submitHandler(text);
    setText('');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.addTaskText}>Enter Task Below</Text>
      <View style={styles.containerForm}>
      <TextInput 
        style={styles.input}
        placeholder='Eg. Make a Poster'
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button color='coral' onPress={pressHandler} title='add todo' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    margin:20,
    alignItems:'center',
    display: 'flex',
    flexDirection: "row"
  },
  container: {
    alignItems:'center',
    backgroundColor:'#eeeeee'
  },
  addTaskText: {
    padding: 8,
    fontSize:18,
    color:'#bbb',
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor:"#e2e2e2",
    borderRadius:5,
    marginRight:10,
    width:"100%"
  }
});
export default AddTodo;
