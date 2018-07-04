import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Chart from './chart'

const usersState = ["John Doe", "Loremo de Ipsumio", "Carl Carling"];
const reducer = (state = usersState , action) =>{
    if(action.type === "ADD_NEW_USER"){
        console.log(action);
        return state.concat(action.username);
    }
    console.log(action);
return state
};
const store = createStore( reducer );
window.store = store;
store.subscribe(()=>{
   console.log("store has been changed");
});

export default class TestComp extends Component{
    render(){
        return(
        <Provider store={store}>
     <Chart/>
        </Provider>
        )
    }
}