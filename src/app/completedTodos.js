
import {
    StyleSheet, Text, View,
    FlatList, Pressable, 
    ScrollView,TouchableHighlight
  } from 'react-native';
  import tw from 'twrnc';
  import { useDispatch, useSelector } from 'react-redux';
  import { removeCompletedTodo } from '../../reducers/completeSlice';

  import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';




export default function(){
    // const compTodos = useSelector((state) => state.completedTodosSlice.completedTodos)
    // const dispatch =useDispatch()


    // function remove(id){
    //     dispatch(removeCompletedTodo(id));
    // }

    return(

       <View>
            <Text>Completed Todos</Text>
            {/* {compTodos.length>0 &&

            <FlatList
            data={compTodos}
            renderItem={({ item }) => (
                <>
                  <Pressable style={[tw`bg-green-200 rounded `, { flexDirection: "row", padding: 10, justifyContent: 'space-between', justifyContents: "spaceBetween", marginVertical: 3, gap: 10, }]}>
                    <View>
                      <Text style={tw`text-green-800 font-bold `}>{item.text}</Text>
                    </View>
                    <View>
                    <TouchableHighlight
                      underlayColor="red"
                      onPress={() => remove(item.id)}><MaterialIcons name="delete" size={20} color="black" /></TouchableHighlight>
                    </View>
                  </Pressable>
                </>
              )}
              keyExtractor={item => item.id}
              />
            } */}
       </View>

    );
}