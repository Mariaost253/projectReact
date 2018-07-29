import costumers_json from '../data/costumers.json';
import {ADD_COSTUMER,REMOVE_COSTUMER } from '../actions';





function costumers(state = costumers_json, action){
    switch(action.type){
        case ADD_COSTUMER:
        let costumers=[...state, action.items];
            return costumers;
        case REMOVE_COSTUMER:
            costumers=state.filter(item => item.id!== action.id );
            return costumers;
        default:
        return state;
    
    }
}


export default costumers;