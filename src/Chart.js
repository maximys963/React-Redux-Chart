import React, {Component} from 'react'
import {connect} from "react-redux"
import faker from 'faker'
import Users from "./Users"

 class Chart extends Component{
    render(){
        // let randomUser = faker.internet.userName();
        return(
       <div>
              <Users/>
       </div>
        )
    }
}

// const mapStateToProps = (state) => {
//        return{
//            users: state
//        }
// };
// const mapDispatchToProps = (dispatch) =>{
//     return{
//         addNewUser: (username)=> dispatch({ type: "ADD_NEW_USER", username})
//     }
// };

export default Chart