import {View,Text} from "react-native"
import CompTodosWithStore from "./compTodosWithStore"
import { Provider } from "react-redux"
import {store} from "./store"

export default function (){
    return(
        <Provider store={store}>
            <CompTodosWithStore/>
        </Provider>
    )   }