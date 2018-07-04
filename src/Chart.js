import React, {Component} from 'react'
import {connect} from "react-redux"
import faker from 'faker'

 class Chart extends Component{
    render(){
        let randomUser = faker.internet.userName();
        // console.log(this.props);
        return(
           <div>
            <div>{this.props.users.map((person)=>{
                return <div key={person}>{person}</div>
            })}
            </div>

            <button onClick={()=> this.props.addNewUser(randomUser)}>Create new</button>
           </div>

        )
    }
}

const mapStateToProps = (state) => {
       return{
           users: state
       }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        addNewUser: (username)=> dispatch({ type: "ADD_NEW_USER", username})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart)