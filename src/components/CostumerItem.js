import React, { Component } from 'react';
import {connect} from 'react-redux'; 


class CostumerItem extends Component{

   createList(){
       return this.props.costumers.map(heros =>{
    return(
        <div>
        <div className='users-list-item--field' key={heros.id}> <b>Phone:</b>{heros.phone}</div>
       <div className='users-list-item--field'> <b>Email:</b>{heros.email}</div>
        <div className='users-list-item--field'><b>Age:</b>{heros.age}</div>
        </div>
         );
       }
    ) 
   }

    render(){
       
       
        return(
            <div >
                <h4>Costumer Details</h4>
                <div className="list-costumer-items">
                    {this.createList()}
                    </div>
                </div>

        );
    }
}


function mapStateToProps(state){
    console.log(state);

    return {
        costumers:state.costumers
    };
}




export default connect(mapStateToProps)(CostumerItem);
