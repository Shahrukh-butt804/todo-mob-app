import {View,Text} from "react-native"
import TodoApp from "./(screens)/TodoApp"
import { Provider } from "react-redux"
import {store} from "./store"

export default function Home(){
    return(
        <Provider store={store}>
            <TodoApp/>
        </Provider>
    )   }