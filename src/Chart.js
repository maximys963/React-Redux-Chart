import React, {Component} from 'react'
import {connect} from "react-redux"

 class Chart extends Component{
    render(){
        console.log(this.props);
        return(
            <div>{this.props.users.map((person)=>{
                return <div key={person}>{person}</div>
            })}

            <button onClick={() => this.props.dispatch({ type: "ADD_NEW_USER"})}>Create new</button>
            </div>

        )
    }
}

export default connect( state =>{
    return{
        users: state
    }
})(Chart)