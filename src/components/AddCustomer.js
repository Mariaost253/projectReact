import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addCharacterById} from '../actions';

class AddCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customers:{
                id: 6,
                name:'fghfgh',
                lastNmae:'fghfgh',
                gender:'',
                age:0,
                phone:0,
                email:'example@example.com'
            }

        }
    }
   
    addUser(){
        console.log(this.state);
    }

       
    
    render() {
        return (
            <div >
                <h4>Add a new customer</h4>
                <div className="list-costumer-items">
                name:<input type="text" alt="name" 
                onChange={event => this.setState({name: event.target.value})} />
                <br />
                last name:<input type="text" alt="lastNmae"
                onChange={event => this.setState({lastNmae: event.target.value})} />
                <br />
                gender:<input type="text" alt="gender" 
                onChange={event => this.setState({gender: event.target.value})} />
                <br />
                age:<input type="number" alt="age" 
                 onChange={event => this.setState({age: event.target.value})} />
                <br />
                email:<input type="text" alt="email" 
                 onChange={event => this.setState({email: event.target.value})} />
                <br />
                phone:<input type="number" alt="phone" 
                onChange={event => this.setState({phone: event.target.value})} />
                <br />
                </div>
                <button
                        className='users-list-item--button'
                        onClick = {() => this.props.addCharacterById(this.state.customers)}>
                    >
                        Add
                    </button>
            </div>

        );
    }
}


function mapStateToProps(state) {
    return {
        costumers: state.costumers
    };
}



export default connect(mapStateToProps, { addCharacterById })(AddCustomer);
