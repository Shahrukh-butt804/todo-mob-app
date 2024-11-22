import { StatusBar } from 'expo-status-bar';
import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';

import {
  StyleSheet, Text, View,
  SafeAreaView, TextInput, Button,
  FlatList, Pressable, TouchableHighlight,
  ScrollView
} from 'react-native';
import { useState } from 'react';





// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from '../../reducers/reducer';
import { addCompletedTodo } from '../../reducers/completeSlice';
import { Link, router } from 'expo-router';
import CompletedTodos from './completedTodos';


export default function App() {


  const [isTodo, setTodo] = useState('');
  const [isUpdating, setUpdating] = useState(false);
  const [id, setid] = useState("");
  const storeTodos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch();

  
  const handleKeyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === 'Enter') {
      TodoHandler();
    }
  };



  const TodoHandler = () => {
    if (isUpdating) {
      dispatch(updateTodo({ text: isTodo, id: id }))
      setUpdating(!isUpdating)
      setTodo("")

    }
    else {
      dispatch(addTodo(isTodo))
      setTodo("")
    }
  }


  const remove = (id) => {
    dispatch(removeTodo(id))
  }

  const updateHandler = (id) => {
    console.log(id)
    storeTodos.filter((todo) => {
      if (todo.id == id) {
        setTodo(todo.text)
        setid(id)
        setUpdating(!isUpdating)
      }
    })
  }

  let done = (item) => {
    // alert("this is id"+" "+item.id)
    dispatch(addCompletedTodo(item))
    remove(item.id)
  }








  return (

    <>
      <SafeAreaView style={[tw`bg-green-500`]}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text}>Todo App</Text>

        </View>
        <StatusBar style="auto" />


        <View style={styles.addDiv}>

          <TextInput
            style={[tw`mx-2 bg-green-200 text-green-800`, { height: 40, padding: 10, width: 285 }]}
            placeholder="Enter Your TODO Here"
            onChangeText={Text => setTodo(Text)}
            onKeyPress={handleKeyPress}
            defaultValue={isTodo}
          />
          <Button
            title="Add"
            color="green"
            onPress={() => TodoHandler()}

          />
        </View>
      </SafeAreaView>


      <ScrollView style={{ marginHorizontal: 5, display: "flex", justifyContents: "center", marginTop: 5 }}>
        {storeTodos ?
          <FlatList
            data={storeTodos}
            renderItem={({ item }) => (
              <>
                <Pressable style={[tw`bg-green-200 rounded `, { flexDirection: "row", padding: 10, justifyContent: 'space-between', justifyContents: "spaceBetween", marginVertical: 3, gap: 10, }]}>
                  <View>
                    <Text style={tw`text-green-800 font-bold `}>{item.text}</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 5 }}>
                    <TouchableHighlight
                      underlayColor="blue"
                      onPress={() => done(item)}><AntDesign name="checkcircle" size={18} color="black" /></TouchableHighlight>
                    <TouchableHighlight
                      underlayColor="green"
                      onPress={() => updateHandler(item.id)}><FontAwesome5 name="exchange-alt" size={18} color="black" /></TouchableHighlight>
                    <TouchableHighlight
                      underlayColor="red"
                      onPress={() => remove(item.id)}><MaterialIcons name="delete" size={20} color="black" /></TouchableHighlight>

                  </View>
                </Pressable>


                

              </>
            )}
            />
            :
            <></>
          }

      </ScrollView>
      <Button 
      title='completed Todos'
      color="green"
      onPress={() => router.replace("(screen)/completedTodos")}
      
      />
        {/* <Link href="/completedTodos">
          Completed Todos
        </Link> */}
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 13,
    padding: 10
  },
  addDiv: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginBottom: 8
  },

});