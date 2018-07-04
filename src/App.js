import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Chart from './chart'

const usersState = ["John Doe", "Loremo de Ipsumio", "Carl Carling"];
const reducer = (state = usersState , action) =>{
    console.log(action);
return state
};
const store = createStore( reducer );
window.store = store;

export default class TestComp extends Component{
    render(){
        return(
        <Provider store={store}>
     <Chart/>
        </Provider>
        )
    }
}