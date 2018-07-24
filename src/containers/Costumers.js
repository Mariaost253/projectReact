import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import Modal from 'react-responsive-modal';
import CostumerItem from '../components/CostumerItem';
import {removeCharacterById} from '../actions';
import {addCharacterById} from '../actions';
import {removeAllList} from '../actions';

class Costumers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };
     
/*
    componentDidMount() {
        this.setState({
            costumers
        })
    }
    addNewUser() {
        let temp = this.state.costumers
        temp.push({
            name: 'David',
            lastNmae: 'Blop',
            gender: 'Male',
            age:72,
            phone: 4455555,
            email: 'example@example.com'
        })
        this.setState({ costumers: temp })
    }*/
   
    render() {
        const { open } = this.state;
        return (
            <div className='users-list'>
             <div className='users-list-title' >
             <h4>Name </h4> 
             <h4>Last Name </h4>
             <h4> Extra Details </h4> 
             </div>
            {
                     this.props.costumers.map((costumer,index)=> {
            return (
                <div className='users-list-item' key={index}>
                    <div className='users-list-item--field'>
                        {costumer.name}
                    </div>
                    <div className='users-list-item--field'>
                        {costumer.lastNmae}
                    </div>
                    <div className='users-list-item--field' 
                  >
                 
                       <button className='users-list-item--button' onClick={this.onOpenModal}>Extra Details</button>
                        <Modal open={open} id={costumer.id} onClose={this.onCloseModal.bind(this)} center>
                        <CostumerItem />
                        </Modal>
                 </div>
                 <button className='users-list-item--button'
                 onClick={()=>this.props.removeCharacterById(costumer.id)}>
                  X
          </button>
                    
                </div>
            );
        })
    }
      
                <div className='users-list-item--btn'>
                    <button
                        className='users-list-item--button'
                        onClick={() => this.addNewUser()}
                    >
                        Add new
                    </button>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        costumers: state.costumers
    };
}

export default connect (mapStateToProps,{removeCharacterById,addCharacterById,removeAllList})(Costumers);