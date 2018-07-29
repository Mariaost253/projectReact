import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import CostumerItem from '../components/CostumerItem';
import { removeCharacterById } from '../actions';
import { addCharacterById } from '../actions';
import { removeAllList } from '../actions';
import AddCustomer from '../components/AddCustomer';

class Costumers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            currentCustomer: null,
            openAddCustomer: false,
            
        }
    }

    onOpenModal = (customer) => {
        this.setState({ open: true, currentCustomer: customer });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onOpenModalAddCustomer = () => {
        this.setState({ openAddCustomer: true });
    };

    onCloseModalAddCustomer = () => {
        this.setState({ openAddCustomer: false });
    };


   

    render() {
        const { open,openAddCustomer } = this.state;
        return (
            <div className='users-list'>
                <div className='users-list-title' >
                    <h4>Name </h4>
                    <h4>Last Name </h4>
                    <h4> Extra Details </h4>
                </div>
                {
                    this.props.costumers.map((customer, index) => {
                        return (
                            <div className='users-list-item' key={index}>
                                <div className='users-list-item--field'>
                                    {customer.name}
                                </div>
                                <div className='users-list-item--field'>
                                    {customer.lastNmae}
                                </div>
                                <div className='users-list-item--field'
                                >


                                    <button className='users-list-item--button' onClick={() => this.onOpenModal(customer)}>Extra Details</button>
                                </div>
                                <button className='users-list-item--button'
                                    onClick={() => this.props.removeCharacterById(customer.id)}>
                                    X
                                </button>

                            </div>
                        );
                    })
                }

                <div className='users-list-item--btn'>
                    <button
                        className='users-list-item--button'
                        onClick={() =>this.onOpenModalAddCustomer()}
                    >
                        Add new
                    </button>
                </div>
                <Modal open={open} onClose={this.onCloseModal.bind(this)} center>
                    <CostumerItem customer={this.state.currentCustomer} />
                </Modal>

                 <Modal open={openAddCustomer} onClose={this.onCloseModalAddCustomer.bind(this)} center>
                    <AddCustomer />
                </Modal>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        costumers: state.costumers
    };
}

export default connect(mapStateToProps, { removeCharacterById, addCharacterById, removeAllList })(Costumers);