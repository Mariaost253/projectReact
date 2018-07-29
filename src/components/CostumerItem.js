import React, { Component } from 'react';



class CostumerItem extends Component {
    render() {
        const { customer } = this.props
        return (
            <div >
                <h4>Costumer Details</h4>
                <div className="list-costumer-items">
                    {customer.name}
                </div>
            </div>

        );
    }
}

export default CostumerItem
